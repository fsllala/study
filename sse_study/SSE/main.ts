import { fetchEventSource } from '@microsoft/fetch-event-source';


fetchEventSource('http://localhost:3000/sse', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'Hello, world!',
  }),
  onmessage(event) {
    console.log('event', event);
  },
  onerror(event) {
    console.log('event', event);
  },
});