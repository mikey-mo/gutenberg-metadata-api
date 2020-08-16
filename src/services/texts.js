const textMetadata = require('../data/gutenberg-metadata.json');

const mapFullMetadata = () => {
    const keys = Object.keys(textMetadata);
    return keys.map((id) => {
        const text = textMetadata[id];
        return ({
            id: text.id,
            author: text.author,
            title: text.title,
        });
    });
}

const get = (id) => {
    if (id)
        return {
            id: id,
            ...textMetadata[id],
        };
    return mapFullMetadata();
};

module.exports = {
    get,
};
