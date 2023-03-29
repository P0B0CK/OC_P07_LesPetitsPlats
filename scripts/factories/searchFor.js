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
    else if (value.length > 1 && value.length < 3) {
            filteredRecipes = recipes;
            // console.log('Aucune recherche ne correspond à votre critère... vous pouvez chercher " tarte aux pommes ", " poisson ", etc.');
        };
    return filteredRecipes;
}

/**
 * SEARCH FILTRED BY TAG WITH ARRAYS METHODS
 * @param {html} Tag - Vignette des tags sélectionnées
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

export function getFilteredTags(searchText, tabKey) {

    // console.log(searchText); // saisie en recherche
    // console.log(tabKey); // nom du sélecteur
    // console.log(tagsDatas); // tableau d'objets contenant d'autre objets
    if (searchText == undefined) {
        return tagDataFiltered[tabKey]
    } else {
        const filteredTags = tagDataFiltered[tabKey].filter(tagInTab => tagInTab.toLowerCase().includes(searchText.toLowerCase()));
        console.log(filteredTags);
        return filteredTags;
    }
    };