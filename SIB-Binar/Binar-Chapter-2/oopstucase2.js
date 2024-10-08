// https://gitlab.com/binar-academy-sib-4-bejs/chapter-2/object-oriented-programming/-/blob/main/exercise.txt (studicase)

// 1. inheritance

// class Laptop{
//     constructor(brand, type){
//         this.brand = brand;
//         this.type = type;
//     }

//     info(){
//         return `Laptop ${this.brand} ${this.type} `;
//     }

//     run (){
//         console.log("Laptop is running");
//     }
// }

// class LaptopGaming extends Laptop {
//     constructor (brand, type){
//         super(brand, type);
//     }

//     info (){
//         console.log(super.info() + "adalah laptop gaming dan bisa bermain game");
//     }

//     gaming () {
//         console.log(super.run() + " dan bermain game");
//     }
// }

// 2.encapsulation.js

// class Laptop{
//     constructor(brand, type, password){
//         this.brand = brand;
//         this.type = type;
//         this._password = password;
//     }

//     info(){
//         return `Laptop ${this.brand} ${this.type} `;
//     }

//     run (){
//         console.log("Laptop is running");
//     }

//     #encrypt(password) {
//         return btoa(password);
//     }

//     #decrypt(encryptedPassword) {
//         return atob(encryptedPassword);
//     }

//     updatePassword(newPassword) {
//         this._password = this.#encrypt(newPassword);
//         console.log("update berhasil");
//     }
// }

// class LaptopGaming extends Laptop {
//     constructor (brand, type){
//         super(brand, type);
//     }

//     info (){
//         console.log(super.info() + "adalah laptop gaming dan bisa bermain game");
//     }

//     gaming () {
//         console.log(super.run() + " dan bermain game");
//     }
// }

//3. Polymorpism
// class Laptop {
//   constructor(brand, type) {
//     this.brand = brand;
//     this.type = type;
//   }

//   info() {
//     return `Laptop ${this.brand} ${this.type} `;
//   }

//   run() {
//     console.log("Laptop is running");
//   }
// }

// // Helper untuk gaming capability
// function gamingCapability() {
//     return "Playing Apex Legend at 120fps!";
// }

// // Helper untuk editing capability
// function editingCapability() {
//     return "Edit and Render 8k projects!";
// }

// // Kelas turunan LaptopGaming
// class LaptopGaming extends Laptop {
//     run() {
//         return `${super.run()} ${gamingCapability()}`;
//     }
// }

// // Kelas turunan LaptopEditing
// class LaptopEditing extends Laptop {
//     run() {
//         return `${super.run()} ${editingCapability()}`;
//     }
// }

// // Kelas turunan LaptopHybrid
// class LaptopHybrid extends Laptop {
//     run() {
//         return `${super.run()} ${gamingCapability()} ${editingCapability()}`;
//     }
// }








//Abstraction 

// class Human {
//     constructor(props){
//         if (this.constructor === Human){
//             throw new Error("Abstract class can't be instantiated");
//         }
//         let {name, address} = props;
//         this.name = name;
//         this.address = address;
//     }

//     work (){
//         console.log(`${this.name} is working`);
//     }

//     introduce(){
//         console.log(`Hello, my name is ${this.name}, my address is ${this.address}`);
//     }
// }

// class Police extends Human {
//     constructor(props){
//         super(props);
//         this.rank = props.rank;
//     }

//     work (){
//         console.log(`${this.name} is working as a police`);
//         super.work();
//     }
// }

// const Wiranto = new Police ({name: "Wiranto", address: "Jakarta", rank: "General"});
// console.log(Wiranto);

// try {
//     let abstract = new Human({name: "Budi", address: "Jakarta"});
// } catch (error) {
//     console.log(error.message);
// }









// Deskripsi Kasus:
// Perusahaan memiliki berbagai jenis karyawan, seperti KaryawanTetap dan KaryawanKontrak. Setiap karyawan memiliki nama, ID, dan gaji dasar. Namun, gaji karyawan tetap dihitung dengan tambahan bonus tetap, sedangkan gaji karyawan kontrak dihitung berdasarkan jam kerja.

// Tugas:

// Buatlah kelas Karyawan sebagai kelas dasar yang memiliki atribut nama, id, dan gaji_dasar, serta metode hitung_gaji().
// Buatlah kelas turunan KaryawanTetap dan KaryawanKontrak.
// Karyawan tetap mendapatkan tambahan bonus gaji sebesar Rp 1.000.000.
// Karyawan kontrak mendapatkan gaji tambahan berdasarkan jam kerja mereka (Rp 100.000 per jam).
// Gunakan enkapsulasi untuk memastikan atribut hanya bisa diakses melalui metode yang benar.

// class Karyawan {
//     constructor(nama, id, gaji_dasar) {
//         this._nama = nama;
//         this._id = id;
//         this._gaji_dasar = gaji_dasar;
//     }

//     hitung_gaji() {
//         return this._gaji_dasar;
//     }

//     deskripsiKaryawan () {
//       return `Nama: ${this._nama}, ID: ${this._id}, Gaji Dasar: ${this._gaji_dasar}`;
//     }
// }

// class KaryawanTetap extends Karyawan {
//     constructor(nama, id, gaji_dasar) {
//         super(nama, id, gaji_dasar);
//     }

//     hitung_gaji() {
//         return this.gaji_dasar + 1000000;
//     }
// }

// class KaryawanKontrak extends Karyawan {
//     constructor(nama, id, gaji_dasar) {
//         super(nama, id, gaji_dasar);
//     }

//     hitung_gaji(jam_kerja) {
//         return this.gaji_dasar + (jam_kerja * 100000);
//     }
// }

// const karyawan1 = new Karyawan("Budi", 1, 5000000);
// const karyawan2 = new KaryawanTetap("Andi", 2, 5000000);
// const karyawan3 = new KaryawanKontrak("Caca", 3, 5000000);
// console.log(karyawan1);
// console.log(karyawan2);
// console.log(karyawan3);
// console.log(karyawan1.hitung_gaji());




// 1. Basic OOP
// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.branches = [];
    }

    addBranch(branchName) {
        if (this.branches.includes(branchName)) {
            console.log(`Cabang ${branchName} sudah ada di ${this.bankName}.`);
            return;
        }
        this.branches.push(branchName);
        console.log(`Cabang ${branchName} berhasil ditambahkan ke ${this.bankName}.`)
    }

    removeBranch(branchName) {
        const index = this.branches.indexOf(branchName);
        if (index !== -1) {
            this.branches.splice(index, 1);
            console.log(`Cabang ${branchName} berhasil dihapus dari ${this.bankName}.`);
        } else {
            console.log(`Cabang ${branchName} tidak ditemukan di ${this.bankName}.`);
        }
    }

    displayBranches() {
        if (this.branches.length === 0) {
            console.log(`Tidak ada cabang di ${this.bankName}.`);
        } else {
            console.log(`Cabang-cabang di ${this.bankName}:`);
            this.branches.forEach((branch, index) => {
                console.log(`${index + 1}. ${branch}`);
            });
        }
    }
}

const bankbaru = new Bank("Bank BCA");
bankbaru.addBranch("Jakarta");
bankbaru.addBranch("Bandung");
bankbaru.addBranch("Jakarta");
bankbaru.displayBranches();
bankbaru.removeBranch("Bandung");
bankbaru.displayBranches();