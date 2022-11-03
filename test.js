// //Belirlenmiş Döngü İşlemi:

// const arr = [1, 2, 3, 4, 5];
// let d = 4;
// let temp;

// for (let i = 0; i < d; i++) {
//   temp = arr.shift();
//   arr.push(temp);
// }

// console.log(arr);

//------------------------------------------------------------------

// //D'yi kullanıcıdan al ve işlemleri yaptır:

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Sayi giriniz:", function (input) {
//   d = input;
//   const arr = [1, 2, 3, 4, 5];
//   for (let i = 0; i < d; i++) {
//     temp = arr.shift();
//     arr.push(temp);
//   }
//   console.log("Yazdığınız Şey " + arr);
// });

//------------------------------------------------------------------

//Diziyi ve Döngü sayısını kullanıcıdan al:

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Dizi Elemean Sayisi Giriniz:", function (a) {
  for (let j = 0; j < a; j++) {
    let dizi;
    dizi = arr.push(a);
  }
  rl.question("Döngü Sayisi Giriniz:", function (d) {
    for (let i = 0; i < d; i++) {
      let temp;
      temp = arr.shift();
      arr.push(temp);
    }
    console.log(temp);
  });
});
