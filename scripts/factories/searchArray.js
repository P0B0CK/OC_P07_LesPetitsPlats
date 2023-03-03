/**
 * SEARCH FILTRED BY ARRAYS METHODS
 * @param {*} value input search bar
 * @param {*} recipes 
 * @returns [filteredRecipes]
 */

export function getFilteredRecipes(value, recipes){
    let filteredRecipes = [];

    if ( value.length > 2 ) {
        recipes.forEach( recipe => {
            if (recipe.name.toLowerCase().includes(value.toString().toLowerCase())) {
                filteredRecipes.push(recipe);
            } else if (recipe.description.toLowerCase().includes(value.toString().toLowerCase())) {
                filteredRecipes.push(recipe);
            } else {
                recipe.ingredients.forEach( ingredient => {
                    if (ingredient.ingredient.toLowerCase().includes(value.toString().toLowerCase())) {
                        if ( !filteredRecipes.includes(recipe)) {
                            filteredRecipes.push(recipe);
                        };
                    };
                });
            };
        });
    }
    else {
        filteredRecipes = recipes;
        // console.log('Aucune recherche ne correspond à votre critère... vous pouvez chercher " tarte aux pommes ", " poisson ", etc.');
    };
    
    return filteredRecipes;
}

/**
 * SEARCH FILTRED BY TAG WITH ARRAYS METHODS
 * @param {*} tag 
 * @param {*} recipes 
 * @returns [filteredRecipes]
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
        recipes.forEach( recipe => {  
            if (recipe.appliance.toLowerCase().includes(tag.name.toString().toLowerCase())) {
                filteredRecipes.push(recipe);
        };  
            });
    } else if (tag.type === 'ustensils') {
        recipes.forEach( recipe => {
            recipe.ustensils.forEach( ustensile => {
                if (ustensile.toLowerCase().includes(tag.name.toString().toLowerCase())) {
                    if ( !filteredRecipes.includes(recipe)) {
                        filteredRecipes.push(recipe);
                    };
                };
    })});
    }
    
    return filteredRecipes;
}