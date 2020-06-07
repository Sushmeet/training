const Redis = require("ioredis");
const redis = new Redis();


// redis.set("foo", "bar123"); // returns promise which resolves to string, "OK"
// redis.set("foobar", "thebee"); // returns promise which resolves to string, "OK"
// redis.set("foonoo", "janooo"); // returns promise which resolves to string, "OK"
// redis.set("foodoooo", "sageeeee"); // returns promise which resolves to string, "OK"



// delete redis keys 
const arrofKeys = ['food']
redis.del(arrofKeys).then(res => console.log(res));