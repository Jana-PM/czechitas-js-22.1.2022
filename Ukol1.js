// Úkol - proměnné a operátory
// 1) Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do konzole vypište větu ve formátu:

// ZADANI:
// Úkol - proměnné a operátory
// 1) Založte proměnné pro jméno, vek, vahu v kg a a vysku v metrech - nastavte jim libovolnou hodnotu. Spočtěte BMI Do konzole vypište větu ve formátu:
// "Jmenuji se Petra, je mi 34 let, vážím 65kg,  měřím 1.67m a moje BMI je 23,2.".

let jmeno = "Jana";
let vek = 28;
let vaha = 47;
let vyska = 1.59;

let bmi = vaha / (vyska^2)

console.log( "Jmenuji se " + jmeno + ", je mi " + vek + ", vážím " + vaha + ", měřím "+ vyska + "m a moje BMI je "+ bmi+ ".");
