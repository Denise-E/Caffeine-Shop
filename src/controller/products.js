const accesories = require('../data/accesories.json');
const coffee = require('../data/coffee.json');

module.exports = {
    coffee: (req, res) => res.render('headerLinks/coffee',{
        coffee: coffee,
        styles: ['headerLinks/coffee']
    }),
    accesories: (req, res) => res.render('headerLinks/accesories',{
        accesories: accesories,
        styles: ['headerLinks/accesories']
    })
}