#!/usr/bin/env python3
"""Generate/cache Azure Speech MP3 assets. Run from GitHub Actions with the repository secret."""
import hashlib
import html
import json
import os
from pathlib import Path
import re
import urllib.request
import urllib.error
import time

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'audio' / 'azure'
OUT.mkdir(parents=True, exist_ok=True)
api_key = os.environ.get('AZURE_SPEECH_KEY')
if not api_key:
    raise SystemExit('Missing AZURE_SPEECH_KEY GitHub Actions secret.')
region = os.environ.get('AZURE_SPEECH_REGION', 'eastus')
page = (ROOT / 'index.html').read_text(encoding='utf-8')
match = re.search(r'const LESSON_HTML=("(?:\\.|[^"\\])*");', page)
if not match:
    raise SystemExit('Cannot locate original embedded lesson: stopping without modifying website.')
lesson = json.loads(match.group(1))

# Approved initial course, and phrases used by its buttons. Exact string keys
# ensure the HTML can select the right file without exposing the API key.
texts = {
 'one','two','three','four','five','six','seven','eight','nine','ten',
 'You got it!','Oops, wrong!','I have','I see','I can','count','s','bird','birds',
 'I have two pens.','I see five birds.','I can count to ten.','one bag, two pens',
}
# Pull the exact story from the existing course rather than paraphrasing it.
for pattern in [r"\bstory\s*:\s*'((?:\\.|[^'\\])*)'",r"\bspokenEn\s*:\s*'((?:\\.|[^'\\])*)'",r"\ben\s*:\s*'((?:\\.|[^'\\])*)'"]:
    for item in re.findall(pattern, lesson):
        txt=item.replace("\\'", "'")
        if re.search('[A-Za-z]', txt) and len(txt) <= 1500: texts.add(txt)
# Extract English word labels and any explicit TTS phrase segments.
for en in re.findall(r"\[\s*'([^']{1,90})'\s*,\s*'[^']+'\s*\]",lesson):
    if re.search('[a-zA-Z]', en): texts.add(en)
for en in re.findall(r"\[\s*'([^']{1,150})'\s*,\s*'en-US'\s*\]",lesson):
    texts.add(en)
# Limited initial catalog to avoid accidentally consuming the free tier on unrelated UI strings.
texts={t for t in texts if t.strip() and len(t) <= 1500}
voices={'en-US':'en-US-JennyNeural','en-GB':'en-GB-SoniaNeural'}
def synthesize(request, label):
    # Azure F0 supports up to 20 text-to-speech transactions per 60 seconds.
    # Also retry transient 429 responses caused by voice capacity in a region.
    for attempt in range(1, 7):
        try:
            with urllib.request.urlopen(request, timeout=40) as response:
                return response.read()
        except urllib.error.HTTPError as exc:
            if exc.code != 429:
                details = exc.read(400).decode('utf-8', errors='replace')
                raise RuntimeError(f'Azure returned HTTP {exc.code}; {details[:200]}') from None
            if attempt == 6:
                raise RuntimeError('Azure repeatedly returned 429 after six attempts. F0 rate limit, monthly quota, or regional voice capacity may be the cause. Check Azure usage and retry later without upgrading.') from None
            retry = exc.headers.get('Retry-After', '')
            try:
                seconds = max(float(retry), 4.0)
            except ValueError:
                seconds = min(10 * attempt, 45)
            print(f'Azure HTTP 429 ({label}), retry {attempt}/5 after {seconds:g}s', flush=True)
            time.sleep(seconds)
    raise AssertionError('Unreachable')

manifest={}
for locale, voice in voices.items():
    for text in sorted(texts):
        name=hashlib.sha256((locale+'|'+text).encode()).hexdigest()[:24]+'.mp3'
        dest=OUT/name
        if not dest.exists():
            ssml=f'<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="{locale}"><voice name="{voice}">{html.escape(text)}</voice></speak>'
            request=urllib.request.Request(
                f'https://{region}.tts.speech.microsoft.com/cognitiveservices/v1',
                data=ssml.encode('utf-8'),method='POST',headers={
                    'Ocp-Apim-Subscription-Key':api_key,
                    'Content-Type':'application/ssml+xml',
                    'X-Microsoft-OutputFormat':'audio-24khz-48kbitrate-mono-mp3',
                    'User-Agent':'wordmatch-lesson-audio'
                }
            )
            audio=synthesize(request, locale)
            if not audio:raise RuntimeError('Empty audio for '+repr(text))
            dest.write_bytes(audio)
            time.sleep(3.5)  # Stay comfortably under the F0 request-rate cap.
        manifest[locale+'|'+text]=name
(OUT/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
print('Ready:',len(manifest),'voice clips (both accents).')
