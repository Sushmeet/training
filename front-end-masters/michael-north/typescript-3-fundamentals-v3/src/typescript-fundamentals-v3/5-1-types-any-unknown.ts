// Top Types
// any and unknown

let flexible: any = 4;
flexible = "Download some more ram";
flexible = window.document;
flexible = setTimeout;

// Unknown type
let myUnknown: unknown = 14;
myUnknown + 1;

if (typeof myUnknown === "number") {
  myUnknown + 5;
}

console.log(myUnknown);
