/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

class CarBrand {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    const output = document.querySelector("#output");
    const carBrandCard = document.createElement("article");
    carBrandCard.classList.add("carBrandCard");

    const carBrand = document.createElement("h3");
    carBrand.classList.add("carBrand");

    const text = document.createTextNode(this.props.brand);
    carBrand.append(text);

    const carModels = document.createElement("ul");
    for (let el of this.props.models) {
      const li = document.createElement("li");
      li.append(document.createTextNode(`${el}`));
      carModels.append(li);
    }

    output.append(carBrandCard);
    carBrandCard.append(carBrand, carModels);

  }
}

function loadCarCards(fileLink) {

  fetch(fileLink)
    .then(response => response.json())
    .then((data) => {
      data.forEach(el => {
        const newCarCard = new CarBrand(el);
      });
    });
}

loadCarCards(ENDPOINT);