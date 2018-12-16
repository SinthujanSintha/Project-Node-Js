module.exports = function (app, passport) {

  //get functions  
  app.get('/', function (req, res) {
    res.render('index2.ejs');
  });
  app.get('/in', function (req, res) {
    res.redirect('/profile');
  });
  app.get('/FloorList', function (req, res) {
    res.render('FloorList.ejs');
  });
  app.get('/addFloor', function (req, res) {
    res.render('addFloor.ejs');
  });
  app.get('/ownerList', function (req, res) {
    res.render('ownerList.ejs');
  });
  app.get('/addOwner', function (req, res) {
    res.render('addOwner.ejs');
  });
  app.get('/employeeList', function (req, res) {
    res.render('employeeList.ejs');
  });
  app.get('/addEmp', function (req, res) {
    res.render('addEmployee.ejs');
  });
  app.get('/salaryList', function (req, res) {
    res.render('salaryList.ejs');
  });
  app.get('/leaveReqList', function (req, res) {
    res.render('leaveReqList.ejs');
  });
  app.get('/OwnerUtilityList', function (req, res) {
    res.render('OwnerUtilityList.ejs');
  });
  app.get('/addOwnerUtility', function (req, res) {
    res.render('addOwnerUtility.ejs');
  });

  app.get('/maintainCostList', function (req, res) {
    res.render('maintainCostList.ejs');
  });
  app.get('/addMaintCost', function (req, res) {
    res.render('addMaintCost.ejs');
  });
  app.get('/committeList', function (req, res) {
    res.render('committeList.ejs');
  });
  app.get('/addCommitte', function (req, res) {
    res.render('addCommitte.ejs');
  });
  app.get('/complainList', function (req, res) {
    res.render('complainList.ejs');
  });
  app.get('/visitorsList', function (req, res) {
    res.render('visitorsList.ejs');
  });
  app.get('/addVisitors', function (req, res) {
    res.render('addVisitors.ejs');
  });
  app.get('/empNotice', function (req, res) {
    res.render('empNotice.ejs');
  });
  app.get('/ownerNotice', function (req, res) {
    res.render('ownerNotice.ejs');
  });
  app.get('/adview', function (req, res) {
    res.render('AdminProView.ejs');
  });
  app.get('/buildingSet', function (req, res) {
    res.render('buildingSet.ejs');
  });


  app.get('/adpro', function (req, res) {
    res.render('adminprofile.ejs');
  });

  app.get('/editCommitte', function (req, res) {
    res.render('editCommitte.ejs');
  });

  app.get('/ComReply', function (req, res) {
    res.render('ComReply.ejs');
  });

 app.get('/editEmployee', function (req, res) {
    res.render('editEmployee.ejs');
  });

  app.get('/editEmpNotice', function (req, res) {
    res.render('editEmpNotice.ejs');
  });

 app.get('/editFloor', function (req, res) {
    res.render('editFloor.ejs');
  });

  app.get('/employeeList2', function (req, res) {
    res.render('employeeList2.ejs');
  });

  app.get('/FloorList2', function (req, res) {
    res.render('FloorList2.ejs');
  });

  app.get('/', function (req, res) {
    res.render('.ejs');
  });
  app.get('/', function (req, res) {
    res.render('.ejs');
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

  app.get('/profile', isLoggedIn, function (req, res) {
    res.render('index.ejs', {
      user: req.user
    });

  });

  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
  })


  //post functions
  app.post('/login', passport.authenticate('local-login', {
      successRedirect: '/profile',
      failureRedirect: '/login',
      failureFlash: true
    }),
    function (req, res) {
      if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
      } else {
        req.session.cookie.expires = false;
        res.redirect('/');
      }

    });

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
  }));





















};
//outer functions
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.render('index.ejs');
  }
}