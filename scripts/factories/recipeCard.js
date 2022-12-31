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
                                                    <div class="recipe-necessary"><ul>${ingredients.map(elt => recipeIngredient(elt))}</ul></div>
                                                    <div class="recipe-describe">${description}</div>
                                                </div>
                                            </div>
                        `;
    
    function recipeIngredient(elt){
        let datas = ``;
        if(elt.unit && elt.quantity) {
            datas = `<li><strong>${elt.ingredient} :</strong> ${elt.quantity} ${elt.unit}</li>`;
        } else if (elt.quantity &&  !elt.unit) {
            datas = `<li><strong>${elt.ingredient} :</strong> ${elt.quantity}</li>`;
        } else {
            datas = `<li><strong>${elt.ingredient}</strong></li>`;
        }
        return datas;
    }

    function createIngredientType() {
        let tabIngredient = [];
        ingredients.map( elt => tabIngredient.push(elt.ingredient));
    }
}



