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
const inputSearchTag = document.querySelectorAll('.btn-search'); // Barre de recherche secondaire prévue dans les sélecteurs
console.log(inputSearchTag)

/**
 * /////////////////////
 * ///// VARIABLE /////
 * ///////////////////
*/

let orderedRecipes = []; // Stocke les datasRecipes ordonnées

let tagsDatas = getTagsDatas(datasRecipes); // Objet contenant les 3 tableaux de tags :: [datasTags]
const tagsDatasKeysName = Object.keys(tagsDatas); // Noms des 3 tableaux

let tagIng = tagsDatas.Ingredients;
let tagApp = tagsDatas.Appareils;
let tagUst = tagsDatas.Ustensiles;

/**
 * ////////////////////
 * //// FONCTIONS ////
 * //////////////////
*/

/**
 *  
 * TRIER les datasRecipes[] par ordre alphabétique
 * 
 * @returns orderedRecipes
*/
function sortRecipes(){
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
 * 
 * MANIPULE l'affichage des recettes
 * 
 * @param {datas} orderedRecipes - tableau des recettes triées
 * @param {input} value - valeur de la barre de recherche principale
 * @param {tag} def
 * 
*/
export function handleRecipes(recipes) {
    let filteredRecipes = [];
      
    const searchedContent = searchBar.value;
  
    filteredRecipes = getFilteredRecipes(searchedContent, recipes); // filtrer les recettes en fonction du contenu recherché
    console.log('restitution', filteredRecipes)
    // console.log('tag sélectioné : ', selectedTags);
      
    if (selectedTags.length > 0) {
      selectedTags.forEach(tag => {
        filteredRecipes = getFilteredRecipesByTags(tag, filteredRecipes);
        // console.log('tag sélectionné : ', tag.type);
        // console.log(filteredRecipes);

      });
      displayRecipes(filteredRecipes);
    } else {
      displayRecipes(orderedRecipes);
    }
    // console.log(filteredRecipes)
    displayRecipes(filteredRecipes);
    
    let tagData = getTagsDatas(filteredRecipes);
    handleTaglist(tagData); // mettre à jour les listes de tags dans les sélecteurs
  }


/**
 * AFFICHER les cartes recettes ::
 * @param {recipes} orderedRecipes
*/
function displayRecipes(recipes) {
    const searchresults = document.getElementById('searchresults');
    searchresults.innerHTML = '';
    recipes.map((recipe) => new recipeCard(recipe));
}

/**
 * AFFICHE les vignettes des tags dans la section
 */
export function displayTags() {
    tagsSelectedContainer.innerHTML = ''; // Annule les doublons => vide le contenu précédent de l'élément
    
    selectedTags.forEach(tag => {
      const card = tagThumbnail(tag.name, orderedRecipes); // crée une carte pour le tag donné
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


export function handleTagsByTagThumb() {
    console.log(selectedTags);
    // SI le tableau des tags sélectionnés n'est pas vide
    if (selectedTags.length > 0) {
        // POUR CHAQUE tag sélectionné du tableau
        selectedTags.forEach(selectedTag => {
            // SI le type du tag correspond au type de liste
            if (selectedTag.type === 'ingredients') {
                tagIng = tagIng.filter(tag => tag !== selectedTag.name); // Filtre le tableau correspondant au type puis supprime le tag en queston de la liste
            } else if (selectedTag.type === 'appareils') {
                tagApp = tagApp.filter(tag => tag !== selectedTag.name); // Filtre le tableau correspondant au type puis supprime le tag en queston de la liste
            } else if (selectedTag.type === 'ustensils') {
                tagUst = tagUst.filter(tag => tag !== selectedTag.name); // Filtre le tableau correspondant au type puis supprime le tag en queston de la liste
            }
          });
    } else {
        handleRecipes();
    }
      
    //   // Mise à jour de la liste des tags
    //   handleTaglist(tagIng, tagApp, tagUst);
    //   console.log(tagIng);
    //   console.log(tagApp);
    //   console.log(tagUst);
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
            btnSelectDOM[i].setAttribute('data-type', 'ingredients');
        } if ( i == 1) {
            btnSelectDOM[i].setAttribute('id', 'app-select');
            btnSelectDOM[i].setAttribute('data-type', 'appareils');
        } if ( i == 2) {
            btnSelectDOM[i].setAttribute('id', 'ust-select');
            btnSelectDOM[i].setAttribute('data-type', 'ustensils');
        }
    };
    
};

/**
 *  GERER & GENERER pour chaque TYPE de selecteur la liste Correspondante ::
*/
function handleTaglist(tagData) {
    const selectIng = document.querySelector('#ing-select');
    const selectApp = document.querySelector('#app-select');
    const selectUst = document.querySelector('#ust-select');

    
    const listIngDOM = selectIng.children[1].children[0];
    const listAppDOM = selectApp.children[1].children[0];
    const listUstDOM = selectUst.children[1].children[0];
    
    listIngDOM.innerHTML = '';
    listAppDOM.innerHTML = '';
    listUstDOM.innerHTML = '';
    tagData.Ingredients.forEach( ing => {
        if (!selectedTags.some(function (tag) {
            return ing === tag.name && 'ingredients' === tag.type;
        })) {

            listIngDOM.appendChild(new getTagList(ing, 'ingredients', orderedRecipes))
        }
    });
    tagData.Appareils.forEach( app => {
        if (!selectedTags.some(function (tag) {
            return app === tag.name && 'appareils' === tag.type;
        })) {
            listAppDOM.appendChild(new getTagList(app, 'appareils', orderedRecipes ))
        }
    });
    tagData.Ustensiles.forEach( ust => {
        if (!selectedTags.some(function (tag) {
            return ust === tag.name && 'ustensils' === tag.type;
        })) {
            listUstDOM.appendChild(new getTagList(ust, 'ustensils', orderedRecipes))
        }
    });

    console.log('tableau des tags selectioné', selectedTags);
};

function init() {
    orderedRecipes = sortRecipes();
    handleSelector();
    handleRecipes(orderedRecipes);
    // displayRecipes(orderedRecipes);
    // handleTaglist(tagsDatas);
    // displayTags(selectedTags);
    // handleTaglist(tagIng, tagApp, tagUst);
};

/**
 * /////////////////////
 * /////  EVENTS  /////
 * ///////////////////
*/

/**
 * @type {EventListener} keyup
 * @param {input}
 */
searchBar.addEventListener('keyup', (e) => {
    handleRecipes(orderedRecipes);
});

init()