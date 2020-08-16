const textMetadata = require('../data/gutenberg-metadata.json');

const get = (id) => {
    if (id)
        return textMetadata[id];
    return textMetadata;
};

module.exports = {
    get,
};
