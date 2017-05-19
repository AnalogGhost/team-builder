exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increments();
    table.string("name").notNullable();
    table.boolean("isActive").notNullable().defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cohorts');
};
