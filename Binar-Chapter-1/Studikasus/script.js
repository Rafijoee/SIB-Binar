//Huruf vocal !
/*
function vocal (str){
    let hurufVokal = 'aiueo';
    let jumlahVokal = 0;

    for (let i = 0; i < str.length; i++){
        if(hurufVokal.includes(str[i].toLowerCase())){
            jumlahVokal++;
        }
    }
    return jumlahVokal;
}

let kalimat  = prompt('Masukkan kalimat: ');
console.log (`Jumlah huruf vokal pada kalimat "${kalimat}" adalah ${vocal(kalimat)}`);
*/

// Polindrom

// function polindrom(str){
//     let huruf = str.toLowerCase().replace(/[^a-z]/g, '');
//     let reverse = huruf.split('').reverse().join('');

//     return huruf === reverse;
// }

// let kata = prompt('Masukkan kata: ');   
// if (polindrom(kata)){
//     console.log(`${kata} adalah polindrom`);
// } else {
//     console.log(`${kata} bukan polindrom`);
// }

//method class hewan

// class Hewan {

//     constructor (nama, jenis){
//         this.nama = nama;
//         this.jenis = jenis;
//     }

//     bersuara (suara){
//         console.log(`${this.nama} bersuara ${suara}`);
//     }
// }

// let hewan1 = new Hewan('Kucing', 'Mamalia');
// console.log(hewan1);
// hewan1.bersuara('Meong');
// let hewan2 = new Hewan('anjing', 'Macan Gunung')
// console.log(hewan2);
// hewan2.bersuara('Guk Guk');