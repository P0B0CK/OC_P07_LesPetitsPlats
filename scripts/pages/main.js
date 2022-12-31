import { recipes } from "../../datas/recipes.js";
import { recipeCard } from "../factories/recipeCard.js";
import { getRecipesTags } from "../factories/recipeTag.js";

// console.log(recipes);

function getRecipes() {
    // recipes.forEach((recipe) => console.log(recipe));
    recipes.forEach((recipe) => new recipeCard(recipe));
}

function init() {
    getRecipes();
    getRecipesTags();
}

init()