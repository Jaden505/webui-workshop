const { HttpServer, WebSocket, WebSocketMessage, LogManager } = require('@aliceo2/web-ui');

const logger = LogManager.getLogger('live-demo');

const http = new HttpServer({ port: 8080});
const wsServer = new WebSocket(http);
http.addStaticPath('public');

http.get('/hello-world', (_, res) => {
  res.status(200).json({message: 'Hello World!'});
}, {public: true});

http.get('/hello-private', (_, res) => {
  res.status(200).json({message: 'Hi, there'})
});

wsServer.bind('hello', (message) => {
  logger.infoMessage(`Received message: ${message}`);

  return new WebSocketMessage(200).setCommand('hello').setPayload({ message: 'Hello, browser!' });
});