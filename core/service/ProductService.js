const repository = require('../repository/ProductRepository');
const Product = require('../model/Product');

async function update(product_id, model) {
    const product = await Product.findByPk(product_id);
    if (product) 
        return await repository.patchQuery(product_id, model);
        
    return null;
} 
async function find(product_id) {
    return await Product.findByPk(product_id);
}
async function create(product) {
    return await Product.create(product)
}
async function findAll() {
    return await Product.findAll();
}

module.exports = {
    update,
    find,
    create,
    findAll
}