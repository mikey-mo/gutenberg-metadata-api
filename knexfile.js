// Update with your config settings.

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
        filename: './dev.sqlite3'
        },
    },
    docker: {
        client: 'postgresql',
        connection: {
        database: 'gutenberg',
        user:     'username',
        password: 'password'
        },
        pool: {
        min: 2,
        max: 10
        },
        migrations: {
        tableName: 'knex_migrations'
        },
        connection: {
            database: process.env.DB_NAME || 'gutenberg',
            user: process.env.DB_USERNAME || 'user',
            password: process.env.DB_PASSWORD || 'password',
            host: process.env.DB_HOST || 'localhost',
            port: process.env.DB_PORT || '5433',
        },
    },
    staging: {
        client: 'postgresql',
        connection: {
        database: 'gutenberg',
        user:     'username',
        password: 'password'
        },
        pool: {
        min: 2,
        max: 10
        },
        migrations: {
        tableName: 'knex_migrations'
        },
    },
    production: {
        client: 'postgresql',
        connection: {
        database: 'gutenberg',
        user:     'username',
        password: 'password'
        },
        pool: {
        min: 2,
        max: 10
        },
        migrations: {
        tableName: 'knex_migrations'
        },
    },
};
