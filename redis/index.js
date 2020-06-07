const Redis = require("ioredis");
const redis = new Redis(); // uses defaults unless given configuration object

// ioredis supports all Redis commands:
redis.set("foo", "bar123"); // returns promise which resolves to string, "OK"
redis.set("foobar", "thebee"); // returns promise which resolves to string, "OK"
redis.set("foonoo", "janooo"); // returns promise which resolves to string, "OK"
redis.set("foodoooo", "sageeeee"); // returns promise which resolves to string, "OK"


// redis.set('gobaaa', 'gobaa lobooo')
//     .then(res => console.log('yaar', res))
//     .catch(err => console.log(err))

// the format is: redis[SOME_REDIS_COMMAND_IN_LOWERCASE](ARGUMENTS_ARE_JOINED_INTO_COMMAND_STRING)
// the js: ` redis.set("mykey", "Hello") ` is equivalent to the cli: ` redis> SET mykey "Hello" `

// ioredis supports the node.js callback style
redis.get("foo", function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.log('hmmmm', result); // Promise resolves to "bar"
  }
});

// Or ioredis returns a promise if the last argument isn't a function
redis.get("foo").then(function (result) {
  console.log(result); // Prints "bar"
});

// Most responses are strings, or arrays of strings
redis.zadd("sortedSet", 1, "one", 2, "dos", 4, "quatro", 3, "three");
redis.zrange("sortedSet", 0, 2, "WITHSCORES").then((res) => console.log(res)); // Promise resolves to ["one", "1", "dos", "2", "three", "3"] as if the command was ` redis> ZRANGE sortedSet 0 2 WITHSCORES `

// All arguments are passed directly to the redis server:
redis.set("key", 100, "EX", 10);


const stream = redis.scanStream({
    // only returns keys following the pattern of `user:*`
    match: "foo*",
    // returns approximately 100 elements per call
    count: 100,
  });


  stream.on("data", function (resultKeys) {
    // `resultKeys` is an array of strings representing key names.
    // Note that resultKeys may contain 0 keys, and that it will sometimes
    // contain duplicates due to SCAN's implementation in Redis.

    resultKeys.forEach((resultKey) => {
        console.log('roooooo-------', resultKey);
    })
    
    // for (var i = 0; i < resultKeys.length; i++) {
    //   console.log('roooooo-------', resultKeys[i]);
    // }
  });
  stream.on("end", function () {
    console.log("all keys have been visited");
  });