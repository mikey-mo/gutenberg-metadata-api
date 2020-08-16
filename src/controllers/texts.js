const texts = require('../services/texts');

const get = data => {
    if (data.id)
        return texts.get(data.id);
    return texts.get();
};

module.exports = {
    get,
};
