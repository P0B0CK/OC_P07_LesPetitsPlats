
// FOR METHOD

const searchBar = document.querySelector('.searchbar');

searchBar.addEventListener('keyup', (e) => {
    const searchedContent = e.target.value;
    const recipesCards = document.querySelectorAll('.recipe-card');
    getSearchFiltred(searchedContent, recipesCards);
});

function getSearchFiltred(value, cards){
    if (value.lenght > 2) {
        for ( let i = 0 ; i < cards.length ; i++) {
            if(cards[i].textContent.toLowerCase().includes(value)) {
                cards[i].style.display = "block";
            } else {
                cards[i].style.display = "none";
            }
        }

    } else if (value.lenght > 0 && value.lenght < 3) {
        // else >> message d'erreur
        console.log(value)
        console.log("erreur : renseignez au moins 3 caractères.")
    }
}