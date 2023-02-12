/**
 * 
 * @param {object btn tags selectors} tabTag
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
            btnSelect.addEventListener('focus', (e) => {
                btnContent.innerHTML = `<input type="text" class='btn-search' placeholder="Recherche un ${tabTag.toLowerCase()}">`;
                btnSelect.classList.add("btn-select-active");
                listContainer.classList.remove('hide');
            })

            return btnSelect;
        };
     

export function getTagList(tabTag) {

    const tagElt = document.createElement('li');
        tagElt.setAttribute('class', 'tag-elt hide');
    tagElt.innerHTML = `${tabTag}`;

    return tagElt;
};
   
// export function getSelectorsTags(tabTag) {
//     const btnSelect = document.createElement('div');
//         btnSelect.setAttribute('class', 'btn-select');
                
//     const btnContent = document.createElement('div');
//         btnContent.setAttribute('class', 'btn-content');
        
//         btnContent.innerHTML = `<div class='btn-search'><input type="text" placeholder="Recherche un ${tabTag.toLowerCase()}" ></div>`;
        
//         const btnArrow = document.createElement('div');
//                     btnArrow.setAttribute('class', 'btn-arrow');
        
//                     btnArrow.innerHTML = `<img 
//                         src="../assets/img/btn-arrow.svg" 
//                         alt="flèche"
//                         class="btn-arrowUp">
//                     `;
                    
//                     btnContent.appendChild(btnArrow);
        
//                     const listContainer =  document.createElement('div');
//                         listContainer.setAttribute('class', 'list-container');
//                         const listContent = document.createElement('ul');
//                             listContent.setAttribute('class', 'list-content');
//                     listContainer.appendChild(listContent);
                    
//                     btnSelect.appendChild(btnContent);
//                     btnSelect.appendChild(listContainer);
                
//                     return btnSelect;
// };
        