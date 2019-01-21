var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ams2"
});
var ty=require('../config/passport.js');
module.exports = function (app, passport) {
  
  
  







  
  app.get('/ownerList', function (req, res) {
   
    con.query("SELECT * FROM user u,house h where u.Type='Owner' and u.user_Id=h.Owner_Id", function (err, result, fields) {
      con
      if (err) throw err;
      Object.size = function (obj) {
        var size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
      };
      var size = Object.size(result);

      res.render('ownerList.ejs', {
        owner: result,
        size: size,
        user:req.user
      });




      console.log(size);

    });
  });

  app.get('/ownerList2', function (req, res) {
    res.render('ownerList2.ejs');
  });


  app.get('/', function (req, res) {
    res.render('Home.ejs');
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
