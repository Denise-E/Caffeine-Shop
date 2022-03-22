
module.exports = {
    coffee: (req, res) => res.render('coffee',{
        styles: [coffee]
    }),
    accesories: (req, res) => res.render('accesories',{
        styles: [accesories]
    })
}