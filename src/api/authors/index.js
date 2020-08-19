const authors = require('../../controllers/authors');

const textsRoutes = async (fastify, options) => {
    fastify.get('/texts', (req, res) => {
        const allAuthors = authors.get({ queries: req.query });
        res.status(200).send(allAuthors);
    });

    fastify.get('/texts/:id', (req, res) => {
        const authorById = authors.get({
            id: req.params.id,
            queries: req.query,
        });
        res.status(200).send(authorById);
    });
};

module.exports = textsRoutes;