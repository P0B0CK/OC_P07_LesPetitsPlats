import { recipes } from "../../datas/recipes.js";
import { recipeCard } from "../factories/recipeCard.js";
import { getRecipesTags } from "../factories/datasTags.js";
import { getSelectorsTags, getTagList } from "../factories/tagSelector.js";
// import { getSearchRecipes } from "../factories/searchFor.js";


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



/**
 * NEW TAG'S LIST ARRAY
*/
let tabTag = getRecipesTags(recipes);
const tabName = Object.keys(tabTag);

/**
 * Ajoute les recettes
 */
function handleRecipes() {
    // recipes.forEach((recipe) => console.log(recipe));
    recipes.forEach((recipe) => new recipeCard(recipe));
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

// FOR METHOD : // revoir via diagramee


const searchBar = document.querySelector('.searchbar');

searchBar.addEventListener('keyup', (e) => {
    const searchedContent = e.target.value;
    // const recipesCards = document.querySelectorAll('.recipe-card');
    getSearchFiltred(searchedContent, recipes);
});

// f (liste des recettes)
// return tableau des recettes fltrées
function getSearchFiltred(value, recipes){

    getSearchFiltredWithFor(value, recipes);
    getSearchFiltredWithFilter(value, recipes);

}

function getSearchFiltredWithFor(value, recipes){
    let arrayFiltredSearch = [];

    if ( value.length > 2 ) {
        console.log(recipes);
        for ( let recipe of recipes) {
            
           
            if (recipe.name.toLowerCase().includes(value) == true) {
                arrayFiltredSearch.push(recipe);
            } 
            
            else if (recipe.description.toLowerCase().includes(value) == true) {
                arrayFiltredSearch.push(recipe);
            }

            else {
                for ( let i in recipe.ingredients) {
                    if ( recipe.ingredients[i].ingredient.toLowerCase().includes(value) == true) {
                        arrayFiltredSearch.push(recipe);
                        console.log(i);
                        console.log(recipe);
                        break;
                    }
                }
            }
        }
    }
    else if (value.length > 1 && value.length < 3) {console.log('ERROR : Renseignez 3 caractères minimum');}
    console.log(arrayFiltredSearch);
}

function getSearchFiltredWithFilter(value, recipes){
    let arrayFiltredSearch = [];

    if ( value.length > 2 ) {
        console.log(recipes);
        for ( let recipe of recipes) {
            
           
            if (recipe.name.toLowerCase().includes(value) == true) {
                arrayFiltredSearch.push(recipe);
            } 
            
            else if (recipe.description.toLowerCase().includes(value) == true) {
                arrayFiltredSearch.push(recipe);
            }

            else {
                for ( let i in recipe.ingredients) {
                    if ( recipe.ingredients[i].ingredient.toLowerCase().includes(value) == true) {
                        arrayFiltredSearch.push(recipe);
                        console.log(i);
                        console.log(recipe);
                        break;
                    }
                }
            }
        }
    }
    else if (value.length > 1 && value.length < 3) {console.log('ERROR : Renseignez 3 caractères minimum');}
    console.log(arrayFiltredSearch);
}

function init() {
    handleRecipes();
    handleSelector();
    handleTaglist(tabTag);
    getSearchFiltred(recipeCard);
}

init()


                // Parcourir le tableau des ingrédients de la recette : 
                // for ( let i = 0 ; i < recipes.ingredients[i].length ; i++ ) {
                //     console.log(recipes.ingredients[i])
                // //     // Si le tableau comporte la valeur recherchée  == VRAI
                // //     if ( recipes.ingredients[i].toLowerCase().includes(value) == true) {
                // //         arrayFiltredSearch.push(recipes[i]);
                // //         console.log('trouvééééé !')
                //     // } else {
                //     //     console.log('ERREUR');
                //     // };
                // }