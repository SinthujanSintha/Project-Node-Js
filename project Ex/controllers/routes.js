module.exports = function (app, passport) {

  //get functions  
 







  



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

  app.get('/profile', function (req, res) {
      if (req.session.user) {
        res.render('index.ejs', {
          user: req.user
        });
      } else {
        res.redirect('/');

      }


    }

  );


  app.get('/logout', function (req, res) {

    req.session.destroy();
    res.redirect('/');

    // Redirect to root

  });

  //post functions
  app.post('/login', passport.authenticate('local-login', {
      successRedirect: '/profile',
      failureRedirect: '/login',
      failureFlash: true
    }),
    function (req, res) {
      if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 8;
      } else {
        req.session.cookie.expires = false;
        res.redirect('/');
      }

    });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/',
    failureFlash: true
  
  }
  )
 );


 


















};
//outer functions
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  res.redirect('/');
}