const http = require('node:http');

const port = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
	if (request.url === '/' && request.method === 'GET') {
		response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
		response.end('Hello from your Node.js project!\n');
		return;
	}

	response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
	response.end('Not found\n');
});

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
