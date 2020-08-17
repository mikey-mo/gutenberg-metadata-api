const Joi = require('@hapi/joi');

const schemas = require('../schemas');

const validateMetadata = async (metadata) => {
    try {
        await schemas.metadata.validateAsync(metadata);
        console.log('\nmetadata', metadata.id, 'passes validation');
    } catch (error) {
        console.log('error yo', error);
    }
};

module.exports = validateMetadata;
