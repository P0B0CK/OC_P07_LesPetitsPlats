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

/**
 * NEW TAG'S LIST ARRAY
*/
let tabTag = getRecipesTags(recipes);

function handleRecipes() {
    // recipes.forEach((recipe) => console.log(recipe));
    recipes.forEach((recipe) => new recipeCard(recipe));
}

function handleSelector() {
    const tabName = Object.keys(tabTag);
    
    tabName.forEach(key => { tagsSelectors.appendChild(new getSelectorsTags(key));});
                        
                        // console.log(tabName); // tableau des clés
                        // console.log(tabName.length); // 3
                        
    const btnSelectDOM = document.querySelectorAll('.btn-select');
    // console.log(btnSelectDOM);
    
    for (let i = 0 ; i < btnSelectDOM.length ; i++) {
        // console.log(i);
        if ( i == 0) {
            btnSelectDOM[i].setAttribute('id', 'ing-select');
        } if ( i == 1) {
        btnSelectDOM[i].setAttribute('id', 'app-select');
        } if ( i == 2) {
            btnSelectDOM[i].setAttribute('id', 'ust-select');
        }
    };
    // console.log(tagsSelectors)
    // console.log(Object.keys(tabTag));
};

function init() {
    handleRecipes();
    handleSelector();
}

init()