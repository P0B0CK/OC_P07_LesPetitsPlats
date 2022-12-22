import { recipes } from "../../datas/recipes.js";

export function recipeCard(recipes) {

    const { id, name, servings, ingredients, time, description, appliance, ustensils } = recipes;

    const searchresults = document.getElementById('searchresults');

    const recipeCard = document.createElement('article');
    recipeCard.setAttribute('class', 'recipe-card');

    searchresults.appendChild(recipeCard);

    recipeCard.innerHTML = `
                            <div class="card-picture"></div>
                                <div class="card-details">
                                    <div class="details-legend">
                                        <h3 class="recipe-title">${name}</h3>
                                            <div class="recipe-duration"><img src="assets/img/icon-time.svg" alt="Icone Temps de préparation"><p>${time} min</p></div>
                                            </div>
                                                <div class="details-description">
                                                    <div class="recipe-necessary">${ingredients}</div>
                                                    <div class="recipe-describe">${description}</div>
                                                </div>
                                            </div>
                        `;
}



