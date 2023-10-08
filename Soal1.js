/* (soal1.js) Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
- Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
- Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"
Hint : gunakan rumus sqrt(x) */

console.log("Nama : Bima Prawang Saputra");
console.log("Bootcamp : SanberCode - QA Automation");
console.log("Batch : 48 - Kelas Karyawan ( 2 bulan ) \n");
console.log("---   Tugas : 3   ---");


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Masukkan Bilangan anda : ", function(inputbil) {
    inputbil = parseInt(inputbil);

    if (inputbil < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (inputbil % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
    } else {
        console.log("Akar pangkat 2 dari " + inputbil + " adalah " + Math.sqrt(inputbil));
    }

    rl.close();
});
