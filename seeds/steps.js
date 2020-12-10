
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, recipe_id:1, ingredient_id: 1,  step_text: 'Boil noodles in water', quantity:1},
        {step_number: 2, recipe_id:1, ingredient_id: 3,  step_text: 'Strain water, add cheese', quantity:2},
        {step_number: 3, recipe_id:1, ingredient_id: 2,  step_text: 'Add milk and stir', quantity:1},
        {step_number: 1, recipe_id:2, ingredient_id: 4,  step_text: 'Set out 2 pieces of bread', quantity:2},
        {step_number: 2, recipe_id:2, ingredient_id: 5,  step_text: 'Slather 1 piece of bread with peanut butter', quantity:1},
        {step_number: 3, recipe_id:2, ingredient_id: 6,  step_text: 'Slather other piece of bread with jelly and CONSUME', quantity:1},
        {step_number: 1, recipe_id:3, ingredient_id: 4,  step_text: 'Heat stove and place bread in a pan on said stove', quantity:2},
        {step_number: 2, recipe_id:3, ingredient_id: 3,  step_text: 'grate cheese on heated bread, heat until melted. ENJOY.', quantity:2},
      ]);
    });
};
