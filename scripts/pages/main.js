import { datasRecipes } from "../../datas/recipes.js";
import { recipeCard } from "../factories/recipeCard.js";
import { getRecipesTags } from "../factories/datasTags.js";
import { getSelectorsTags, getTagList, selectedTag, cardTag } from "../factories/tagSelector.js";

import { getFilteredRecipes, getFilteredRecipesByTags } from "../factories/searchArray.js";


/**
 * SECTION SEARCH TAG
 * + selector place
 * + tags place (!)
*/
const tagsSelectors = document.querySelector('.tag-selectors');







/**
 * 
 * @returns Tableau des recettes trié par ordre Alphabétique ::
 */
let orderedRecipes = [];

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
 * TABLEAU des tags & RECUPERATION des clés des listes::
*/
let tabTag = getRecipesTags(datasRecipes);
const tabName = Object.keys(tabTag);


/**
 * ECOUTER lors de la saisie dans la barre de recherche :: 
 */
const searchBar = document.querySelector('.searchbar');

searchBar.addEventListener('keyup', (e) => {
    const searchedContent = e.target.value;
    handleRecipes(searchedContent, datasRecipes);
});


// GERER l'affichage des recette SI recherche en cour ::
function handleRecipes(value) {
    let filteredRecipes = [];
    console.log('liste des tags : ')*
    console.log(selectedTag);

    filteredRecipes = getFilteredRecipes(value, datasRecipes);

    selectedTag.forEach(tag => {
        filteredRecipes = getFilteredRecipesByTags(tag, filteredRecipes);
    });

    displayRecipes(filteredRecipes);
};

/**
 * AFFICHER les cartes recettes ::
 * @param {recettes} recipes 
*/
function displayRecipes(recipes) {
    const searchresults = document.getElementById('searchresults');
    searchresults.innerHTML = '';
    recipes.map((recipe) => new recipeCard(recipe));
}

function displayTags(cardTag) {

}

/**
 *  GERER les sélecteurs en fonction de leur clé "nom" ::
 *  AJOUTE l'id correspondant à son selecteur ::
*/
function handleSelector() {
    
    tabName.forEach(key => { tagsSelectors.appendChild(new getSelectorsTags(key));});
    
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
function handleTaglist() {
    const selectIng = document.querySelector('#ing-select');
    const selectApp = document.querySelector('#app-select');
    const selectUst = document.querySelector('#ust-select');
    
    const listIngDOM = selectIng.children[1].children[0];
    const listAppDOM = selectApp.children[1].children[0];
    const listUstDOM = selectUst.children[1].children[0];
    
    const tagIng = tabTag.Ingredients;
    const tagApp = tabTag.Appareils;
    const tagUst = tabTag.Ustensiles;
    
    tagIng.forEach( ing => {listIngDOM.appendChild(new getTagList(ing, 'ingredients'))});
    tagApp.forEach( app => {listAppDOM.appendChild(new getTagList(app, 'appareils'))});
    tagUst.forEach( ust => {listUstDOM.appendChild(new getTagList(ust, 'ustensils'))});
};

function init() {
    orderedRecipes = sortRecipes();
    displayRecipes(datasRecipes);
    handleSelector();
    handleTaglist(tabTag);
    displayTags(cardTag)
}

init()
/**
 * ECOUTER lors de la sélection des tags :: 
 */
// const tagSelected = document.querySelectorAll('li.tag-elt');
// tagSelected.forEach((tag) => {
//   tag.addEventListener('click', () => {
//     let typeTag = tag.dataset.type;
//     let tabTag = tag.dataset.name;
//     let tagSearched = { type: typeTag, name: tabTag };
//     console.log(tagSearched);
//     let filteredRecipes = getFilteredRecipesByTags(tagSearched, datasRecipes);
//     displayRecipes(filteredRecipes);
//   });
// });