/*function User() {
  console.log("User sinifina erisildi....");
  this.getName = function (name) {
    return "Merhabalar " + name;
  };
}
let user = new User();
console.log(user.getName("Mehmet Derya Hazar"));

let user2 = new User();
console.log(user2.getName("Sumeyye"));

real prototype

function Player(name) {
  this.name = name;
  console.log("Player sinifina erişildi...");
}

Player.prototype.getFullName = function (name) {
  return "Hoşgeldin " + this.name;
};

let user3 = new Player("Yolgezer");
console.log(user3.getFullName());

let user4 = new Player("Aristotales");
console.log(user4.getFullName());
*/
// method.js
/*
const mars = {
  planet: "Mars",
  getPlanet: function () {
    return this.planet;
  },
};
console.log(mars.getPlanet());
*/
//composition
/*
let mars = {
  name: "Mars",
  getName: getName,
};

let dunya = {
  name: "Dunya",
  getName: getName,
};

function getName() {
  return this.name;
} //variable hoisting
console.log(mars.getName());
console.log(dunya.getName());

*/
