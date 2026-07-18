

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createServer } = require('http');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Next.js server ready on port ${port}`);
    });
}).catch((err) => {
    console.error('Error starting Next.js server:', err);
    process.exit(1);
});