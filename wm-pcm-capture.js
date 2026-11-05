/* AudioWorklet: microphone samples only. No network or persistent storage. */
class WMPcmCapture extends AudioWorkletProcessor {
 process(inputs){const channels=inputs[0];if(channels?.length){const data=new Float32Array(channels[0].length);for(const channel of channels)for(let i=0;i<data.length;i++)data[i]+=channel[i]/channels.length;this.port.postMessage(data.buffer,[data.buffer])}return true}
}
registerProcessor('wm-pcm-capture',WMPcmCapture);
