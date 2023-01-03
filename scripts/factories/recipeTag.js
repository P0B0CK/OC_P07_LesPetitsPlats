import { recipes } from "../../datas/recipes.js";

const select = document.querySelectorAll('select');

export function getRecipesTags(recipes) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = recipes;

    const datasTags = { ingredients : [] , appliance : [] , ustensils : [] };
    
    recipes.forEach( recipe => {
        if ( ! appliance.includes(recipes.appliance)) {
            appliance.push(recipes.appliance);
        }

        recipe.ingredient.forEach( ing => {
            if ( ! ingredients.includes(ing.ingredient)) {
                ingredients.push(ing.ingredient);
            };
        });

        recipe.ustensils.forEach( ust => {
            if ( ! ustensils.includes(ust.ustensil)) {
                ustensils.push(ust.ustensil);
            };
        });
    });    
    
    return datasTags;
};
