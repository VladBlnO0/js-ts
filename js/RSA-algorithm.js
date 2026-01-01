#!/usr/bin/env node

let P = 2,
  Q = 11,
  e = 7,
  d = 3;
let alphabet = "1234567890";
let N = P * Q;

function enDeCrypt(text, exp) {
  let edList = [];
  for (let i = 0; i < text.length; i++) {
    edList.push(String(Number(text[i]) ** exp % N));
  }
  return edList;
}
function checkTxt(orgTxt, decTxt) {
  if (orgTxt === decTxt) {
    console.log("Good Code\n");
  } else {
    console.log("Bad Code\n");
  }
}

console.log(alphabet);
console.log(enDeCrypt(alphabet, e).join(" "));
let res = enDeCrypt(enDeCrypt(alphabet, e), d).join("");
console.log(res + "\n");

checkTxt(alphabet, res);

alphabet = "2025";

console.log(alphabet);
console.log(enDeCrypt(alphabet, e).join(" "));
res = enDeCrypt(enDeCrypt(alphabet, e), d).join("");
console.log(res);

checkTxt(alphabet, res);
