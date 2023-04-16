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
const maybeGetUserInfo = () => {
    if (flipCoin() === "heads") {
        return ["sucess", { name: "sushi", id: 10 }];
    }
    return ["error", new Error("you have an error")];
};
const outcome = maybeGetUserInfo();
// Now lets continue working with our union type and see what typescript has to say.
const [first, second] = outcome;
second.name; // What we are seeing here is, when a value has a type that includes a union,
//we are only able to use the “common behavior” that’s guaranteed to be there.
// both the object and error constuructor have a property called name which is a string.
// Type guards are expressions, which when used with control flow statement,
// allow us to have a more specific type for a particular value.
if (second instanceof Error) {
    second;
}
else {
    second;
}
// Discriminated Unions
if (outcome[0] === "error") {
    outcome;
}
else {
    outcome;
}
