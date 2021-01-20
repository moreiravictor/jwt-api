import product from '../model/Product.js';

async function patchQuery(product_id, model) {
    const res = await product.update(model,  {where: {product_id: product_id}});
    return await product.findByPk(product_id);
}

export default {
    patchQuery
}