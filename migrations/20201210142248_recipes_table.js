
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
      table.increments('recipe_id')
      table.string('recipe_name', 255).notNullable()
  })
  .createTable('ingredients', table => {
      table.increments('ingredient_id')
      table.string('ingredient_name', 255).notNullable()
  })
  .createTable('steps', table => {
      table.increments('step_id')
      table.integer('step_number').notNullable()
      table.string('step_text', 300).notNullable()
      table.integer('quantity').notNullable()
      table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('recipe_id').inTable('recipes')
      .onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('ingredient_id').inTable('ingredients')
      .onDelete('CASCADE').onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('steps')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};
