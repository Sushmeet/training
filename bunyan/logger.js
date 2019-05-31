const bunyan = require('bunyan');

const log = bunyan.createLogger({
    name: 'myapp',
    stream: process.stdout,
    myprop: 'sushi',
    level: 'info',
    src: true
});

// log.info('info logs');
log.debug('debug logssss');

// log.info({foo: 'bar', err: 'err'}, 'some msg about this error');
