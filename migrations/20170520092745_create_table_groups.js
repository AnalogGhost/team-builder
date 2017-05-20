exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', table => {
    table.increments();
    table.integer('cohortId').notNullable().references('cohorts.id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups');
};
