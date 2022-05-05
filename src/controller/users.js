
module.exports = {
    register: (req, res) => res.render('users/register', {
        styles: ['users/register']
    }),
    login: (req, res) => res.render('users/login', {
        styles: ['users/login']
    })
} 