const db = require('../../data/db-config')

function getRecipes(){
    //select * from recipes;
    return db('recipes')
}
function getShoppingList(recipe_id) {
    return db('recipes as r')
        .join('steps as s', 'r.recipe_id', 's.recipe_id')
        .join('ingredients as i', 'i.ingredient_id', 's.ingredient_id')
        .select('i.ingredient_name','s.quantity')
        .where('s.recipe_id', recipe_id)
}
function getInstructions(recipe_id) {
    return db('steps as s')
        .select('s.step_text', 's.step_number')
        .where('s.recipe_id', recipe_id)
}


module.exports = {
getRecipes,
getShoppingList,
getInstructions
}