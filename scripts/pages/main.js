import { datasRecipes } from "../../datas/recipes.js";
import { recipeCard } from "../factories/recipeCard.js";
import { getRecipesTags } from "../factories/datasTags.js";
import { getSelectorsTags, getTagList } from "../factories/tagSelector.js";

import { getFilteredRecipes } from "../factories/searchArray.js";


/**
 * SECTION SEARCH TAG
 * + selector place
 * + tags place (!)
*/
const searchtag = document.querySelector('#searchtag');
const tagsSelectors = document.querySelector('.tag-selectors');

const btnSelectDOM = document.querySelectorAll('.btn-select');
const btnContentDOM = document.querySelectorAll('.btn-content');
const listContentDOM = document.querySelectorAll('.list-content');

let orderedRecipes = [];

function sortRecipes(recipes) {
    return null
}

/**
 * NEW TAG'S LIST ARRAY
*/
let tabTag = getRecipesTags(datasRecipes);
const tabName = Object.keys(tabTag);



const searchBar = document.querySelector('.searchbar');

searchBar.addEventListener('keyup', (e) => {
    const searchedContent = e.target.value;
    handleRecipes(searchedContent, datasRecipes);
});

//let displayRecipes = [];

function handleRecipes(value) {
    displayRecipes(datasRecipes);

    if (value.length > 2) {
        let filteredRecipes = getFilteredRecipes(value, datasRecipes);
        displayRecipes(filteredRecipes);
    }
};

function displayRecipes(recipes) {
    const searchresults = document.getElementById('searchresults');
    searchresults.innerHTML = '';
    recipes.map((recipe) => new recipeCard(recipe));
}

/**
 * Ajoute les sélecteurs de tags
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

function handleTaglist() {
    const selectIng = document.querySelector('#ing-select');
    const selectApp = document.querySelector('#app-select');
    const selectUst = document.querySelector('#ust-select');

    const listIngDOM = selectIng.children[1].children[0];
    const listAppDOM = selectApp.children[1].children[0];
    const listUstDOM = selectUst.children[1].children[0];
    // console.log(listIngDOM);
    // console.log(listAppDOM);
    // console.log(listUstDOM);
    
    const tagIng = tabTag.Ingredients;
    const tagApp = tabTag.Appareil;
    const tagUst = tabTag.Ustensiles;
    
    tagIng.forEach( ing => {listIngDOM.appendChild(new getTagList(ing))});
    tagApp.forEach( app => {listAppDOM.appendChild(new getTagList(app))});
    tagUst.forEach( ust => {listUstDOM.appendChild(new getTagList(ust))});

};

function init() {
    // orderedRecipes = sortRecipes(recipes);
    displayRecipes(datasRecipes);
    handleSelector();
    handleTaglist(tabTag);
}

init()