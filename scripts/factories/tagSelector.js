import { recipes } from "../../datas/recipes.js";


/**
 * 
 * @param {object btn tags selectors} tabTag
 */

export function getSelectorsTags(tabTag) {
    // console.log(datasTags);
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
        
            return btnSelect;
        };

export function getTagList(tabTag) {

    const tagElt = document.createElement('li');
        tagElt.setAttribute('class', 'tag-elt');
    tagElt.innerHTML = `${tabTag}`;

    return tagElt;
};

// export function getListTag(tabTag) {
//     const btnSelectDOM = document.querySelectorAll('.btn-select');
//     const btnContentDOM = document.querySelectorAll('.btn-content');
//     const tabName = Object.keys(tabTag);

//     const listContainer =  document.createElement('div');
//         listContainer.setAttribute('class', 'list-container');
//         const listContent = document.createElement('ul');
//             listContent.setAttribute('class', 'list-content');
//     listContainer.appendChild(listContent);

//     return listContainer;
// }



    // tabTag.tabName[i].forEach( elt => {
    //     const listTag = `<li>${tabTag.array[i]}</li>`;
    //     listTag.setAttribute('class', 'list-tag');
    // });


    // console.log(listContainer);
    // console.log(btnSelectDOM);
    // console.log(btnContentDOM);
    // console.log(tabTag, tabName);