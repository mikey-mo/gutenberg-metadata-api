const textMetadata = require('../../data/gutenberg-metadata.json');

const keys = Object.keys(textMetadata);

const first = {
    id: keys[0],
    ...textMetadata[keys[0]],
};

const second = {
    id: keys[1],
    ...textMetadata[keys[1]],
};

const validateMetadata = require('./metadata');

validateMetadata(first);
validateMetadata(second);
