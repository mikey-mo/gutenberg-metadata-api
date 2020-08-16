const texts = require('../../controllers/texts');

const textsRoutes = async (fastify, options) => {
    fastify.get('/texts', async (req, res) => {
        const allTexts = texts.get();
        res.status(200).send(allTexts);
    });

    fastify.get('/texts/:id', (req, res) => {
        const textById = texts.get(req.params.id);
        res.status(200).send(textById);
    })
};

module.exports = textsRoutes;