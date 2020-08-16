const texts = require('../services/texts');

const get = (data) => texts.get(data);

module.exports = {
    get,
};
