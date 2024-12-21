let kendaraan = [];

kendaraan.push({ tipe: "Mobil", roda: 4 });
kendaraan.push({ tipe: "Motor", roda: 2 });
kendaraan.push({ tipe: "Sepeda", roda: 2 });
kendaraan.push({ tipe: "Bus", roda: 6 });
kendaraan.push({ tipe: "Truk", roda: 8 });

kendaraan.forEach(function(data) {
    console.log(`${data.tipe} memiliki ${data.roda} roda`);
});

