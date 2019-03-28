// process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require("crypto");

const start = Date.now()


// Node is Single thread, so the event loop is is single thread
// But the 

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log('1:a', Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log('2:a', Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log('3:a', Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log('4:a', Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log('5:a', Date.now() - start);
});
