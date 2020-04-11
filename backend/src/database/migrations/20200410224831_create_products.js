
exports.up = function(knex) {
    return knex.schema.createTable('products', function (table) {
        table.increments()

        table.string('Productor').notNullable()
        table.string('wine').notNullable()
        table.string('harvest').notNullable()
        table.string('type').notNullable()
        table.string('obs').notNullable()

        table.string('user_id').notNullable()

        table.foreign('user_id').references('id').inTable('users')
    })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('products')
};
