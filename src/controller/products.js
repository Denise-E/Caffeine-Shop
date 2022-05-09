const products = require('../data/products.json');
const categories = require('../data/categories.json');

module.exports = {
    categories: (req,res) => {
        let result = categories.find(element => element.id == req.params.id);
        res.render('headerLinks/categories', {
            category: result,
            products: products,
            styles: 'categories'
        })
    },
    products: (req,res) => {
        let result = products.find(element => element.id == req.params.id);
        res.render('products', {
            product: result,
            styles: 'products'
        })
    }
}
