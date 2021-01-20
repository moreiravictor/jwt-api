import repository from '../repository/ProductRepository.js';
import product from '../model/Product.js';

async function update(product_id, model) {
    const current = await product.findByPk(product_id);
    if (current) 
        return await repository.patchQuery(product_id, model);
        
    return null;
} 
async function find(product_id) {
    return await product.findByPk(product_id);
}
async function create(model) {
    return await product.create(model)
}
async function findAll() {
    return await product.findAll();
}

export default {
    update,
    find,
    create,
    findAll
}