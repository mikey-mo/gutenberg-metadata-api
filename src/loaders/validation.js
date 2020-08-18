const validations = require('../validations');
const textMetadata = require('../../data/gutenberg-metadata.json');

const metadataList = Object.keys(textMetadata).map((id) => ({
    id,
    ...textMetadata[id],
}));

(async () => {
    const invalid = [];

    await Promise.all(metadataList.map(async (text) => {
        const valid = await validations.metadata(text);
        if (!valid)
            invalid.push(text.id);
    }));

    if (invalid.length) {
        console.log('\Invalid Metadata');
        invalid.forEach(id => console.log(id));
    } else {
        console.log('\nAll Pass');
    }
})();
