/**
 * SEARCH FILTRED BY ARRAYS METHODS
 * @param {*} value 
 * @param {*} recipes 
 * @returns array of filtred recipes
 */

export function getFilteredRecipes(value, recipes){
    let filteredRecipes = [];

    if ( value.length > 2 ) {
        recipes.forEach( recipe => {
            if (recipe.name.toLowerCase().includes(value.toLowerCase())) {
                filteredRecipes.push(recipe);
            } else if (recipe.description.toLowerCase().includes(value.toLowerCase())) {
                filteredRecipes.push(recipe);
            } else {
                recipe.ingredients.forEach( ingredient => {
                    if (ingredient.ingredient.toLowerCase().includes(value.toLowerCase())) {
                        if ( !filteredRecipes.includes(recipe)) {
                            filteredRecipes.push(recipe);
                        };
                    };
                });
            };
        });
    }
    // value.length <= 2
    else if (value.length > 1 && value.length < 3) {console.log('Aucune recherche ne correspond à votre critère... vous pouvez chercher " tarte aux pommes ", " poisson ", etc.');};
    console.log(filteredRecipes);
    console.log("FIND WITH ARRAYS METHODS");

    return filteredRecipes;
}