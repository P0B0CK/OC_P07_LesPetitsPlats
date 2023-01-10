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
    const datasTags = { ingredientsTag : [] , applianceTag: [] , ustensilsTag : [] };
    
    // Dans le tableau des recettes ( pour CHAQUE recette )
    recipes.forEach( recipe => {
        // SI ( l'appareil N'EST PAS DEJA inclu dans la liste des appareils des recettes)
        // ALORS l'appareil est AJOUTE au tableau des TAGS
        if ( ! datasTags.applianceTag.includes(recipe.appliance)) {
            return datasTags.applianceTag.push(recipe.appliance);
        }
        
        // Popur CHAQUE ingrédient du tableau
        // SI ( l'ingrédient N'EST PAS DEJA inclu dans la liste des ingrédients des recettes)
        // ALORS l'ingrédient est AJOUTE au tableau des TAGS
        recipe.ingredients.forEach( ing => {
            if ( ! datasTags.ingredientsTag.includes(ing.ingredient)) {
                return datasTags.ingredientsTag.push(ing.ingredient);
            };
        });
        
        // Pour CHAQUE ustensile du tableau
        // SI ( l'ustensile N'EST PAS DEJA inclu dans la liste des ustensiles des recettes)
        // ALORS l'ustensile est AJOUTE au tableau des TAGS
        recipe.ustensils.forEach( ust => {
            if ( ! datasTags.ustensilsTag.includes(ust.ustensils)) {
                return datasTags.ustensilsTag.push(ust.ustensils);

            };
        });
    });
    return datasTags;
};

/**
 * 
 * @param {object btn tags selectors} tabTag
 */

export function getSelectorsTags(tabTag) {
        // FONCTION SINGULIERE
    // parent
    const btnSelect = document.createElement('div');
        btnSelect.setAttribute('class', 'btn-select');
        // enfants
        const btnContent = document.createElement('div');
            btnContent.setAttribute('class', 'btn-content');

        const btnArrow = document.createElement('div');
            btnArrow.setAttribute('class', 'btn-arrow');
    
    btnSelect.appendChild(btnContent);
    btnSelect.appendChild(btnArrow);

    return btnSelect;
};

        // FONCTION PLURIEL
    // // Selecteur par Ingredient :
    // const btnSelectorByIng = document.createElement('div');
    //     btnSelectorByIng.setAttribute('id', 'ing-select');
    //     btnSelectorByIng.setAttribute('class', 'btn-select');

    // // Selecteur par Appareil :
    // const btnSelectorByApp = document.createElement('div');
    //     btnSelectorByApp.setAttribute('id', 'app-select');
    //     btnSelectorByApp.setAttribute('class', 'btn-select');

    // // Selecteur par Ustensil :
    // const btnSelectorByUst = document.createElement('div');
    //     btnSelectorByUst.setAttribute('id', 'ust-select');
    //     btnSelectorByUst.setAttribute('class', 'btn-select');

    // tagsSelectors.appendChild(btnSelectorByIng);
    // tagsSelectors.appendChild(btnSelectorByApp);
    // tagsSelectors.appendChild(btnSelectorByUst);

    // searchtag.appendChild(tagsSelectors);

    // console.log(tabTag.ingredientsTag);
    // console.log(tabTag.applianceTag);
    // console.log(tabTag.ustensilsTag);

// /**
//  * 
//  * @param {object btn tags selectors} 
//  */

// export function TagsSelected() {

//     const tagsSelected = document.createElement('div');
// };