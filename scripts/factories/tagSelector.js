/**
 * BOUTON SELECTEUR
 * @param {object btn tags selectors} tabTag
 */

import { displayTags, handleRecipes } from "../pages/main.js";

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
                btnContent.innerHTML = `<div class="btn-searchByName"><input type="text" class='btn-search' placeholder="Recherche un ${tabTag.slice(0, -1).toLowerCase()}"></div>`;
                btnSelect.classList.add("btn-select-active");
                listContainer.classList.remove('hide');
                btnArrow.innerHTML = `<img 
                    src="../assets/img/btn-arrow.svg" 
                    alt="flèche"
                    class="btn-arrowDown">
                    `;
                btnContent.appendChild(btnArrow);
            });

            // Lorsqu'un clic est détecté en dehors du bouton de sélection et de son menu déroulant :
            document.addEventListener('click', (e) => {
            if (!btnSelect.contains(e.target)) { // Vérifie si l'élément cliqué est à l'intérieur du bouton de sélection et de son menu déroulant
            }
    });
            
            return btnSelect;
};
        
/**
 * 
 * @param {name} tabTag 
 * @param {type} typeTag 
 * @returns Element : <li>TAG</li>
 */        
export function getTagList(tabTag, typeTag) {
            
    const tagElt = document.createElement('li');
    tagElt.setAttribute('class', 'tag-elt');
    tagElt.innerHTML = `${tabTag}`;
            
    tagElt.addEventListener('click', () => {
        let searchedTag = { type : typeTag , name : tabTag };

        let alreadyInSelectedTags = selectedTags.find(tag => tag.type === searchedTag.type && tag.name === searchedTag.name)
        
        if (!alreadyInSelectedTags) {
            selectedTags.push(searchedTag);
        }

        displayTags();
        handleRecipes();
    })
    
    return tagElt;
};

/**
 * 
 * @param {elt} tabTag 
 * @returns Element : vignette du Tag
 */
export function tagThumbnail(tabTag) {
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
    
    closeCross.addEventListener('click', (tagToRemove) => removeTagThumb(tagToRemove));
    
    return tagCard;
};

/**
 * 
 * @param {objet} tagToRemove 
 */
function removeTagThumb(tagToRemove) {
    let index = selectedTags.findIndex(tag => tag.type === tagToRemove.type && tag.name === tagToRemove.name);
    
    selectedTags.splice(index, 1);
    
    displayTags();
    handleRecipes();
}
