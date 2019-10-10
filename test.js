let myLove = "Azimeh, Aghdas, Mitra";
let newArr = myLove.split(",");
let glue = newArr.join("\n");
newArr.shift();

console.log("original string: " + myLove);
console.log("split array: " + newArr);
console.log("put back together: " + glue);
