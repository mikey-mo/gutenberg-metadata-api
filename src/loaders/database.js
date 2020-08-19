const database = require('../services/database');

const init = () => {
    console.log('\n', String.fromCodePoint(0x1F4D3), 'connecting to database type:', database.client.toUpperCase(), '...\n');
    return database.knex({
        client: database.client,
        connection: database.connection,
    });
};

module.exports = {
    init,
};
