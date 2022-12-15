export async function api() {
    let recipes;

    await fetch("../../datas/recipes.json")
        .then((res) => res.json())
        .then((data) => console.log(data));

        console.log(recipes);
}