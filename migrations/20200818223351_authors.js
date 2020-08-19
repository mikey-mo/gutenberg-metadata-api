
exports.up = function(knex) {
    return knex.schema
    .raw('create extension if not exists "uuid-ossp"')
    .createTable('authors', table => {
      table
        .uuid('id')
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('first_name');
      table.string('last_name');
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('authors');
};
