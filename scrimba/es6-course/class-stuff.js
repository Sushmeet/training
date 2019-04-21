const Shuttle = function(name) {
  this.name = name;
};
const shuttleName = new Shuttle("nasa");
console.log("Old Style", shuttleName);


class Shuttle2 {
  constructor(name) {
    this.name = name;
  }
}

const shuttleName2 = new Shuttle2("jaba222");
console.log('shuttleName2', shuttleName2);