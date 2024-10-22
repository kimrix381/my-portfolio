alert("Hello there random user!");
var visitorName = prompt("What's your name : ");
var isCoolWithIt = confirm("Are you ok with it?");
var gimli = {
  name: "Gimli",

  race: "dwarf",

  weapon: "axe",

  greet: function () {
    return `Hi, my name is ${this.name}!`;
  },
};

console.log(gimli);
