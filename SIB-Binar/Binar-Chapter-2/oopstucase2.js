// https://gitlab.com/binar-academy-sib-4-bejs/chapter-2/object-oriented-programming/-/blob/main/exercise.txt (studicase)

class Laptop {
    constructor(brand, type, password) {
      this.brand = brand;
      this.type = type;
      this._password = password; 
    }
  
   
    #encrypt(password) {
      return btoa(password);
    }
  
    
    #decrypt(encryptedPassword) {
      return atob(encryptedPassword); 
    }
  
    
    updatePassword(newPassword) {
      this._password = this.#encrypt(newPassword);
      console.log("update berhasil");
    }
    menampilkanPassw() {
      console.log(`menampilkan password: ${this.#decrypt(this._password)}`);
    }
  }

  try {
    const myLaptop = new Laptop("acer", "ryzen5", "passwordBaru");
    myLaptop.menampilkanPassw();
    myLaptop.updatePassword("one");
    myLaptop.menampilkanPassw();
  } catch (error) {
    console.error("Error occurred:", error.message);
  }