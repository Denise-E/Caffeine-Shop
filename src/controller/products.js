
module.exports = {
    coffee: (req, res) => res.render('headerLinks/coffee',{
        styles: ['headerLinks/coffee']
    }),
    accesories: (req, res) => res.render('headerLinks/accesories',{
        styles: ['headerLinks/accesories']
    })
}