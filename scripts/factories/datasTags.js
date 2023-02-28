/**
 * 
 * @param {array} datasRecipes - tableau des recettes
 * @returns {object} - un objet contenant les données de tags pour les ingrédients, les appareils et les ustensiles.
 */

export function getTagsDatas(recipes) {
    // Nouveaux tableaux sans doublon d'élément
    // Récupère les tags
    const tagsDatas = { Ingredients : [] , Appareils: [] , Ustensiles : [] };

    // Parcourir les recettes
    recipes.forEach( recipe => {
        // Ajouter l'appareil au tableau des appareils si il n'est pas déjà inclu
        if (!tagsDatas.Appareils.includes(recipe.appliance)) {
            const formattedAppliance = formatTag(recipe.appliance);
            if (!tagsDatas.Appareils.includes(formattedAppliance)) {
                tagsDatas.Appareils.push(formattedAppliance);
            }
        }

        // Ajouter chaque ingrédient au tableau des ingrédients si il n'est pas déjà inclu
        recipe.ingredients.forEach( ing => {
            const formattedIngredient = formatTag(ing.ingredient);
            if (!tagsDatas.Ingredients.includes(formattedIngredient)) {
                tagsDatas.Ingredients.push(formattedIngredient);
            }
        });

        // Ajouter chaque ustensile au tableau des ustensiles si il n'est pas déjà inclu
        recipe.ustensils.forEach( ust => {
            const formattedUtensil = formatTag(ust);
            if (!tagsDatas.Ustensiles.includes(formattedUtensil)) {
                tagsDatas.Ustensiles.push(formattedUtensil);
            }
        });
    });

    return tagsDatas;
};

/**
 * Formatte une chaîne de caractères pour mettre en majuscule la première lettre et en minuscules les autres lettres, et supprime la lettre "s" à la fin si elle est présente.
 * 
 * @param {string} tag - La chaîne de caractères à formater.
 * @returns {string} - La chaîne de caractères formatée.
 */
function formatTag(tag) {
    const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase();
    return formattedTag;
}
