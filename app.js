const API = 'https://api.github.com/users/';
const get = (param)=> document.querySelector(`${param}`);

const form         = get(".form-github-recherche");
const avatar       = get(".avatar");
const search       = get(".btn-search");
const login        = get(".login");
const inpRecherche = get('.inp-recherche');
const names        = get(".name");
const twitter      = get(".twitter-username");
const company      = get(".company");
const link         = get(".link");
const followers    = get(".followers");
const following    = get(".following");
const repos        = get(".repos");
const bio          = get(".bio");


function check(param) {
    if (param === null || param === "") {
        return "Pas disponible"
    }
    return `${param}`
}

async function dataGitHub(utilisateur) {
    const response = await fetch(`${API}${utilisateur}`);
    const data = await response.json();
    creationCarte(data);
}


function creationCarte(user) {
    avatar.src          =  check(user.avatar_url)
    login.innerText     =  check(user.login);
    names.innerText     =  check(user.name);
    location.innerHTML  =  check(user.location);
    twitter.innerHTML   =  check(user.twitter_username);
    company.innerHTML   =  check(user.company);
    link.innerHTML      =  check(user.blog);
    followers.innerHTML =  check(user.followers);
    following.innerHTML =  check(user.following);
    repos.innerHTML     =  check(user.public_repos);
    bio.innerHTML       =  check(user.bio);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inpRecherche.value.length > 0) {
        dataGitHub(inpRecherche.value);
        inpRecherche.value = "";
    }
});

search.addEventListener('click', () => {
    if (inpRecherche.value.length > 0) {
        dataGitHub(inpRecherche.value);
        inpRecherche.value = "";
    }
});
