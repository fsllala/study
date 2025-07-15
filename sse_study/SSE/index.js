const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors()); // 解决跨域问题

app.post('/sse', (req, res) => {
  // 设置响应头
  res.set({
    'Content-Type': 'text/event-stream', //  SSE的响应头必须设置为text/event-stream
    'Cache-Control': 'no-cache', // 禁止缓存，确保每次都能拿到最新的数据。
    Connection: 'keep-alive', // 保持TCP长连接 允许服务端持续推送数据
  });

  res.flushHeaders(); // 快速响应: 让浏览器尽早识别这是一个 SSE 连接

  timer = setInterval(() => {
    res.write(`id: ${Date.now()}\n`);
    res.write(`data: ${Math.random()}\n\n`);
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
