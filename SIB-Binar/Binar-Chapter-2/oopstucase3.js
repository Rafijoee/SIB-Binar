// 2. Inheritance
// - Write a JavaScript program that creates a class `Book` with properties for title and author.
// - Include a method to display book details.
// - Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price.
// - Override the display method to include the book price.
// - Create an instance of the 'Ebook' class and display its details.

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     displayBookDetails() {
//         return `Title: ${this.title}, Author: ${this.author}`;
//     }
// }

// class Ebook extends Book {
//     constructor(title, author, price) {
//         super(title, author);
//         this.price = price;
//     }

//     displayBookDetails() {
//         return `${super.displayBookDetails()}, Price: ${this.price}`;
//     }
// }

// const book1 = new Ebook("The Alchemist", "Paulo Coelho", 100000);
// console.log(book1.displayBookDetails());

// 3. Abstraction
// - Write a JavaScript program that creates an abstract class `Shape` with property for name.
// - Create two subclasses called 'Circle' and 'Triangle' that inherits from the 'Shape' class and includes additional properties of radius for circle and side for triangle, and color for both circle and triangle.
// - the color property is only known within its class.
// - create two methods of calculating the area and the price per area. If the color is blue the price will be twice the area and if the color is grey, the price will be three times the area. Otherwise, the price will be the same as the area.
// - Create instances of the 'Triangle' and 'Cicle' class and display its prices for red, blue, purple, and grey colors

// class Shape {
//     constructor(name) {
//         if (this.constructor === Shape) {
//             throw new Error("Kelas Shape adalah abstrak dan tidak bisa diinstansiasi langsung.");
//         }
//         this.name = name;
//     }   
// }

// class Circle extends Shape {
//     #color; // properti private untuk color

//     constructor(radius, color) {
//         super("Circle");
//         this.radius = radius;
//         this.#color = color;
//     }

//     // Menghitung luas lingkaran
//     calculateArea() {
//         return Math.PI * this.radius * this.radius;
//     }

//     // Menghitung harga berdasarkan warna
//     calculatePrice() {
//         const area = this.calculateArea();
//         switch (this.#color.toLowerCase()) {
//             case 'blue':
//                 return area * 2;
//             case 'grey':
//                 return area * 3;
//             default:
//                 return area;
//         }
//     }

//     // Metode untuk menampilkan harga
//     displayPrice() {
//         console.log(`Harga untuk ${this.name} dengan warna ${this.#color} adalah $${this.calculatePrice().toFixed(2)}`);
//     }
// }

// class Triangle extends Shape {
//     #color; // properti private untuk color
//     constructor(side, color) {
//         super('Circle');
//         this.side = side;
//         this.#color = color;
//     }

//     calculateArea() {
//         return Math.pow(this.side, 2) * Math.sqrt(3) / 4;
//     }

//     calculatePricePerArea() {
//         const area = this.calculateArea();
//         if (this.#color === "blue") {
//             return area * 2;
//         } else if (this.#color === "grey") {
//             return area * 3;
//         } else {
//             return area;
//         }
//     }
// }



// const redCircle = new Circle(5, 'red');
// const blueCircle = new Circle(5, 'blue');
// const purpleCircle = new Circle(5, 'purple');
// const greyCircle = new Circle(5, 'grey');

// redCircle.calculatePrice();
// redCircle.displayPrice();
// blueCircle.calculatePrice();
// blueCircle.displayPrice();
// purpleCircle.calculatePrice();
// purpleCircle.displayPrice();
// greyCircle.calculatePrice();
// greyCircle.displayPrice();

// const redTriangle = new Triangle(5, 'red');
// const blueTriangle = new Triangle(5, 'blue');
// const purpleTriangle = new Triangle(5, 'purple');
// const greyTriangle = new Triangle(5, 'grey');

// console.log(redTriangle.calculatePricePerArea());
// console.log(blueTriangle.calculatePricePerArea());
// console.log(purpleTriangle.calculatePricePerArea());


// Studi Kasus: Sistem Manajemen Bank
// Bayangkan kita membuat aplikasi untuk mengelola berbagai jenis akun bank, seperti akun tabungan (savings account) dan akun giro (current account). Setiap akun memiliki fitur dasar seperti setoran (deposit), penarikan (withdraw), dan pengecekan saldo (check balance). Namun, masing-masing akun memiliki aturan spesifik, seperti bunga pada tabungan dan limit overdraft pada akun giro.

// 1. Encapsulation: Menyembunyikan detail internal akun seperti saldo.
// 2. Inheritance: Akun tabungan dan giro akan mewarisi sifat umum dari akun bank.
// 3. Polymorphism: Operasi seperti withdraw akan memiliki perilaku yang berbeda tergantung jenis akun.

class BankAccount {
    constructor (id, balance) {
        this.id = id;
        this._balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            return `Deposit $${amount} berhasil. Saldo sekarang $${this._balance}`;
        } else {
            return 'Deposit gagal. Masukkan jumlah yang valid.';
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(id, balance, interestRate) {
        super(id, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        const interest = this._balance * (this.interestRate / 100);
        this._balance += interest;
        return `Bunga $${interest} berhasil ditambahkan. Saldo sekarang $${this._balance}`;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            return `Penarikan $${amount} berhasil. Saldo sekarang $${this._balance}`;
        } else {
            return 'Penarikan gagal. Masukkan jumlah yang valid.';
        }
    }
}

class Giro extends BankAccount {
    constructor(id, balance, overdraftLimit) {
        super(id, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance + this.overdraftLimit) {
            this._balance -= amount;
            return `Penarikan $${amount} berhasil. Saldo sekarang $${this._balance}`;
        } else {
            return 'Penarikan gagal. Melebihi limit overdraft.';
        }
    }
}