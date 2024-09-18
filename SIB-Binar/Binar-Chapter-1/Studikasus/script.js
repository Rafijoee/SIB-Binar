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

