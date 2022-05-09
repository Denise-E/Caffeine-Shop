const products = require('../data/products.json');

module.exports = {
    categories: (req,res) => res.render('headerLinks/categories', {
        products: products,
        styles: 'categories'
    })
}
