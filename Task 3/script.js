/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

class UserCard {
  constructor(props) {
    this.props = props;
    return this.render();
  }
  render() {
    const output = document.querySelector("#output");
    const card = document.createElement("article");
    card.classList.add("userCard");

    const userAvatarBox = document.createElement("figure");

    const userAvatar = document.createElement("img");
    userAvatar.setAttribute("src", this.props.avatar_url);
    userAvatar.setAttribute("alt", "User profile avatar image.");
    userAvatar.setAttribute("width", 50);
    userAvatar.setAttribute("height", 50);

    const userLogin = document.createElement("p");
    userLogin.classList.add("userLogin");

    const text = document.createTextNode(this.props.login);
    userLogin.append(text);

    userAvatarBox.append(userAvatar);
    card.append(userAvatarBox, userLogin);
    output.append(card);
  }
}

function loadUserCards(endpointLink) {

  fetch(endpointLink)
    .then(response => response.json())
    .then((data) => {
      data.forEach(user => {
        const newUserCard = new UserCard(user);
      });
    });
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  const output = document.querySelector("#output");
  // Reset
  const allCards = document.querySelectorAll(".userCard");
  if (allCards) {
    allCards.forEach(el => el.remove());
  }
  const message = document.querySelector("#message");
  message.classList.add("hidden");
  loadUserCards(ENDPOINT);
});