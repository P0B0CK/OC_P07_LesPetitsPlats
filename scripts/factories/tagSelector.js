/**
 * BOUTON SELECTEUR
 * @param {object btn tags selectors} tabTag
 */

import { displayTags, handleRecipes, handleTagsByTagThumb, handleTaglist, displayTagsIngredients, displayTagsAppareils, displayTagsUstensiles } from "../pages/main.js";
import { getFilteredTags } from "./searchArray.js";

/**
 * /////////////////////
 * ///// VARIABLE /////
 * ///////////////////
*/

export let selectedTags = [];


/**
 * ////////////////////
 * //// FONCTIONS ////
 * //////////////////
*/

/**
 * GENERER LES SELECTEURS SELON LEUR TYPE
 * @param {string} tabKey - Le nom du type de tag (ex: "Ingrédients")
 * @param {string} typeTag - "ingredients", "appareils" , "ustensiles"
 * @returns {HTMLElement} - BTN Selecteur de tag
 */
export function getSelectorsTags(tabKey) {
    // Crée le bouton sélecteur
    const selectorTag = document.createElement('div');
    selectorTag.setAttribute('class', 'btn-select');
    
        // Crée le contenu du BTN
        const selectorBtnContent = document.createElement('div');
        selectorBtnContent.setAttribute('class', 'btn-content');
        selectorBtnContent.innerHTML = `<div class="btn-title"><p>${tabKey}</p></div>`;

        // Crée la flèche du BTN
        const btnArrow = document.createElement('div');
        btnArrow.setAttribute('class', 'btn-arrow');
        btnArrow.innerHTML = `<img src="../assets/img/btn-arrow.svg" alt="flèche" class="btn-arrowUp">`;
    
    // Ajoute le contenu et la flèche au bouton
    selectorBtnContent.appendChild(btnArrow);
    selectorTag.appendChild(selectorBtnContent);    
            
    // Crée le conteneur caché de la liste des tags
    const listContainer =  document.createElement('div');
    listContainer.setAttribute('class', 'list-container hide');

        // Crée la liste des tags
        const listContent = document.createElement('ul');
        listContent.setAttribute('class', 'list-content');
        listContainer.appendChild(listContent);

    // Ajoute le conteneur des tags au bouton
    selectorTag.appendChild(listContainer);

    
            let isOpen = false;
    
            // Ouvre le selecteur est le referme SI est déjà ouvert :
            btnArrow.addEventListener('click', (e) => {
                if (!isOpen) {
                    closeOtherSelectors(selectorTag, tabKey); // Ferme tous les autres sélecteurs
                    selectorBtnContent.innerHTML = `<div class="btn-select-search">
                        <input type="text" class='btn-search' placeholder="Recherche un ${tabKey.slice(0, -1).toLowerCase()}"></div>`;
                    selectorTag.classList.add("btn-select-active");
                    listContainer.classList.remove('hide');
                    btnArrow.innerHTML = `<img 
                        src="../assets/img/btn-arrow.svg" 
                        alt="flèche"
                        class="btn-arrowDown">
                        `;
                    selectorBtnContent.appendChild(btnArrow);
                    isOpen = true;
                }               
                else {
                    selectorTag.classList.remove("btn-select-active");
                    listContainer.classList.add('hide');
                    selectorBtnContent.innerHTML = `<div class="btn-title"><p>${tabKey}</p></div>`;
                    btnArrow.innerHTML = `<img src="../assets/img/btn-arrow.svg" alt="flèche" class="btn-arrowUp">`;
                    selectorBtnContent.appendChild(btnArrow);
                    isOpen = false;
                }
                e.stopPropagation();

                // Lorsque l'utilisateur recherche un tag exécute la recherche par tag : 
                const inputSearchTags = document.querySelectorAll('input.btn-search');
                
                inputSearchTags.forEach(input => {
                    input.addEventListener('keyup', () => {
                        let valueOfInputSearchTag = input.value;
                        // console.log('saisie ' , valueOfInputSearchTag );

                        // let tagListFilteredIng = getFilteredTags(valueOfInputSearchTag, tabKey);
                        // displayTagsUstensiles(tagListFilteredUst);

                            let tagListFiltered = getFilteredTags(valueOfInputSearchTag, tabKey); // envoie la valeur recherchée dans la fonction de filtre
                            // let tagListFilteredIng = getFilteredTags(valueOfInputSearchTag, tabKey);
                            // let tagListFilteredApp  = getFilteredTags(valueOfInputSearchTag, tabKey);
                            // let tagListFilteredUst = getFilteredTags(valueOfInputSearchTag, tabKey);
                            console.log(tabKey)

                            if (tabKey === 'Ustensiles') {
                                // console.log('OK UST');
                                displayTagsUstensiles(tagListFiltered);
                            } else if (tabKey === 'Appareils') {
                                // console.log('OK APP');
                                displayTagsAppareils(tagListFiltered);
                            }else if (tabKey === 'Ingredients') {
                                // console.log('OK ING');
                                displayTagsIngredients(tagListFiltered);
                            }
                    });
                });
            });
                
            // lorsque l'utilisateur clic en dehors du sélecteur :
            document.addEventListener('click', (e) => {
            if (!selectorTag.contains(e.target)) {
                selectorTag.classList.remove("btn-select-active");
                listContainer.classList.add('hide');
                selectorBtnContent.innerHTML = `<div class="btn-title"><p>${tabKey}</p></div>`;
                btnArrow.innerHTML = `<img src="../assets/img/btn-arrow.svg" alt="flèche" class="btn-arrowUp">`;
                selectorBtnContent.appendChild(btnArrow);
                isOpen = false;
            }
            });
                
    return selectorTag; 

};

