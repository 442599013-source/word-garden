V4.2 双重修复包
1. GitHub 仓库根目录替换 index.html 和 wordmatch-game.html。
2. Cloudflare Workers & Pages > wordmatch-voice > Edit Code 部署 worker.js；保持既有 AUDIO_CACHE 绑定、AZURE_SPEECH_KEY 密钥、AZURE_SPEECH_REGION=eastus。
3. Chrome/iPhone 浏览器首次点击字母触发语音。若 Worker 未同步更新，中文仍可能报 400。
4. 本版本为统一修复包，请先看内附手机截图核对视觉；部署前无法验证你账户的真实 Azure 密钥及调用额度。
