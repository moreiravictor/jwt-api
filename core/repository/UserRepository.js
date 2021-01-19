const User = require("../model/User");

async function loginQuery(username, password) {
    return await User.findOne({where: {username: username, password: password}});
}

module.exports = {
    loginQuery
}