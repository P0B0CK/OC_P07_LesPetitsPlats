/**
 * SEARCH FILTRED BY ARRAYS METHODS
 * @param {*} tag 
 * @param {*} recipes 
 * @returns array of filtred recipes
 */

export function getFilteredRecipes(tag, recipes){
    let filteredRecipes = [];


    if ( tag.length > 2 ) {
        recipes.forEach( recipe => {
            if (recipe.name.toLowerCase().includes(tag.toString().toLowerCase())) {
                filteredRecipes.push(recipe);
            } else if (recipe.description.toLowerCase().includes(tag.toString().toLowerCase())) {
                filteredRecipes.push(recipe);
            } else {
                recipe.ingredients.forEach( ingredient => {
                    if (ingredient.ingredient.toLowerCase().includes(tag.toString().toLowerCase())) {
                        if ( !filteredRecipes.includes(recipe)) {
                            filteredRecipes.push(recipe);
                        };
                    };
                });
            };
        });
    }
    // tag.length <= 2
    else if (tag.length > 1 && tag.length < 3) {console.log('Aucune recherche ne correspond à votre critère... vous pouvez chercher " tarte aux pommes ", " poisson ", etc.');};
    console.log(filteredRecipes);
    console.log("FIND WITH ARRAYS METHODS");

    return filteredRecipes;
}

/**
 * SEARCH FILTRED BY TAG WITH ARRAYS METHODS
 * @param {*} tag 
 * @param {*} recipes 
 * @returns array of filtred recipes
 */

export function getFilteredRecipesByTags(tag, recipes){
    let filteredRecipes = [];

    if (tag.type === 'ingredients') {
        recipes.forEach( recipe => {
                recipe.ingredients.forEach( ingredient => {
                    if (ingredient.ingredient.toLowerCase().includes(tag.name.toString().toLowerCase())) {
                        if ( !filteredRecipes.includes(recipe)) {
                            filteredRecipes.push(recipe);
                        };
                    };
        })});

    } else if (tag.type === 'appareils') {
        
    } else if (tag.type === 'ustensils') {
        
    } else {

    }
    
    console.log(filteredRecipes);
    console.log("FIND WITH ARRAYS METHODS By TAG");

    return filteredRecipes;
}