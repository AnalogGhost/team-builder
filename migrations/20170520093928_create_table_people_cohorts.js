
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people_cohorts', table => {
    table.integer('peopleId').notNullable().references('people.id');
    table.integer('cohortId').notNullable().references('cohorts.id');
    table.timestamps(true, true);
    table.primary(['peopleId','cohortId']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people_cohorts');
};
