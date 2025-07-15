const TextDecoder = require('text-encoding').TextDecoder;
const requestTask = wx.request({
  url: 'http://localhost:3000/sse',
  enableChunked: true,
  header: { 'Content-Type': 'application/json' },
  method: 'post',
  data: 'XXX', // 按照你所对接API接口参数
  success: () => {
    console.info('发送成功')
  },
  fail() {
    wx.showToast({
      title: '发送失败，请重试',
      icon: 'error'
    })
  }
})

const decoder = new TextDecoder('utf-8');

// 处理接收到的数据块
requestTask.onChunkReceived(function (res) {
  if (res.data instanceof ArrayBuffer) {
    try {
      // 解码为字符串
      const str = decoder.decode(new Uint8Array(res.data));
      console.log('收到SSE数据:', str);

      // 如果数据是JSON格式，可以进一步解析
      try {
        const jsonData = JSON.parse(str);
        console.log('解析后的JSON数据:', jsonData);
      } catch (e) {
        // 数据可能不是完整的JSON或不是JSON格式
        console.log('接收到的是普通文本数据');
      }
    } catch (error) {
      console.error('解码数据时出错:', error);
    }
  }
});