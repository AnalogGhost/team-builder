exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohort', table => {
    table.increments('cohort_id');
    table.string("name").notNullable();
    table.boolean("is_active").notNullable().defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cohort');
};
