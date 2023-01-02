/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let clickCount = 0;
const btn_state = document.querySelector("#btn__state");
let clickCountOutput = document.createTextNode(clickCount);
btn_state.append(clickCountOutput);

const btn_element = document.querySelector("#btn__element");

btn_element.addEventListener("click", () => {
  clickCount++;
  // Text reset
  clickCountOutput.remove();
  clickCountOutput = document.createTextNode(clickCount);
  btn_state.append(clickCountOutput);
});