async function startSSE() {
  const response = await fetch('http://localhost:3000/sse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Hello, world!',
    }),
  });
  const reader = response.body?.getReader(); // 可读流  读取流式数据
  // const read = await reader?.read(); //  reader?.read()是promise
  // console.log('read', read);
  /**
   * {done: false, value: Uint8Array(44)}
   * done: false 表示数据未结束; true 表示数据结束;
   * value: Uint8Array(44) 表示二进制数据内容; (字节数组)
   */
  const decoder = new TextDecoder(); // 解码器 读取字节数组
  // const text = decoder.decode(read?.value);
  // console.log("text", text);

  while (true) {
    const read = await reader?.read();
    if (read?.done) break;
    const text = decoder.decode(read?.value);
    const lines = text.split('\n');
    for (const line of lines) {
      if (line.startsWith('data:')) {
        const data = line.split('data:')[1];
        console.log(data);
      }
    }
  }
}
startSSE();
