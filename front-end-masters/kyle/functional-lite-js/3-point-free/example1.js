// Point Free functions



function renderPerson(x) {
  console.log("renderPerson---", x);
}

function getPerson(fn) {
  console.log("getPerson---", fn.toString());
}


getPerson(function onPerson(person) {
  return renderPerson(person);
});

// equational reasoning.
getPerson(renderPerson);