// https://gitlab.com/binar-academy-sib-4-bejs/chapter-2/object-oriented-programming/-/blob/main/exercise.txt (studicase)

// class Laptop {
//     constructor(brand, type, password) {
//       this.brand = brand;
//       this.type = type;
//       this._password = password; 
//     }
  
   
//     #encrypt(password) {
//       return btoa(password);
//     }
  
    
//     #decrypt(encryptedPassword) {
//       return atob(encryptedPassword); 
//     }
  
    
//     updatePassword(newPassword) {
//       this._password = this.#encrypt(newPassword);
//       console.log("update berhasil");
//     }
//     menampilkanPassw() {
//       console.log(`menampilkan password: ${this.#decrypt(this._password)}`);
//     }
//   }

//   try {
//     const myLaptop = new Laptop("acer", "ryzen5", "passwordBaru");
//     myLaptop.menampilkanPassw();
//     myLaptop.updatePassword("one");
//     myLaptop.menampilkanPassw();
//   } catch (error) {
//     console.error("Error occurred:", error.message);
//   }


// Deskripsi Kasus:
// Perusahaan memiliki berbagai jenis karyawan, seperti KaryawanTetap dan KaryawanKontrak. Setiap karyawan memiliki nama, ID, dan gaji dasar. Namun, gaji karyawan tetap dihitung dengan tambahan bonus tetap, sedangkan gaji karyawan kontrak dihitung berdasarkan jam kerja.

// Tugas:

// Buatlah kelas Karyawan sebagai kelas dasar yang memiliki atribut nama, id, dan gaji_dasar, serta metode hitung_gaji().
// Buatlah kelas turunan KaryawanTetap dan KaryawanKontrak.
// Karyawan tetap mendapatkan tambahan bonus gaji sebesar Rp 1.000.000.
// Karyawan kontrak mendapatkan gaji tambahan berdasarkan jam kerja mereka (Rp 100.000 per jam).
// Gunakan enkapsulasi untuk memastikan atribut hanya bisa diakses melalui metode yang benar.

class Karyawan {
    constructor(nama, id, gaji_dasar) {
        this._nama = nama;
        this._id = id;
        this._gaji_dasar = gaji_dasar;
    }

    hitung_gaji() {
        return this._gaji_dasar;
    }

    deskripsiKaryawan () {
      return `Nama: ${this._nama}, ID: ${this._id}, Gaji Dasar: ${this._gaji_dasar}`;
    }
}

class KaryawanTetap extends Karyawan {
    constructor(nama, id, gaji_dasar) {
        super(nama, id, gaji_dasar);
    }

    hitung_gaji() {
        return this.gaji_dasar + 1000000;
    }
}

class KaryawanKontrak extends Karyawan {
    constructor(nama, id, gaji_dasar) {
        super(nama, id, gaji_dasar);
    }

    hitung_gaji(jam_kerja) {
        return this.gaji_dasar + (jam_kerja * 100000);
    }
}

const karyawan1 = new Karyawan("Budi", 1, 5000000);
const karyawan2 = new KaryawanTetap("Andi", 2, 5000000);
const karyawan3 = new KaryawanKontrak("Caca", 3, 5000000);
console.log(karyawan1);
console.log(karyawan2);
console.log(karyawan3);
console.log(karyawan1.hitung_gaji());