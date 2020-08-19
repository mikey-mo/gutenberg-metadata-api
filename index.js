const { server, database } = require('./src/loaders');

(async () => {
    try {
        await server.listen();
        await database.init();
    } catch (error) {
        console.log('error starting services:', error);
    }
})();
