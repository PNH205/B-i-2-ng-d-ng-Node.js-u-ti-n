
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Thay tên sinh viên của bạn vào đây
const studentName = 'Phạm Ngọc Hiếu';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <title>Ứng dụng Node.js đầu tiên</title>
        </head>
        <body>
            <div class="container">
                <h1>Xin chào!</h1>
                <h2>Ứng dụng Node.js đầu tiên</h2>
                <p>Sinh viên: <strong>${studentName}</strong></p>
                <p>Chào mừng đến với HTTP Server!</p>
            </div>
        </body>
        </html>
    `);
});

server.listen(port, hostname, () => {
    console.log(`Server đang chạy tại http://${hostname}:${port}/`);
});
