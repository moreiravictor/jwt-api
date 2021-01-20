import repository from '../repository/UserRepository.js';

async function loginUSer(username, password) {
    return await repository.loginQuery(username, password);
} 

export default {
    loginUSer
}