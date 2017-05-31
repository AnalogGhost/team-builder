exports.up = function(knex, Promise) {
  return knex.schema.createTable('group', table => {
    table.increments('group_id');
    table.integer('cohort_id').notNullable().references('cohort.cohort_id');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('group');
};
