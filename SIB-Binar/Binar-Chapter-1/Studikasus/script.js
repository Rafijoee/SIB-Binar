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

function polindrom(str){
    let huruf = str.toLowerCase().replace(/[^a-z]/g, '');
    let reverse = huruf.split('').reverse().join('');

    return huruf === reverse;
}

let kata = prompt('Masukkan kata: ');   
if (polindrom(kata)){
    console.log(`${kata} adalah polindrom`);
} else {
    console.log(`${kata} bukan polindrom`);
}

