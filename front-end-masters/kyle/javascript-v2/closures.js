// closures
/* closure is when a function remembers the variables outside of it , even if you pass
that function elsewhere.
*/
function hello(name) {
    return (game, age) => {
      console.log(`my name  ${name} ${game} ${age}`);
    }
}

hello('sushi')('jombaa', 12)

function delay(name) {
  setTimeout(() => {
    console.log(`my name is ${name}`)
  }, 100)
}

delay("sushi");