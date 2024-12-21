// Studi Kasus: Sistem Manajemen Perpustakaan
// Kamu diminta untuk membuat sebuah Sistem Manajemen Perpustakaan sederhana menggunakan konsep OOP. Sistem ini harus bisa:

// Menambahkan buku ke dalam perpustakaan.
// Menampilkan daftar buku yang ada.
// Meminjamkan buku kepada pengguna (jika tersedia).
// Mengembalikan buku yang sudah dipinjam.

class Book {
    constructor(title, author, year, isAvailable){
        this._title = title;
        this._author = author;
        this._year = year;
        this._isAvailable = isAvailable;
    }

    getDetail(){
        return `${this._title} by ${this._author}, published in ${this._year}`;
    }
}


class Library {
    constructor(){  
        this.books = [];
    }
    
    addBook(book){
        this.books.push(book);
    }

    deleteBook(book){
        let index = prompt('masukkan nomor buku yang ingin dihapus');
        this.books.splice(index+1);
    }

    showAllBooks(){
        console.log('List of books in the library:');
        this.books.forEach((book, index) => {
            const status = book.isAvailable ? 'Available' : 'Not Available';
            console.log(`${index+1}. ${book.getDetail()} - ${status}`);
        });
    }

    borrowBook(book){
        let index = prompt('masukkan nomor buku yang ingin dipinjam');
        if(this.books[index].isAvailable){
            this.books[index].isAvailable = false;
            console.log(`You have borrowed ${this.books[index].title}`);
        } else {
            console.log('Sorry, the book is not available');
        }
    }

    

