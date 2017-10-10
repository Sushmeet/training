// async function
const getName = async () => {
    // this is equivalent to reject.
 // throw new Error('error from getName asynch function');
  return 'Sushi';
};

// promise function
const getName2 = () =>
  new Promise((resolve, reject) => {
    resolve('robby');
    reject('there is error in getName2 from promise implementation');
  });

getName()
  .then((name) => {
    console.log(name);
  })
  .catch((e) => {
    console.log(e);
  });

getName2()
  .then((name) => {
    console.log(name);
  })
  .catch(() => {});
