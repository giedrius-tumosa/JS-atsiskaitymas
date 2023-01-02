/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor() { //default konstruktorius
  }
  sum(firstNum, secondNum) {
    return firstNum + secondNum;
  }
  subtraction(firstNum, secondNum) {
    return firstNum - secondNum;
  }
  multiplication(firstNum, secondNum) {
    return firstNum * secondNum;
  }
  division(firstNum, secondNum) {
    return firstNum / secondNum;
  }
}
