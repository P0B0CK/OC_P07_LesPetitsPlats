import { recipes } from "../../datas/recipes.js";


//// >>> DOM ELEMENTS <<< ////
const searchtag = document.querySelector('#searchtag');
const tagsSelectors = document.querySelector('.tag-selectors');

/**
 * 
 * @param {datas tags array} recipes
 * @returns array content datas from tags
 */

export function getRecipesTags(recipes) {
    // Nouveaux tableaux sans doublon d'élément
    // Récupère les tags
    const datasTags = { Ingredients : [] , Appareil: [] , Ustensiles : [] };
    
    // Dans le tableau des recettes ( pour CHAQUE recette )
    recipes.forEach( recipe => {
        // SI ( l'appareil N'EST PAS DEJA inclu dans la liste des appareils des recettes)
        // ALORS l'appareil est AJOUTE au tableau des TAGS
        if ( ! datasTags.Appareil.includes(recipe.appliance)) {
            return datasTags.Appareil.push(recipe.appliance);
        }
        
        // Popur CHAQUE ingrédient du tableau
        // SI ( l'ingrédient N'EST PAS DEJA inclu dans la liste des ingrédients des recettes)
        // ALORS l'ingrédient est AJOUTE au tableau des TAGS
        recipe.ingredients.forEach( ing => {
            if ( ! datasTags.Ingredients.includes(ing.ingredient)) {
                return datasTags.Ingredients.push(ing.ingredient);
            };
        });
        
        // Pour CHAQUE ustensile du tableau
        // SI ( l'ustensile N'EST PAS DEJA inclu dans la liste des ustensiles des recettes)
        // ALORS l'ustensile est AJOUTE au tableau des TAGS
        recipe.ustensils.forEach( ust => {
            if ( ! datasTags.Ustensiles.includes(ust.ustensils)) {
                return datasTags.Ustensiles.push(ust.ustensils);

            };
        });
    });
    return datasTags;
};

/**
 * 
 * @param {object btn tags selectors} tabTag
 */

export function getSelectorsTags(datasTags) {
    console.log(datasTags);
    const btnSelect = document.createElement('div');
        btnSelect.setAttribute('class', 'btn-select');
        
        const btnContent = document.createElement('div');
            btnContent.setAttribute('class', 'btn-content');

            btnContent.innerHTML = `<p class="btn-title">${datasTags}
            </p>`;

        const btnArrow = document.createElement('div');
            btnArrow.setAttribute('class', 'btn-arrow');

            btnArrow.innerHTML = `<img 
                src="../assets/img/btn-arrow.svg" 
                alt="flèche"
                class="btn-arrowUp">
            `;
    
    btnSelect.appendChild(btnContent);
    btnSelect.appendChild(btnArrow);

    return btnSelect;
};