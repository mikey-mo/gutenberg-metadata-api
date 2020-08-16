const textMetadata = require('../data/gutenberg-metadata.json');

const filterMetaData = ({ queries, data = textMetadata }) => {
    return data;
};

const mapFullMetadata = ({ queries }) => {
    const filteredMetaData = filterMetaData({ queries });
    if (!filteredMetaData)
        return [];
    const keys = Object.keys(filteredMetaData);
    return keys.map((id) => {
        const text = filteredMetaData[id];
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
    return mapFullMetadata({ queries });
};

module.exports = {
    get,
};
