
exports.up = function(knex) {
    return knex.schema.raw('create extension if not exists "uuid-ossp"')
        .createTable('texts', table => {
            table
                .uuid('id')
                .primary()
                .defaultTo(knex.raw('uuid_generate_v4()'));
            table.string('title');
            table.uuid('author_id').references('authors.id');
            table.string('language');
            table.boolean('public_domain');
            table.jsonb('subjects')
            table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('texts');
};
