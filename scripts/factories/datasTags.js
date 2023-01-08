import { recipes } from "../../datas/recipes.js";

// section de recherche par tag ::
const searchtag = document.querySelector('#searchtag');

/**
 * 
 * @param {datas tags array} recipes
 * @returns 
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

export function TagsSelectors(tabTag) {

    // Compartiment de la section de Searchtag contenant les sélecteurs ::
    const tagsSelectors = document.createElement('div');
        tagsSelectors.setAttribute('class', 'tag-selectors');

    // Selecteur par Ingredient :
    const btnSelectorByIng = document.createElement('div');
        btnSelector.setAttribute('id', 'ing-select');
        btnSelector.setAttribute('class', 'btn-select');

    // Selecteur par Appareil :
    const btnSelectorByApp = document.createElement('div');
        btnSelector.setAttribute('id', 'app-select');
        btnSelector.setAttribute('class', 'btn-select');

    // Selecteur par Ustensil :
    const btnSelectorByUst = document.createElement('div');
        btnSelector.setAttribute('id', 'ust-select');
        btnSelector.setAttribute('class', 'btn-select');

    // option.innerHTML = `${datasTags.applianceTag}`;
    // option.innerHTML = `${datasTags.ingredientsTag}`;
    // option.innerHTML = `${datasTags.ustensilsTag}`;
};

// /**
//  * 
//  * @param {object btn tags selectors} 
//  */

// export function TagsSelected() {

//     const tagsSelected = document.createElement('div');
// };