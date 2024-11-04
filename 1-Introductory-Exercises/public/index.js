const url = new URL(window.location);
const token = url.searchParams.get('token');
let webSocketConnector = new WebSocket(`ws://localhost:8080/?token=${token}`);

webSocketConnector.onopen = () => {
  console.log('Connected to the server');
  webSocketConnector.send(JSON.stringify({ token, command: 'hello', payload: { message: 'Start a run' } }));
};

webSocketConnector.onmessage = (message) => {
  console.log(`Received message: ${message}`);
};

// import { WebSocketClient } from '/js/src/index.js';

// const ws = new WebSocketClient();