/**
 * SEARCH FILTRED BY FOR METHOD
 * @param {*} value 
 * @param {*} recipes 
 * @returns array of filtredRecipes
 */

export function getFilteredRecipes(value, recipes){
    let filteredRecipes = [];

    if ( value.length > 2 ) {
        
        for ( let recipe of recipes) {
    
            if (recipe.name.toLowerCase().includes(value) == true) {
                filteredRecipes.push(recipe);
            } else if (recipe.description.toLowerCase().includes(value) == true) {
                filteredRecipes.push(recipe);
            } else {

                for ( let i in recipe.ingredients) {
                    if ( recipe.ingredients[i].ingredient.toLowerCase().includes(value) == true) {
                        filteredRecipes.push(recipe);
                        break;
                    }
                }

            }
        }
    }
    else if (value.length > 1 && value.length < 3) {console.log('Aucune recherche ne correspond à votre critère... vous pouvez chercher " tarte aux pommes ", " poisson ", etc.');}
    console.log(filteredRecipes);
    console.log("FIND WITH FOR NATIVE METHODS");
    return filteredRecipes;
}