
// Point Free functions


getPerson(function onPerson(person) {
  return renderPerson(person);
});


// equational reasoning.
getPerson(renderPerson);
