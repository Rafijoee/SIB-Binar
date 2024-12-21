//interhitance

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #privateMethod() {
    console.log('This is a private method');
    }
    callPrivateMethod() {
        this.#privateMethod();
        console.log('This is a public method');
        }
  introduce() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
  }
  work() {
    console.log('I am working');
  }
  basabasi(){
    console.log('I am from America, nice to meet you');
  }
}

class Programmers extends Human {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }
  introduce() {
    super.introduce();
    console.log(`I am a programmer, I can code in ${this.language}`);
  }
  code() {
    console.log('I am coding', this.language[Math.floor(Math.random() * this.language.length)]);
  }

  work(){
    console.log(`I am working as a programmer in ${this.language}`);
  }
}

let tes = prompt('masukkan nama');

let obama = new Human(tes, 55, ['JavaScript', 'Python', 'Java'] );
obama.callPrivateMethod();

let bill = new Programmers('Bill', 22, ['JavaScript', 'Python', 'Java']);
bill.introduce();
bill.code();
bill.work();

// try {
//   obama.code();
// } catch (error) {
//     console.log('Obama is not a programmer');
//     console.log(error.message);
//     }

console.log(bill instanceof Human);
console.log(bill instanceof Programmers);
