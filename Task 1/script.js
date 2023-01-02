/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("#form-weightCalc");
const output = document.querySelector("#output");
const outputParagraph = document.createElement("pre");
output.append(outputParagraph);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Text reset
  outputParagraph.textContent = "";
  const weight_Kg = e.target.elements.search.valueAsNumber;
  if (weight_Kg || weight_Kg === 0) {
    const [weight_Lb, weight_G, weight_Oz] = [
      weight_Kg * 2.2046,
      weight_Kg / 0.0010000,
      weight_Kg * 35.274
    ];
    const text = document.createTextNode(`Jūsų svoris:\n1. Svarais: ${weight_Lb.toFixed(1)}lb.\n2. Gramais: ${weight_G.toFixed(1)}g.\n3. Uncijomis: ${weight_Oz.toFixed(1)}oz.
    `);
    outputParagraph.append(text);
  } else {
    const text = document.createTextNode(`Klaida: neatpažinti duomenys.\nĮveskite iš naujo arba susiekite su \nadministratoriumi.`);
    outputParagraph.append(text);
  }
})

