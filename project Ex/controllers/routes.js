var mysql = require('mysql');
var passport = require('passport');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ams2"
});
var ty=require('../config/passport.js');
module.exports = function (app, passport) {
  
  
  







  



  app.get('/', function (req, res) {
    res.render('index2.ejs');
  });

  app.get('/feature', function (req, res) {
    res.render('feature.ejs');
  });
  app.get('/about', function (req, res) {
    res.render('about.ejs');
  });

  app.get('/page', function (req, res) {
    res.render('page.ejs');
  });
  app.get('/blog', function (req, res) {
    res.render('blog.ejs');
  });
  app.get('/contact', function (req, res) {
    res.render('contact.ejs');
  });


  app.get('/signup', function (req, res) {
    res.render('register.ejs', {
      message: req.flash('signupMessage')
    });
  });

  app.get('/login', function (req, res) {
    res.render('login.ejs', {
      message: req.flash('loginMessage')
    });
  });

  // app.get('/profile',isLoggedIn, function (req, res) {
   
  //       res.render('index.ejs', {
  //         user: req.user
  //       });
  //     } );


  app.get('/profile',isLoggedIn,function (req, res) {
     console.log(ty.type);
      if(ty.type=='Admin'){
          res.render('index.ejs', {
            user: req.user
          });}
          else if(ty.type=='Owner'){
            res.render('feature.ejs', {
              user: req.user
            });
          }
          else{
            res.render('contact.ejs', {
              user: req.user
            });
          }
          

        }

    

  );

  app.post('/login',  passport.authenticate('local-login',{
   
   
   
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true,

   
  } ));

  app.get('/logout', function (req, res) {

    req.session.destroy();
    res.redirect('/');

    // Redirect to root

  });


  
 

       

  //post functions
  






  app.post('/signupO', passport.authenticate('local-signup', {
    successRedirect: '/ownerList',
    failureRedirect: '/addOwner',
    failureFlash: true
  }
  )
 );

// //  app.post('/signup', passport.authenticate('local-signup',{
// //   successRedirect: '/profile',
// //   failureRedirect: '/',
// //   failureFlash: true

// // }
// )
// );

 



















//outer functions
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');}


}
