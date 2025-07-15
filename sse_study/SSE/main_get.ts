const eventSource = new EventSource('http://localhost:3000/sse');

eventSource.addEventListener('open', () => {
  console.log('SSE连接成功');
});


const app = document.getElementById('app') as HTMLDivElement;
const arr: string[] = [];
eventSource.addEventListener('message', (event) => {
  arr.push(...event.data.split(''));
  app.innerHTML += arr.shift();
});

eventSource.addEventListener('error', (event) => {
  console.log(event);
});