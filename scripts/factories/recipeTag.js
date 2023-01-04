import { recipes } from "../../datas/recipes.js";

const select = document.querySelectorAll('select');

/**
 * 
 * @param {datas tags array} recipes
 * @returns 
 */

export function getRecipesTags(recipes) {
    // Tableau des recettes
    const { ingredients, appliance, ustensils } = recipes;
    // Nouveaux tableaux sans doublon d'élément
    // Récupère les tags
    const datasTags = { ingredientsTag : [] , applianceTag: [] , ustensilsTag : [] };
    
    // Dans le tableau des recettes ( pour CHAQUE recette )
    recipes.forEach( recipe => {
        // SI ( l'appareil N'EST PAS DEJA inclu dans la liste des appareils des recettes)
        // ALORS l'appareil est AJOUTE au tableau des TAGS
        if ( ! appliance.includes(recipes.appliance)) {
            return datasTags.applianceTag.push(recipes.appliance);
        }
        
        // Popur CHAQUE ingrédient du tableau
        // SI ( l'ingrédient N'EST PAS DEJA inclu dans la liste des ingrédients des recettes)
        // ALORS l'ingrédient est AJOUTE au tableau des TAGS
        recipe.ingredient.forEach( ing => {
            if ( ! ingredients.includes(ing.ingredient)) {
                return datasTags.ingredientsTag.push(ing.ingredient);
            };
        });
        
        // Pour CHAQUE ustensile du tableau
        // SI ( l'ustensile N'EST PAS DEJA inclu dans la liste des ustensiles des recettes)
        // ALORS l'ustensile est AJOUTE au tableau des TAGS
        recipe.ustensils.forEach( ust => {
            if ( ! ustensils.includes(ust.ustensil)) {
                return datasTags.ustensilsTag.push(ust.ustensil);

            };
        });
    });
    return datasTags;
    console.log(datasTags);
};



// /**
//  * 
//  * @param {option select} datasTags 
//  */
//     export function getTagsOptions(datasTags) {
// }

// <option>${datasTags.ingredients}</option>