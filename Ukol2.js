// Přijměte jméno jako vstup od uživatele, dále nechte
// zadat jeho věk a vypište na základě věku jednu ze
// dvou vět ve tvaru:
// a) Vaše jméno je Marian, je vám 30 let a tak máte
// právo řídit auto.
// b) Vaše jméno je Marian, je vám 14 let a tak musíte
// počkat ještě 4 let, než budete moci řídit auto.

// Zkuste si zadání rozebrat na jednoduché kroky , které
// byste učinily uvnitř hlavy jak porovnám 3 čísla a najdu
// nejmenší

let jmeno= prompt("Zadej své jméno.");
let vek = number(prompt("Zadej svůj věk."));

if(vek >=18){
  console.log ("Vaše jméno je" + jmeno + ", je Vám " + vek + "a tak máte právo řídit auto." )
} else{
  console.log ("Vaše jméno je" + jmeno + ", je Vám " + vek + "a tak nemáte právo řídit auto.")
};

// Nechte uživatele zadat 3 čísla a určete největší z nich - výsledek vypište do konzole ve formátu "Nevětší číslo je A:37".


let a = prompt("Zadejte první libovolné číslo.");
let b = prompt("Zadejte druhé libovolné číslo.");
let a = prompt("Zadejte třetí libovolné číslo.");á

