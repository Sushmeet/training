// Type aliases
// They help to define a more meaningful name for the type
// it gives us a way to declared the particlars of type in a single value.
// import and expprt our types across the code base

// filename types.ts
export type UserContactInfo = {
  name: string;
  email: string;
};

// import
// import { UserContactInfo } from "./types";

const printContactInfo = (info: UserContactInfo) => {
  console.log(info.email);
};

const painterInfo = {
  name: "Sushi",
  email: "ksjdksj@gmail.com",
  favourite: 1,
};

printContactInfo({ name: "sushi", email: "sus" });
printContactInfo(painterInfo);

/*
A few things to point out here:
This is a rare occasion where we see type information on the right hand side of the assignment operator (=)
We’re using TitleCase to format the alias’ name. This is a common convention
As we can see below, we can only declare an alias of a given name once within a given scope. 
This is kind of like how a let or const variable declaration works
*/

//Cleaning up this old exapmple

/*
const flipCoin = (): "heads" | "tails" => {
  if (Math.random() < 0.5) {
    return "tails";
  }
  return "heads";
};

const unionResult = flipCoin();

const maybeGetUserInfo = ():
  | ["sucess", { name: string; id: number }]
  | ["error", Error] => {
  if (flipCoin() === "heads") {
    return ["sucess", { name: "sushi", id: 10 }];
  }
  return ["error", new Error("you have an error")];
};

const outcome = maybeGetUserInfo();
*/

type UserErrorInfo = ["error", Error];
type UserGoodInfo = ["sucess", { name: string; id: number }];

type UserInfoScenario = UserErrorInfo | UserGoodInfo;

const flipCoin = (): "heads" | "tails" => {
  if (Math.random() < 0.5) {
    return "tails";
  }
  return "heads";
};

const unionResult = flipCoin();

const maybeGetUserInfo = (): UserInfoScenario => {
  if (flipCoin() === "heads") {
    return ["sucess", { name: "sushi", id: 10 }];
  }
  return ["error", new Error("you have an error")];
};

const outcome = maybeGetUserInfo();
