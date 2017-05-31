exports.up = function(knex, Promise) {
  return knex.schema.createTable('group_member', table => {
    table.integer('people_id').notNullable().references('person.person_id');
    table.integer('group_id').notNullable().references('group.group_id');
    table.timestamps(true, true);
    table.primary(['people_id','group_id']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('group_member');
};
