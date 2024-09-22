const sushi = async (fn) => {
    const result = await fn();
    console.log('result---', 10);
}



const waiting = async () => {
    Promise.reject(new Error(3))
}

sushi(waiting);