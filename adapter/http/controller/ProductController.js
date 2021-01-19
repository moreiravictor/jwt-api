const service = require("../../../core/service/ProductService");

module.exports = {
    async post(req, res) {
        const product = req.body;
        const created_user = await service.create(product);
        return res.json(created_user);
    },
    async get(req, res) {
        const {product_id} = req.params;
        const product = await service.find(product_id);
        return (product) ? res.json(product) : res.status(404).end();
    },
    async patch(req, res) {
        const {product_id} = req.params;
        const model = req.body;
        const product = await service.update(product_id, model);
        return (product) ? res.json(product) : res.status(404).end();
    }, 
    async getAll(req, res) {
        const products = await service.findAll();
        return await res.json(products);
    }
}