
function add(a, b) {
    return a + b;
}
let Result;
for (let i = 0; i < 10000; i++) {
    Result = add(i, i + 1);
}

console.log("After 10000 calls:", Result);
