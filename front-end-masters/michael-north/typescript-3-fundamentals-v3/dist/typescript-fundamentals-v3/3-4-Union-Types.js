// Union Type is OR type...
// Interesection Type is AND type...
// Union type in typescript can be defined using the | operator
// apple | banana
const flipCoin = () => {
    if (Math.random() < 0.5) {
        return "tails";
    }
    return "heads";
};
const unionResult = flipCoin();
const getUserInfo = () => {
    if (flipCoin() === "heads") {
        return ["sucess", { name: "sushi", id: 10 }];
    }
    return ["error", new Error("you have an error")];
};
console.log(getUserInfo());