// Ferme tous les autres sélecteurs
function closeOtherSelectors(currentSelector, tabKey) {
    const selectors = document.querySelectorAll('.btn-select');
    selectors.forEach((selector) => {
      if (selector !== currentSelector && selector.classList.contains('btn-select-active')) {
        selector.classList.remove('btn-select-active');
        selector.querySelector('.list-container').classList.add('hide');
        selector.querySelector('.btn-content').innerHTML = `
            <div class="btn-title"><p>${tabKey}</p></div>
            <div class="btn-arrow">
                <img src="../assets/img/btn-arrow.svg" alt="flèche" class="btn-arrowUp">
            </div>`;
      }
    });
  
    if (!currentSelector.classList.contains('btn-select-active')) {
      currentSelector.classList.add('btn-select-active');
      currentSelector.querySelector('.list-container').classList.remove('hide');
      currentSelector.querySelector('.btn-arrow').innerHTML = `<img src="../assets/img/btn-arrow.svg" alt="flèche" class="btn-arrowDown">`;
    }
  }

/**
 * AJOUTE les tags dans la liste
 * @param {String} tabTag 
 * @param {String} typeTag 
 * @returns html object <li>
 */
export function getTagList(tabTag, typeTag, recipes) {
            
    const tagElt = document.createElement('li');
    tagElt.setAttribute('class', 'tag-elt');
    tagElt.innerHTML = `${tabTag}`;
            
    tagElt.addEventListener('click', (e) => {
        let searchedTag = { type : typeTag, name : tabTag };

        let alreadyInSelectedTags = selectedTags.find(tag => tag.type === searchedTag.type && tag.name === searchedTag.name)
        
        if (!alreadyInSelectedTags) {
            selectedTags.push(searchedTag);
        }

        displayTags();
        handleRecipes(recipes);
        handleTagsByTagThumb();
    })
    
    return tagElt;
};

/**
 * CREER VIGNETTE
 * @param {elt} tabTag 
 * @returns Element : vignette du Tag
 */
export function tagThumbnail(tabTag, recipes) {
    const tagCard = document.createElement('div');
    tagCard.classList.add('tag-card');
    
    tagCard.innerHTML = `
        <div class="thumb-textbox-size">
            <p>${tabTag}</p>
        </div>
        <div class="thumb-cross">
            <img src="assets/img/btn-close.svg" alt="delete tag">
        </div>`;
    
    const closeCross = tagCard.querySelector('.thumb-cross');
    
    closeCross.addEventListener('click', (tagToRemove) => removeTagThumb(tagToRemove, recipes));
    
    return tagCard;
};

/**
 * SUPPRMER LA VIGNETTE TAG
 * @param {objet} tagToRemove 
 */
function removeTagThumb(tagToRemove, recipes) {
    let index = selectedTags.findIndex(tag => tag.type === tagToRemove.type && tag.name === tagToRemove.name);
    
    selectedTags.splice(index, 1);
    
    displayTags(); // actualise la liste des tags affichés
    
    handleRecipes(recipes);
}