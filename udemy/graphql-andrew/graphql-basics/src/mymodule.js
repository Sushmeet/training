// named export - Has a named export. Have as many as needed
// Default export - Has no name. You can only have one
const message = "this is a great message";
const name = "Sushi";

const location = "honalulu";

const greeting = greet => `welcome to my course ${greet}`;

export { message, name, greeting, location as default };
