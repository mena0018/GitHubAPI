const API = 'https://api.github.com/users/';
const get = (param)=> document.querySelector(`${param}`);

const form = get(".form-github-recherche");
const inpRecherche = get('.inp-recherche');
const affichage = get(".affichage");

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
            <li class="followers">${check(user.name)}</li>
            <li class="followers">Location : ${check(user.location)}</li>
            <li class="followers">Twitter : ${check(user.twitter_username)}</li>
            <li class="followers">Company : ${check(user.company)}</li>
            <li class="followers">Lien : ${check(user.blog)}</li>
            
            <li class="followers">Followers : ${check(user.followers)}</li>
            <li class="followers">Followings : ${check(user.following)}</li>
                <li class="etoiles">Repos : ${check(user.public_repos)}</li>
                <li class="bio">${user.bio === null ? "Ce profil n'as pas de bio" : `${user.bio}`}</li>
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

function check(param) {
    if (param === null || param === "") {
        return "Pas disponible"
    }
    return `${param}`
}