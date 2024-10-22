import { createServer } from 'node:http';

function startServerWithDelay(callback, index = 0, step = 1, limit = 5, PORT = 8000) {
  setTimeout(function() {
    console.clear();
    if (index < limit) {
      index = index + step;
      callback(index);
      startServerWithDelay(callback, index);
    } else {
      console.log(`After ${index} seconds\n`);
      console.log('server.listen(PORT)\n');
      server.listen(PORT);
      console.log(`Server running at http://localhost:${PORT}/`);
    }
  }, step * 1000);
}

let counter = 0;

const server = createServer(function (request, response) {
  if (request.url === '/counter') {
    response.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    });

    const intervalId = setInterval(() => {
      counter++;
      if (counter < 101) {
        response.write(`data: Counter: ${counter}\n\n`);
      } else {
        response.write(`data: COUNTER ENDED AT NUMBER: ${counter - 1}\n\n`);
        clearInterval(intervalId);
      }
    }, 1000);

    request.on('close', () => {
      clearInterval(intervalId);
    });
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`
      <html>
        <head></head>
        <body>
          <h1 id="counter" style="font-size: 5rem; text-align: center;">Counter with SSE</h1>
          <script>
            const eventSource = new EventSource('/counter');
            eventSource.onmessage = function(event) {
              document.getElementById('counter').textContent = event.data;
            };
          </script>
        </body>
      </html>
    `);
  }
});

startServerWithDelay(function (number) {
  console.log(number);
});
