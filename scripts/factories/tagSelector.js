/**
 * BOUTON SELECTEUR
 * @param {object btn tags selectors} tabTag
 */

import { datasRecipes } from "../../datas/recipes.js";
import { displayTags } from "../pages/main.js";
import { getFilteredRecipesByTags } from "./searchArray.js";

export let selectedTags = [];

export function getSelectorsTags(tabTag) {
    const btnSelect = document.createElement('div');
    btnSelect.setAttribute('class', 'btn-select');
    
    const btnContent = document.createElement('div');
    btnContent.setAttribute('class', 'btn-content');
    
    btnContent.innerHTML = `<div class="btn-title"><p>${tabTag}</p></div>`;
    
    const btnArrow = document.createElement('div');
    btnArrow.setAttribute('class', 'btn-arrow');
    
    btnArrow.innerHTML = `<img 
    src="../assets/img/btn-arrow.svg" 
    alt="flèche"
    class="btn-arrowUp">
    `;
    
            btnContent.appendChild(btnArrow);
            
            
            const listContainer =  document.createElement('div');
            listContainer.setAttribute('class', 'list-container hide');
            const listContent = document.createElement('ul');
            listContent.setAttribute('class', 'list-content');
            listContainer.appendChild(listContent);
            
            btnSelect.appendChild(btnContent);
            btnSelect.appendChild(listContainer);
            
            // Lorsque le bouton select est actif : 
            btnSelect.addEventListener('click', (e) => {
                btnContent.innerHTML = `<input type="text" class='btn-search' placeholder="Recherche un ${tabTag.slice(0, -1).toLowerCase()}">`;
                btnSelect.classList.add("btn-select-active");
                listContainer.classList.remove('hide');
            })
            
            return btnSelect;
};
        
        
export function getTagList(tabTag, typeTag) {
            
    const tagElt = document.createElement('li');
    tagElt.setAttribute('class', 'tag-elt');
    tagElt.innerHTML = `${tabTag}`;
            
    tagElt.addEventListener('click', () => {
        let searchedTag = { type : typeTag , name : tabTag };
        
        selectedTags.push(searchedTag);
        displayTags();
    })
    
    return tagElt;
};

export function tagThumbnail(tabTag) {
    const tagCard = document.createElement('div');
    tagCard.setAttribute('class', 'tag-card');
    
    tagCard.innerHTML = `
        <div class="thumb-textbox-size">
            <p>${tabTag}</p>
        </div>
        <div class="thumb-cross">
            <img src="assets/img/btn-close.svg" alt="delete tag">
        </div>`;
    
    const closeCross = tagCard.querySelector('.thumb-cross');
    
    closeCross.addEventListener('click', () => removeTagThumb());

    return tagCard;
};



function removeTagThumb(tabTag) {
    console.log(selectedTags)
    // Supprimer le tag dans le tableau des tags sélectionnés
    const index = selectedTags.findIndex(tag => tag.name === tabTag);
    if (index !== -1) {
        selectedTags.splice(index, 1);
    }
    // Supprimer le tag visuellement
    const tagCards = document.querySelectorAll('.tag-card');
    for (let i = 0; i < tagCards.length; i++) {
        const tagCard = tagCards[i];
        if (tagCard.querySelector('p').textContent === tabTag) {
            tagCard.parentNode.removeChild(tagCard);
            break; // on sort de la boucle après la suppression du premier élément trouvé
        }
    }
}

console.log(selectedTags)
