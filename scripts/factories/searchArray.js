/**
 * SEARCH FILTRED BY ARRAYS METHODS
 * @param {*} value 
 * @param {*} recipes 
 * @returns array of filtred recipes
 */

export function getFiltredRecipes(value, recipes){
    let filtredRecipes = [];

    if ( value.length > 2 ) {
        recipes.forEach( recipe => {
            if (recipe.name.toLowerCase().includes(value.toLowerCase())) {
                filtredRecipes.push(recipe);
            } else if (recipe.description.toLowerCase().includes(value.toLowerCase())) {
                filtredRecipes.push(recipe);
            } else {
                recipe.ingredients.forEach( ingredient => {
                    if (ingredient.ingredient.toLowerCase().includes(value.toLowerCase())) {
                        if ( filtredRecipes.includes(recipe)) {
                            filtredRecipes.push(recipe);
                        }
                    }
                });
            }
        });
    }
    else if (value.length > 1 && value.length < 3) {console.log('Aucune recherche ne correspond à votre critère... vous pouvez chercher " tarte aux pommes ", " poisson ", etc.');}


    return filtredRecipes;
}