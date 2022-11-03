const arr = [1, 2, 3, 4, 5];

let d = 54;
let temp;

for (let i = 0; i < d; i++) {
  temp = arr.shift();
  arr.push(temp);
}

console.log(arr);
