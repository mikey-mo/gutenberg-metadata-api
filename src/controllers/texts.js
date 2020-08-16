const texts = require('../services/texts');

const get = id => {
    if (id)
        return texts.get(id);
    return texts.get();
};

module.exports = {
    get,
};
