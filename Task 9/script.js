/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
#title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */

class Movie {
  #title;
  #director;
  #budget;
  constructor(title, director, budget) {
    [this.#title, this.#director, this.#budget] = [title, director, budget];
  }
  wasExpensive() {
    return this.#budget > 100000000;
  }
}

