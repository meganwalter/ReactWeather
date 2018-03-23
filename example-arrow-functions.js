var names = ['Andrew', 'Megan', 'ChunWing'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('ArrowFunc', name);
// })
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Megan'));

// var person = {
//   name: 'Megan',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }
//
// person.greet();

//function called add - a,b return a+b
var adder = (a,b) => {
  return a + b;
}

var add = (a,b) =>  a + b;

console.log('adder', adder(1,2));
console.log('add', add(2,3));
