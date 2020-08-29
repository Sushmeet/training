/*
https://jakearchibald.com/2017/await-vs-return-vs-return-await/
a return await without a try catch block is redundant.
because you could just return the promise back.

*/

const hello = async (name) => {
   return await new Promise((resolve, reject) => {
        setTimeout(_ => console.log(name), 1000)
    })
}


hello()