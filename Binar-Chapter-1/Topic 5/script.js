// // if else statement

// var tahun = prompt('masukkan tahun sekarang: ');

// if (tahun = 2023) {
//     console.log('Benar, tahun sekarang adalah 2023');
// } else {
//     console.log('Salah, tahun sekarang adalah 2023');
// }

// var angka = prompt('masukkan angka: ');

// if (angka % 2 === 0) {
//     alert('Angka yang dimasukkan adalah genap');
// } else {
//     alert('Angka yang dimasukkan adalah ganjil');
// }

// // switch case statement

// var angka = prompt('masukkan angka: ');
// switch (angka % 2) 
// {
//     case 0:
//         alert('Angka yang dimasukkan adalah genap');
//         break;
//     case 1:
//         alert('Angka yang dimasukkan adalah ganjil');
//         break;
//     default:
//         alert('Yang anda masukkan bukan angka');
//         break;
// }

// let weight = prompt('Berat badan anda (kg)');
// let height = prompt('Tinggi badan anda (cm)');
// let bmi = weight / (weight * height);

// if (bmi > 25){
//     console.log('Anda kelebihan berat badan');
// }
// else if (bmi >= 20 && bmi <= 24.9){
//     console.log('Berat badan anda ideal');
// }
// else if (bmi < 20){
//     console.log('Anda kekurangan berat badan');
// }

//for loop

// let i = 0;

// for (i = 0; i < 5; i++) {
//     console.log(i);
// }

// //while loop

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// //do while loop

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);


// Tebak bilangan prima

const angka = parseInt(prompt("Masukkan sebuah angka:"));
  let isPrima = true;

  if (angka <= 1) {
    isPrima = false;
  } else {
    for (let i = 2; i < angka; i++) {
      if (angka % i === 0) {
        isPrima = false;
        break;
      }
    }
  }

  if (isPrima) {
    alert(angka + " adalah bilangan prima.");
  } else {
    alert(angka + " bukan bilangan prima.");
  }

// Print bilangan prima
function isPrime(num) {
    if (num <= 1) return false; // Bilangan <= 1 bukan prima
    if (num === 2) return true; // 2 adalah bilangan prima
    if (num % 2 === 0) return false; // Bilangan genap selain 2 bukan prima

    // Periksa pembagi dari 3 hingga num - 1 (hanya bilangan ganjil)
    for (let i = 3; i < num; i += 2) {
        if (num % i === 0) {
            return false; // Jika num habis dibagi i, bukan prima
        }
    }

    return true; // Jika tidak ada pembagi, maka prima
}

// Cetak semua bilangan prima dari 1 hingga 1000
for (let i = 1; i < 1000; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}


