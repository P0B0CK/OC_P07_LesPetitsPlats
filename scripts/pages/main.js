import { recipes } from "../../datas/recipes.js";
import { recipeCard } from "../factories/recipeCard.js";
import { getRecipesTags, getSelectorsTags } from "../factories/datasTags.js";

/**
 * SECTION SEARCH TAG
 * + selector place
 * + tags place (!)
 */
const searchtag = document.querySelector('#searchtag');
const tagsSelectors = document.querySelector('.tag-selectors');
const btnSelectDOM = document.querySelectorAll('.btn-select');

/**
 * NEW TAG'S LIST ARRAY
 */
let tabTag = getRecipesTags(recipes);

function handleRecipes() {
    // recipes.forEach((recipe) => console.log(recipe));
    recipes.forEach((recipe) => new recipeCard(recipe));
}

function handleSelector() {
    
    Object.keys(tabTag).forEach(key => {
        tagsSelectors.appendChild(new getSelectorsTags(key));

        console.log(key);

        // for (let i = 0 ; i <= key.length ; i++) {}
        // getSelectorsTags(key)
        //  if ( getSelectorsTags(key) === key[0]) {
        //     btnSelectDOM.setAttribute('id', 'ing-select');
        // } if ( key == key[1]) {
        //     btnSelect.setAttribute('id', 'app-select');
        // } if ( key == key[2]) {
        //     btnSelect.setAttribute('id', 'ust-select');
        // }
    });
    console.log(Object.keys(tabTag));
};

function init() {
    handleRecipes();
    handleSelector();
}

init()