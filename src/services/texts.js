const textMetadata = require('../data/gutenberg-metadata.json');

const filterMetaData = ({
    data = textMetadata,
    queries: {
        author,
        title,
        subject,
        language,
    },
}) => {
    let filtered = Object.keys(data).map((id) => ({
        id: id,
        ...data[id],
    }));
    // TODO: figure a way to filtere this in one go
    if (author)
        filtered = filtered.filter((text) => (text.author.indexOf(author) > -1));
    if (title)
        filtered = filtered.filter((text) => (text.title.indexOf(title) > -1));
    if (subject)
        filtered = filtered.filter((text) => (text.subject.indexOf(subject) > -1));
    if (language)
        filtered = filtered.filter((text) => (text.language.indexOf(language) > -1));
    return {
        amount: filtered.length,
        queries: {
            author: author ? author : null,
            title: title ? title : null,
            subject: subject ? subject : null,
            language: language ? language : null,
        },
        data: filtered,
    };
};

const mapFullMetadata = ({ queries }) => {
    if (!Object.keys(queries).length)
        return Object.keys(textMetadata).map((id) => {
            const text = textMetadata[id];
            return ({
                id: text.id,
                author: text.author,
                title: text.title,
            });
        });
    return filterMetaData({ queries });
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
