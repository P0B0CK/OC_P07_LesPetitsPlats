import { recipes } from "../../datas/recipes.js";
import { recipeCard } from "../factories/recipeCard.js";
import { getRecipesTags, TagsSelectors } from "../factories/datasTags.js";

// console.log(recipes);

function getRecipes() {
    // recipes.forEach((recipe) => console.log(recipe));
    recipes.forEach((recipe) => new recipeCard(recipe));
}

// function handleOptionsTags(datasTags) {
//     const { ingredientsTag, applianceTag, ustensilsTag } = datasTags;

//     return console.log(ingredientsTag);
// }

function init() {
    getRecipes();
    let tabTag = getRecipesTags(recipes);
    console.log(tabTag);
    TagsSelectors(tabTag);
}

init()