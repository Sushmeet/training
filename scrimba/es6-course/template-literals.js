const result = {
  sucess: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  return arr.map(element => {
    return `<li class="text-warning">${element}</li>`;
  });
}

const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);
