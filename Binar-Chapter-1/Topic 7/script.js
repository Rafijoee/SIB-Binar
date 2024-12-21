class Rumah {
    static isInIndonesia = true;

    constructor(jalan, kota) {
        this.jalan = jalan;
        this.kota = kota;
    }//tes
    lokasi() {
        console.log(`Rumah saya berada di ${this.jalan}, ${this.kota}, Indonesia.`);
    }

}
// tes lagi
console.log(Rumah.isInIndonesia); 
console.log(`jalan ada di ${this.jalan}`);
Rumah.prototype.rumah2 = (provinsi, kota) => {
    console.log(`Rumah saya berada di ${provinsi}, ${kota}, Indonesia.`);
}

Rumah.expand = function(meter){
    console.log(`Rumah saya memiliki luas ${meter} meter persegi.`);
}

let rumah1 = new Rumah('Jalan Kenangan', 'Jakarta');
console.log(rumah1);

console.log (rumah1 instanceof Rumah);
console.log(rumah1.lokasi());
console.log(rumah1.rumah2('Jawa Barat', 'Bandung'));
console.log(Rumah.expand(100));