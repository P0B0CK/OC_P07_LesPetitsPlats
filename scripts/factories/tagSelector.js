/**
 * BOUTON SELECTEUR
 * @param {object btn tags selectors} tabTag
 */

import { datasRecipes } from "../../datas/recipes.js";
import { getFilteredRecipesByTags } from "./searchArray.js";

export let selectedTag = [];

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
        selectedTag.push(searchedTag);
        console.log(selectedTag); 
        // getFilteredRecipesByTags(searchedTag, datasRecipes);
        // handleRecipes(searchedTag);
    })

    return tagElt;
};

export function cardTag(tabTag) {
    const cardTag = document.createElement('div');
        cardTag.setAttribute('class', 'tag-card');

    cardTag.innerHTML = `<p>${tabTag}</p>`;
    cardTag.innerHTML = `<img src="assets/img/btn-close.svg" alt="delete tag"></div>`;

    return cardTag;
}

   