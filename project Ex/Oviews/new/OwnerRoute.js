var mysql = require('mysql');
var express = require('express');
var app = express();
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var createHtml = require('create-html');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var msg = "";


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ams2"
});



module.exports = function (app) {


  app.post('/addFloor', urlencodedParser, (function (req, res) {
    var FloorName = req.body.Floorname;
    var houses = req.body.houses;


    var sql = "INSERT INTO floor (Name, Houses) VALUES (?,?)";
    con.query(sql, [FloorName, houses], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/FloorList');


      }

    });

  }));




  













  app.get('/in', isLoggedIn, function (req, res) {
    res.render('index2.ejs', {
      user: req.user
    });
  });

  app.get('/delComplain/:id', isLoggedIn, function (req, res) {

    var sql = "DELETE FROM owner_utility WHERE Cost_Id =?";
    con.query(sql, [req.params.id], function (err, result) {
      if (err) throw err;

      console.log(result.affectedRows);

      res.redirect('/OwnerUtilityList');

    })
  })

  app.get('/FloorList', isLoggedIn, function (req, res) {


    con.query("SELECT * FROM floor", function (err, result, fields) {
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

      res.render('FloorList.ejs', {
        floor: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });

  });



  



  app.get('/addFloor', isLoggedIn, function (req, res) {
    res.render('addFloor.ejs');
  });



  app.get('/addOwner', isLoggedIn, function (req, res) {
    res.render('addOwner.ejs', {
      message: req.flash('signupMessage')
    });
  });

  app.get('/addEmp', isLoggedIn, function (req, res) {
    res.render('addEmployee.ejs', {
      user: req.user,
      message: req.flash('signupMessage')
    });
  });
  app.get('/salaryList', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u,employee_job e ,salary s,employee_type t where u.Type_Id='TY003' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id and t.Emtype_Id=e.Emtype_Id", function (err, result, fields) {
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

      res.render('salaryList.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/salaryList2', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u,employee_job e ,salary s,employee_type t where u.Type_Id='TY003' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id and t.Emtype_Id=e.Emtype_Id", function (err, result, fields) {
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

      res.render('salaryList2.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/leaveReqList', isLoggedIn, function (req, res) {
    res.render('leaveReqList.ejs');
  });


  app.get('/OwnerUtilityList', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u,owner_utility o,house h where u.Type_Id='TY002' and u.User_Id=o.Owner_Id and u.User_Id=h.Owner_Id", function (err, result, fields) {

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

      res.render('OwnerUtilityList.ejs', {
        cost: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/OwnerUtilityList2', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u,owner_utility o,house h where u.Type_Id='TY002' and u.User_Id=o.Owner_Id and u.User_Id=h.Owner_Id", function (err, result, fields) {

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

      res.render('OwnerUtilityList2.ejs', {
        cost: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


 












 

 



  app.get('/addMaintCost', isLoggedIn, function (req, res) {
    res.render('addMaintCost.ejs', {
      user: req.user
    });

  });

  
  
 




  app.get('/committeList', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u, committee c,committee_type t where u.User_Id=c.Member_Id and c.CType_Id=t.CType_ID order by u.User_Id DESC", function (err, result, fields) {

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

      res.render('committeList.ejs', {
        com: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/addCommitte', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user", function (err, result, fields) {

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

      res.render('addCommitte.ejs', {
        com: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/complainList', isLoggedIn, function (req, res) {
    res.render('complainList.ejs');
  });
  app.get('/visitorsList', isLoggedIn, function (req, res) {
    res.render('visitorsList.ejs');
  });
  app.get('/addVisitors', isLoggedIn, function (req, res) {
    res.render('addVisitors.ejs');
  });
  app.get('/empNotice', isLoggedIn, function (req, res) {
    res.render('empNotice.ejs');
  });
  app.get('/ownerNotice', isLoggedIn, function (req, res) {
    res.render('ownerNotice.ejs');
  });
  app.get('/adview', isLoggedIn, function (req, res) {
    res.render('AdminProView.ejs', {
      user: req.user
    });
  });
  app.get('/buildingSet', isLoggedIn, function (req, res) {
    res.render('buildingSet.ejs');
  });


  app.get('/adpro', isLoggedIn, function (req, res) {
    msg = "";
    res.render('adminprofile.ejs', {
      user: req.user,
      msg: msg
    })
  });


  app.get('/ChangeAdPass', isLoggedIn, function (req, res) {

    res.render('ChangeAdPass.ejs', {
      user: req.user
    })
  });










  




  app.get('/ComReply', isLoggedIn, function (req, res) {
    res.render('ComReply.ejs');
  });



  

 



  app.get('/FloorList2', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM floor", function (err, result, fields) {
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

      res.render('FloorList2.ejs', {
        floor: result,
        size: size
      });



      console.log(result[0].floorName);
      console.log(size);

    });

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






  app.get('', function (req, res) {
    res.render('.ejs');
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/');
  }
}