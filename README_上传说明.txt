单词消消乐 · Azure AI 语音上传包

1. 请把本压缩包内的 index.html 上传到仓库根目录，覆盖旧 index.html。
2. 同时上传 scripts/generate_azure_speech.py 及 .github/workflows/generate-azure-voice.yml，保持目录结构不变。
3. 你的 AZURE_SPEECH_KEY 已经添加到 GitHub Actions secrets，无须在 HTML 填入或向任何人透露密钥。
4. 进入 GitHub 仓库 → Actions → Generate Azure AI English voice → Run workflow。
5. 等运行完成，GitHub 会自动增加 audio/azure/manifest.json 和音频MP3，网页才开始真正使用 Azure 配音。
6. GitHub Actions 如出现写入权限拒绝：仓库 Settings → Actions → General → Workflow permissions → Read and write permissions。

语音：美式 en-US-JennyNeural，英式 en-GB-SoniaNeural。
当前先支持已完成课程中的英文句子、单词和示范片段，未生成的文本会提示并用设备声音回退。
原页面的设计、课程与交互保持不变；Azure 是提前生成音频，不需要部署服务器或公开密钥。
