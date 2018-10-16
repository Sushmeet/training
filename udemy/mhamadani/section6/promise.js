const p1 = Promise.resolve({id: 6});
p1.then(res => console.log(res));

const p2 = Promise.reject(new Error('SUSHI we are rejecting UUU'));
p2.catch(res => console.log(res));