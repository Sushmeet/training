const http = require('http');


// http.get({
//     hostname: 'localhost',
//     port: 4000,
//     agent: false,
//     path: '/'
// }, (res) => {
//     res.statusCode(200)
//     res.statusMessage('all good ');
//     res.end('okay');
// });

const hello = (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello sushi monster');
}

http.createServer(hello).listen(4000);

process.on('SIGTERM', () => {
    console.log('\n sigterm has been issued exiting------')
    process.exit(100);
})

process.on('SIGINT', () => {
    console.log('\n sigINT has been issued exiting------')
    process.exit(100);
})