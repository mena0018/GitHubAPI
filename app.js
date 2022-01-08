const API = 'https://api.github.com/users/';

const form = document.querySelector(".form-github-recherche");
const inpRecherche = document.querySelector('.inp-recherche');
const affichage = document.querySelector(".affichage");

async function dataGitHub(utilisateur) {

    const response = await fetch(`${API}${utilisateur}`);
    const data = await response.json();
    creationCarte(data);
}

function creationCarte(user) {
    const carteHTML = `
    <div class="carte">
        <img src="${user.avatar_url}" alt="icon avatar" class="avatar">
        <h2>${user.login}</h2>
        <ul class="cont-infos">
            <li class="followers">Followers : ${user.followers}</li>
            <li class="etoiles">Repos : ${user.public_repos}</li>
            <li class="bio">${user.bio}</li>
        </ul>
    </div>
    `;
    affichage.innerHTML = carteHTML;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inpRecherche.value.length > 0) {
        dataGitHub(inpRecherche.value);
        inpRecherche.value = "";
    }
});