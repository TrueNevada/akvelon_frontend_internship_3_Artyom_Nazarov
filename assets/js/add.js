//factorial function
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

//reverse bits function
function reverseBits (n) {
  let binary = (n).toString(2);
  let reverseBinary = binary.split("").reverse().join("");
  let nonBinary = parseInt(reverseBinary, 2);
  console.log(nonBinary);
}