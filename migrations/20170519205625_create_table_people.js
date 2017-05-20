
exports.up = function(knex, Promise) {
  return knex.schema.createTable('people', table => {
    table.increments();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("email");
    table.boolean("isActive").notNullable().defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('people');
};
