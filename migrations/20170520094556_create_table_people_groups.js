exports.up = function(knex, Promise) {
  return knex.schema.createTable('people_groups', table => {
    table.integer('peopleId').notNullable().references('people.id');
    table.integer('groupId').notNullable().references('groups.id');
    table.timestamps(true, true);
    table.primary(['peopleId','groupId']);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people_groups');
};
