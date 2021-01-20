import user from "../model/User.js";

async function loginQuery(username, password) {
    return await user.findOne({where: {username: username, password: password}});
}

export default {
    loginQuery
}