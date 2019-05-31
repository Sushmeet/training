const bunyan = require('bunyan');

const log = bunyan.createLogger({
    name: 'myapp',
    myprop: 'sushi',
    streams: [
        {
            stream: process.stderr,
            level: 'debug'
        },
        {
            stream: process.stdout,
            level: 'info'
        }
    ]
});

log.info('info logs');
log.debug('debug logssss');

// log.info({foo: 'bar', err: 'err'}, 'some msg about this error');
