
module.exports = {
    register: (req, res) => res.render('register', {
        style: ['register']
    }),
    login: (req, res) => res.render('login', {
        style: ['login']
    })
}