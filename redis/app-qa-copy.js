const Redis = require('ioredis')
const redis = new Redis({
    port: 6379, // Redis port
    // family: 4, // 4 (IPv4) or 6 (IPv6)
    // password: "auth",
    // db: 0,
  });

redis.keys('somekey*')
  .then(res => console.log(res))

redis.keys('someKey*')
  .then(res => console.log(res))


