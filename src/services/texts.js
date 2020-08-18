const _ = require('lodash');

const textMetadata = require('../../data/gutenberg-metadata.json');

const filterQueries = (
    {
        author,
        title,
        subject,
        language,
    },
    filteredArg,
) => {
    let filtered = _.cloneDeep(filteredArg);
    if (author)
        filtered = filtered.filter((text) => {
            const lowerCaseAuthor = text.author.map((author) => author.toLowerCase());
            return lowerCaseAuthor.indexOf(author.toLowerCase()) > -1;
        });
    if (title)
        filtered = filtered.filter((text) => {
            const lowerCaseTitle = text.title.map((title) => title.toLowerCase());
            return lowerCaseTitle.indexOf(title.toLowerCase()) > -1;
        });
    if (subject)
        filtered = filtered.filter((text) => {
            const lowerCaseSubject = text.subject.map((subject) => subject.toLowerCase());
            return lowerCaseSubject.indexOf(subject.toLowerCase()) > -1;
        });
    if (language)
        filtered = filtered.filter((text) => {
            const lowerCaseLanguage = text.language.map((language) => language.toLowerCase());
            return lowerCaseLanguage.indexOf(language.toLowerCase()) > -1;
        });
    return filtered;
};

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
    filtered = filterQueries(
        {
            author,
            title,
            subject,
            language,
        },
        filtered,
    );
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
