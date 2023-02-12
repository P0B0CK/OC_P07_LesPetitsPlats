/**
 * 
 * @param {datas tags array} recipes
 * @returns array content datas from tags
 */

export function getRecipesTags(recipes) {
    // Nouveaux tableaux sans doublon d'élément
    // Récupère les tags
    const datasTags = { Ingredients : [] , Appareils: [] , Ustensiles : [] };

    
    // Dans le tableau des recettes ( pour CHAQUE recette )
    recipes.forEach( recipe => {
        // SI ( l'appareil N'EST PAS DEJA inclu dans la liste des appareils des recettes)
        // ALORS l'appareil est AJOUTE au tableau des TAGS
        if ( ! datasTags.Appareils.includes(recipe.appliance)) {
            return datasTags.Appareils.push(recipe.appliance);
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
            if ( ! datasTags.Ustensiles.includes(ust)) {
                return datasTags.Ustensiles.push(ust);
                
            };
        });
    });
    return datasTags;
};

