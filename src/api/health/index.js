const textsRoutes = async (fastify, options) => {
    fastify.get('/', async (req, res) => {
        res.status(200).send('API Up and Running');
    });
};

module.exports = textsRoutes;