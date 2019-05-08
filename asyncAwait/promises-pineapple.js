function pine(toppings = []) {
  const pizzaPromise = new Promise((resolve, reject) => {
    if (toppings.includes("pineapple")) {
    return reject("dont like pineapples");
    }
    const amountOfTimetoBake = 5000 + toppings.length * 200;
    setTimeout(() => {
     return resolve(`ur pizza is ready with toppings ${toppings.join(",")}`);
    }, amountOfTimetoBake);
  });
  return pizzaPromise;
}


const result = pine(['apple', 'pepporoni']);

result.then((res) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

