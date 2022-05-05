const express = require('express');
const session = require('express-session');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () =>
  console.log(
    `Server corriendo en puerto http://localhost:${app.get('port')}`)
  ) ;
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));


app.use(express.static(path.resolve(__dirname, "../public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new googleStrategy.Strategy({
  // En la realidad se lo deberia hashear
  clientID: '458413498169-ggecrifndn0c3cp07a42vf061edaujos.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/auth/google/callback'
},(accessToken, refreshToken, profile, done) => {
  console.log(profile); //Me muestra en consola todos los datos al logearme
  done(null, profile);
}));

passport.serializeUser(function(user, cb){
  cb(null, user);
});
passport.deserializeUser(function(obj, cb){
  cb(null, obj);
})

app.use(require('./routes/main'));
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/auth', require('./routes/auth'));