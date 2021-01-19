const Product = require('../model/Product');

async function patchQuery(product_id, model) {
    const res = await Product.update(model,  {where: {product_id: product_id}});
    return await Product.findByPk(product_id);
}

module.exports = {
    patchQuery
}