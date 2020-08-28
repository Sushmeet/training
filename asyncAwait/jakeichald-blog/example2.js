const waitAndReject = async () => {
    // wait one second
  await new Promise((resolve) => setTimeout(resolve(1), 1000));

  const isHeads = Math.round(Math.random());
    // 50 50 change head or tails.
  if (isHeads) return "yay";
  else throw Error("oh nooooooo");
};

// waitAndReject()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// lets call this function 

async function foo() {
    try {
       return await waitAndReject()
    } catch(err) {
        // console.log(err)
        console.log('caught')
        // throw 'catch block error'
    }
}

foo()