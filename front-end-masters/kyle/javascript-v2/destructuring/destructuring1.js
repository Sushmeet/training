const tmp = getSomeRecords();

const first = tmp[0];
const second = tmp[1];

const firstName = first.name;
const firstEmail = first.email !== undefined ? first.email : "nobody@none.tld";

const secondName = second.name;
const secondEmail =
  second.email !== undefined ? second.email : "sushi@balle.com";

function getSomeRecords() {
  return [
    {
      name: "Sush",
      email: "sushi@gmail.com",
    },
    {
      name: "Bush",
      email: "bush@gmail.com",
    },
  ];
}

console.log(firstName, firstEmail, secondName, secondEmail);

const [
  { name: firstName1, email: firstEmail1 },
  { name: secondName2, email: secondEmail2 },
] = getSomeRecords();

console.log(firstName1, firstEmail1, secondName2, secondEmail2);
