import { recipes } from "../../datas/recipes.js";


// 1 - A chaque fois que l'utilisateur clique sur un selectbox : 
// 2 - sur quel selecteur se trouve-t-il ?
// 3 - 3 choix : Ingrédient - Appareils - Ustensiles
// 4 - Parcour le tableau correspondant.
// 5 - Vérifie si l'élément est en doublon
// 6a - élément en double >> on affiche 1 seul élément
// 6b - élément singleton >> affiche l'élément dans la liste déroulante.
// 7 - élément ajoute une OPTION choix dans le select correspondant.

const select = document.querySelectorAll('select');

export function getRecipesTags() {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = recipes;
    
    function newArrayFilters() {
        // Les NOUVEAUX tableaux FILTRES:
        let getIngredients = [];
        let getAppliances = [];
        let getUstensils = [];
        
        function sortIngredients() {
            // INGREDIENTS
            //Pour CHAQUE recette...
            recipes.forEach( recipes => {
                //... AJOUTE les tableaux d'ingrédients dans le tableau getIng...
                getIngredients.push(recipes.ingredients);
            });
            //... REDUIT en 1 seul tableau les ingrédients...
            getIngredients = getIngredients.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
            //... TRI selon le nom de l'ingrédient...
            getIngredients = getIngredients.map( ingredients => ingredients.ingredient);
            //... FILTRE les ingredients redondants.
            let filterIngredient = getIngredients.filter((x, i) => getIngredients.indexOf(x) === i);
            //... Remplace l'ancien tableau getIng par le tri filterIng.
            return getIngredients = filterIngredient;
        };
        
        function sortAppliances() {
            // APPAREILS
            //Pour CHAQUE recette...
            recipes.forEach( recipes => {
                //... AJOUTE l'appareil dans le tableau getApp...
                getAppliances.push(recipes.appliance);
                //... FILTRE les appareils redondants.
                let filterAppliance = getAppliances.filter((x, i) => getAppliances.indexOf(x) === i);
                //... Remplace l'ancien tableau getApp par le tri filterApp.
                return getAppliances = filterAppliance;
            });
        };
        
        function sortUstensils() {
            // USTENSILS
            //Pour CHAQUE recette...
            recipes.forEach( recipes => {
                //... AJOUTE les tableaux d'ustensils dans le tableau getUst...
                getUstensils.push(recipes.ustensils);
            });
            //... REDUIT en 1 seul tableau les ustensils...
            getUstensils = getUstensils.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
            //... TRI selon le nom de l'ustensils...
            getUstensils = getUstensils.map( ustensils => ustensils.ustensils);
            //... FILTRE les ustensils redondants.
            let filterUstensil = getUstensils.filter((x, i) => getUstensils.indexOf(x) === i);
            //... Remplace l'ancien tableau getIng par le tri filterIng.
            return getUstensils = filterUstensil;
        };
        
        console.log(getIngredients);
        console.log(getAppliances);
        console.log(getUstensils);
        
        return sortIngredients(),
            sortAppliances(),
            sortUstensils();
        
    }; 
    
    
    return newArrayFilters();
    
};
