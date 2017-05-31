exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', table => {
    table.increments('person_id');
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email");
    table.boolean("is_active").notNullable().defaultTo(true);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('person');
};
