/*
  1) Napiste funkci, ktera vypise soucet, rozdil, nasobek a podil 2 zadanych cisel, rozdil zobrazujte jako absolutni hodnotu
  - Math.abs()
*/


let a = Number(prompt("a"));
let b = Number(prompt("b"));

funkce1(a,b){
  let soucet = a + b
  let rozdil = a - b
  let nasobek = a * b
  let podil = math.abs(a / b)
console.log("soucet:" + soucet, "rozdil:" + rozdil, "nasobek:" + nasobek, "podil:" + podil)
};

/*
  2) Napiste funkci, ktera vypise informaci, zda zadane cislo je nebo neni prvocislo.
  - prvočíslo - dělitelné pouze 1 a samo sebou​
  zbytek po dělení: % - modulo​
  - v prvni moment predpokladejme, ze cislo JE prvocislo a budeme pripadne rosporovat toto tvrzeni.
*/
