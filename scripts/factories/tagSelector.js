/**
 * BOUTON SELECTEUR
 * @param {object btn tags selectors} tabTag
 */

import { displayTags, handleRecipes } from "../pages/main.js";
import { getTagsDatas } from "./datasTags.js";

/**
 * /////////////////////
 * ///// VARIABLE /////
 * ///////////////////
*/

export let selectedTags = [];

// const tagsList = document.querySelector('.list-content');

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
                btnContent.innerHTML = `<div class="btn-select-search">
                        <input type="text" class='btn-search' placeholder="Recherche un ${tabTag.slice(0, -1).toLowerCase()}"></div>`;
                btnSelect.classList.add("btn-select-active");
                listContainer.classList.remove('hide');
                btnArrow.innerHTML = `<img 
                    src="../assets/img/btn-arrow.svg" 
                    alt="flèche"
                    class="btn-arrowDown">
                    `;
                btnContent.appendChild(btnArrow);

                    // Arrête la propagation de l'événement.
                    // const inputSearch = document.querySelector(`#${tabTag}-select .btn-search`);
                    const inputSearch = document.querySelector('.btn-search'); // Barre de recherche secondaire (selecteurs)
                    inputSearch.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });


                    inputSearch.addEventListener('input', (e) => {
                        const searchValue = e.target.value;
                        const tagsList = document.querySelector('.list-content');
                        handleTagSearch(searchValue, tagsList, tabTag);
                    });
            });

            // lorsque l'utilisateur clic en dehors du sélcteur :
            document.addEventListener('click', (e) => {
            if (!btnSelect.contains(e.target)) {
                btnSelect.classList.remove("btn-select-active");
                listContainer.classList.add('hide');
                btnContent.innerHTML = `<div class="btn-title"><p>${tabTag}</p></div>`;
                btnArrow.innerHTML = `<img src="../assets/img/btn-arrow.svg" alt="flèche" class="btn-arrowUp">`;
                btnContent.appendChild(btnArrow);
            }
    });
            
            return btnSelect;
};
        
/**
 * 
 * @param {name} tabTag 
 * @param {type} typeTag 
 * @returns HTMLelement : <li>TAG</li>
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

/**
 * ACTUALISE la liste des tags selon sélecteur
 * @param {*} tabTag 
 * @returns 
 */
export function handleTagsNameInCurrentList(tabTag) {
    const currentList = document.querySelector(`.list-content`);
    const tagNames = Array.from(currentList.children).map(li => li.textContent.trim());
    return tagNames;
};

/**
 * RECHERCHE les tags correspondant à la saisie
 * @param {*} tagsList 
 * @param {*} searchValue 
 * @returns 
 */
function filterTagsByName(tagsList, searchValue) {
    const filteredTags = tagsList.filter(tag => tag.toLowerCase().includes(searchValue.toLowerCase()));
    return filteredTags;
}

/**
 * RESTITUE les tags recherchés
 * @param {*} searchValue 
 * @param {*} tabTag 
 */
export function handleTagSearch(searchValue, listIngDOM, listAppDOM, listUstDOM) {
    if (searchValue.length >= 2) {
        const tagNames = [
            ...handleTagsNameInCurrentList(listIngDOM),
            ...handleTagsNameInCurrentList(listAppDOM),
            ...handleTagsNameInCurrentList(listUstDOM),
          ];
        const filteredTags = filterTagsByName(tagNames, searchValue);
        console.log(filteredTags);
        displayTags(filteredTags);
    }    
}