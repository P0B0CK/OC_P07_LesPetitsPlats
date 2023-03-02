import { datasRecipes } from "../../datas/recipes.js";
import { recipeCard } from "../factories/recipeCard.js";
import { getTagsDatas } from "../factories/datasTags.js";
import { getSelectorsTags, getTagList, selectedTags, tagThumbnail } from "../factories/tagSelector.js";

import { getFilteredRecipes, getFilteredRecipesByTags } from "../factories/searchArray.js";


/**
 * /////////////////////
 * /// DOM ELEMENTS ///
 * ///////////////////
*/

const tagsSelectors = document.querySelector('.tag-selectors'); // compartiment des boutons de selections
const tagsSelectedContainer = document.querySelector('.tags-selected-container'); // compartiment des cartes des tags

const searchBar = document.querySelector('.searchbar'); // Barre de recherche principale

/**
 * 
 */

// const inputSearch = document.querySelector('input.btn-search'); // Barre de recherche secondaire (selecteurs)

// inputSearch.addEventListener('input', (e) => {
//     const searchValue = e.target.value;
//     console.log(searchValue);
// });

/**
 * 
 */



/**
 * /////////////////////
 * ///// VARIABLE /////
 * ///////////////////
*/

let orderedRecipes = []; // Recettes triées

let tagsDatas = getTagsDatas(datasRecipes); // Objet contenant les 3 tableaux de tags :: [datasTags]

const tagsDatasKeysName = Object.keys(tagsDatas); // Noms des 3 tableaux

/**
 * ////////////////////
 * //// FONCTIONS ////
 * //////////////////
*/

/**
 * 
 * @returns orderedRecipes
 * RECETTES triées alphabétiquement
 */
function sortRecipes() {
    orderedRecipes = datasRecipes.sort((a, b) => {
        if  ( a.name < b.name ) {
            return -1;
        }
        if ( a.name > b.name ) {
            return 1;
        }
        else {
            return 0
        }
    });
    return orderedRecipes;
};

/**
 * @type {EventListener} keyup
 * @param {input}
 */
searchBar.addEventListener('keyup', (e) => {
    handleRecipes();
});

/**
 * 
 * @param {input} value
 * @param {tag} def
 * 
*/
export function handleRecipes() {
    const searchedContent = searchBar.value;

    let filteredRecipes = [];
    

    filteredRecipes = getFilteredRecipes(searchedContent, orderedRecipes);
    

    selectedTags.forEach(tag => {
        filteredRecipes = getFilteredRecipesByTags(tag, filteredRecipes);
    });

    displayRecipes(filteredRecipes);
    
    let tagData = getTagsDatas(filteredRecipes);
    handleTaglist(tagData);
};

/**
 * AFFICHER les cartes recettes ::
 * @param {recipes} orderedRecipes
*/
function displayRecipes(recipes) {
    const searchresults = document.getElementById('searchresults');
    searchresults.innerHTML = '';
    recipes.map((recipe) => new recipeCard(recipe));
}

export function displayTags() {
    tagsSelectedContainer.innerHTML = ''; // Annule les doublons => vide le contenu précédent de l'élément
    
    selectedTags.forEach(tag => {
      const card = tagThumbnail(tag.name); // crée une carte pour le tag donné
      tagsSelectedContainer.appendChild(card); // ajoute la carte à l'élément cible

      if (tag.type === 'ingredients') {
            card.classList.add('color-ing');
        } else if (tag.type === 'appareils') {
            card.classList.add('color-app');
        } else if (tag.type === 'ustensils') {
            card.classList.add('color-ust');
        }
    });
}

/**
 *  GERER les sélecteurs en fonction de leur clé "nom" ::
 *  AJOUTE l'id correspondant à son selecteur ::
*/
function handleSelector() {
    
    tagsDatasKeysName.forEach(key => { tagsSelectors.appendChild(new getSelectorsTags(key));});
    
    const btnSelectDOM = document.querySelectorAll('.btn-select');
    
    for (let i = 0 ; i < btnSelectDOM.length ; i++) {
        if ( i == 0) {
            btnSelectDOM[i].setAttribute('id', 'ing-select');
        } if ( i == 1) {
            btnSelectDOM[i].setAttribute('id', 'app-select');
        } if ( i == 2) {
            btnSelectDOM[i].setAttribute('id', 'ust-select');
        }
    };
    
};

/**
 *  GERER & GENERER pour chaque TYPE de selecteur la liste Correspondante ::
*/
function handleTaglist(datas) {
    const selectIng = document.querySelector('#ing-select');
    const selectApp = document.querySelector('#app-select');
    const selectUst = document.querySelector('#ust-select');
    
    const listIngDOM = selectIng.children[1].children[0];
    const listAppDOM = selectApp.children[1].children[0];
    const listUstDOM = selectUst.children[1].children[0];
    
    const tagIng = datas.Ingredients;
    const tagApp = datas.Appareils;
    const tagUst = datas.Ustensiles;
    listIngDOM.innerHTML = '';
    listAppDOM.innerHTML = '';
    listUstDOM.innerHTML = '';
    tagIng.forEach( ing => {listIngDOM.appendChild(new getTagList(ing, 'ingredients'))});
    tagApp.forEach( app => {listAppDOM.appendChild(new getTagList(app, 'appareils'))});
    tagUst.forEach( ust => {listUstDOM.appendChild(new getTagList(ust, 'ustensils'))});
};

function init() {
    orderedRecipes = sortRecipes();
    displayRecipes(orderedRecipes);
    handleSelector();
    handleTaglist(tagsDatas);
    displayTags(selectedTags);
}

init()