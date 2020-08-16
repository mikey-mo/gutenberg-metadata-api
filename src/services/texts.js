const textMetadata = require('../data/gutenberg-metadata.json');

const mapFullMetadata = ({ data, queries }) => {
    const keys = Object.keys(data);
    return keys.map((id) => {
        const text = data[id];
        return ({
            id: text.id,
            author: text.author,
            title: text.title,
        });
    });
};

const get = ({ id, queries }) => {
    if (id)
        return {
            id: id,
            ...textMetadata[id],
        };
    return mapFullMetadata({ data: textMetadata, queries });
};

module.exports = {
    get,
};
