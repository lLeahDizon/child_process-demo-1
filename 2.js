const {Worker, isMainThread, parentPort} = require('worker_threads')

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.once('message', (message) => {
    console.log(message);  // 打印 'Hello, world!'。
  });
  worker.postMessage('Hello, world!');
} else {
  // 当收到来自父线程的消息时，则将其发回：
  parentPort.once('message', (message) => {
    parentPort.postMessage(message);
  });
}
