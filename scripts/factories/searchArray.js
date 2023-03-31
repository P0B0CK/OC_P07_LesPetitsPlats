/**
 * SEARCH FILTRED BY ARRAYS METHODS
 * @param {input} value - valeur de la barre de recherche principale
 * @param {datas} recipes - orderedRecipes
 * @returns [filteredRecipes]
 */

import { tagDataFiltered } from "../pages/main.js";

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

    if (searchText == undefined) {
        return tagDataFiltered[tabKey]
    } else {
        const filteredTags = tagDataFiltered[tabKey].filter(tagInTab => tagInTab.toLowerCase().includes(searchText.toLowerCase()));
        console.log(filteredTags);
        return filteredTags;
    }
    };