const UserRepository = require('../repository/UserRepository');

async function loginUSer(username, password) {
    return await UserRepository.loginQuery(username, password);
} 

module.exports = {
    loginUSer
}