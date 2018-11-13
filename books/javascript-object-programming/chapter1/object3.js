const lassie = {
  name: "Lassie",
  breed: "Collie",
  speak: function() {
    return "Woof! Woof!";
  }
};

// const mossie = Object.create(lassie);

console.log("lassie", lassie);

function clone(proto_object) {
  const empObj = {};

  for (let key in proto_object) {
    empObj[key] = proto_object[key];
  }
  return empObj;
}

const mossie = clone(lassie);

console.log('Mossie', mossie);
