const texts = require('../../controllers/texts');

const textsRoutes = async (fastify, options) => {
    fastify.get('/texts', (req, res) => {
        const allTexts = texts.get({ queries: req.query });
        res.status(200).send(allTexts);
    });

    fastify.get('/texts/:id', (req, res) => {
        const textById = texts.get({
            id: req.params.id,
            queries: req.query,
        });
        res.status(200).send(textById);
    })
};

module.exports = textsRoutes;