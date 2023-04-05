function add(a, b) {
  return (a + b);
}

function divide(a, b) {
  return (a / b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function increment(n) {
    return (++n);
}

function decrement(n) {
    return (--n);
}

function makeInt(n=555){
    const parsed = parseInt(n, 10);
    return parsed;
}

function preserveDecimal(n="80.123999"){
    const parsedFloat = parseFloat(n);
    return parsedFloat; 
}