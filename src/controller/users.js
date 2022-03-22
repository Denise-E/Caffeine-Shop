
module.exports = {
    register: (req, res) => res.render('register', {
        styles: ['register']
    }),
    login: (req, res) => res.render('login', {
        styles: ['login']
    })
}