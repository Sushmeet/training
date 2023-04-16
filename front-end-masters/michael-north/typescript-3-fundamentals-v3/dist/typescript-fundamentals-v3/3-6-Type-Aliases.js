"use strict";
// Type aliases
// They help to define a more meaningful name for the type
// it gives us a way to declared the particlars of type in a single value.
// import and expprt our types across the code base
Object.defineProperty(exports, "__esModule", { value: true });
// import
// import { UserContactInfo } from "./types";
const printContactInfo = (info) => {
    console.log(info.email);
};
const painterInfo = {
    name: "Sushi",
    email: "ksjdksj@gmail.com",
    favourite: 1,
};
printContactInfo({ name: "sushi", email: "sus" });
printContactInfo(painterInfo);
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
const newYearsEve = {
    ...new Date(),
    getReason: () => "wow what a party",
};
newYearsEve.getReason;
newYearsEve.getDay;
