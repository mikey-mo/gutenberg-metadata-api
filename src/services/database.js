const knex = require('knex');

const client = process.env.DB_TYPE || 'pg';

const connection = {
    database: process.env.DB_NAME || 'gutenberg',
    user: process.env.DB_USERNAME || 'user',
    password: process.env.DB_PASSWORD || 'password',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '5433',
};

module.exports = {
    connection,
    client,
    knex,
};
