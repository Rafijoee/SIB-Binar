// //interhitance

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
//   }
//   work() {
//     console.log('I am working');
//   }
// }

// class Programmers extends Human {
//   constructor(name, age, language) {
//     super(name, age);
//     this.language = language;
//   }
//   introduce() {
//     super.introduce();
//     console.log(`I am a programmer, I can code in ${this.language}`);
//   }
//   code() {
//     console.log('I am coding', this.language[Math.floor(Math.random() * this.language.length)]);
//   }
// }

// let obama = new Human('Obama', 55);
// obama.introduce();

// let bill = new Programmers('Bill', 22, ['JavaScript', 'Python', 'Java']);
// bill.introduce();
// bill.code();
// bill.work();

// try {
//   obama.code();
// } catch (error) {
//     console.log('Obama is not a programmer');
//     console.log(error.message);
//     }

// console.log(bill instanceof Human);
// console.log(bill instanceof Programmers);
