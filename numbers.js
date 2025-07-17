let billion = 1_000_000_000;
let fbillion = 1e9;
console.log(fbillion);
console.log(billion.toString(2));
console.log(billion.toString(16));

let num = 123.4567;
console.log(num.toFixed(2));

console.log(isNaN(34));
console.log(isFinite(Infinity));

array = [1,2,3,4];
for (const arrayElement of array) {
    console.log(arrayElement);
}
delete array[1];