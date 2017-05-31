exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohort_member', table => {
    table.integer('person_id').notNullable().references('person.person_id');
    table.integer('cohort_id').notNullable().references('cohort.cohort_id');
    table.timestamps(true, true);
    table.primary(['person_id','cohort_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cohort_member');
};
