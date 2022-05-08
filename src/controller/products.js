const products = require('../data/products.json');

module.exports = {
    categories: (req,res) => res.render('headerLinks/categories', {
        products: filteredP,
        styles: 'categories'
    }),
    detail: (req,res) => { 
        let product = products.find(product => product.id === req.params.id)
        //res.send(product);
        res.render('headerLinks/detail', {
            product: product,
            styles: 'detail'
        }
    )}
}
