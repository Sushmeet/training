
// By default, each migration is run inside a transaction.
// We will create our table schema in the UP method 
// We will delete it in the down method.

exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments('id').primary()
    table.string('username').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.timestamps(false, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
};
