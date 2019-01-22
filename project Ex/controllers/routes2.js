var mysql = require('mysql');
var express = require('express');
var app = express();
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var createHtml = require('create-html');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var msg="";


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

  app.post('/editFloor/:id', urlencodedParser, (function (req, res) {
    var FloorName = req.body.Floorname;
    var houses = req.body.houses;
    var idd = req.params.id;


    var sql = "UPDATE floor SET Name = ?, Houses = ? WHERE Floor_Id = ?";
    con.query(sql, [FloorName, houses, idd], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/FloorList');


      }

    });

  }));
 

  app.post('/editAdmin/:id', urlencodedParser, (function (req, res) {
    var idd = req.params.id;
    var username = req.body.username;
    var firstname = req.body.name;
    var lastname = req.body.lastname;
    var location = req.body.location;
    var phone = req.body.phone;

    var contact = req.body.contactno;
   
   


  


    var sql = "UPDATE admin SET name=?,email=?, contactNo=?,Lastname=?,Phone=?,Location=? where adminId=?";
    con.query(sql, [ firstname, username, contact, lastname, phone, location, idd], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/adview');


      }

    });

  }));


  app.post('/ChangePassword/:id', urlencodedParser, (function (req, res) {
    var idd = req.params.id;
    var newPassword = req.body.newPassword;


    var pas = bcrypt.hashSync(newPassword, null, null);





    var sql = "UPDATE admin SET password=? where adminId=?";
    con.query(sql, [pas, idd], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        msg = "PassWord Change SuccessFully";
        res.redirect('/adpro');


      }

    });

  }));















  app.get('/in',isLoggedIn, function (req, res) {
    res.render('index2.ejs', {
      user: req.user
    });
  });


  app.get('/FloorList',isLoggedIn, function (req, res) {


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
        user:req.user
      });




      console.log(size);

    });

  });

  app.get('/FloorDel/:id', (req, res) => {
    var sql = "DELETE FROM floor WHERE Floor_Id =?";
    con.query(sql, [req.params.id], function (err, result) {
      if (err) throw err;

      console.log(result.affectedRows);

      res.redirect('/FloorList');

    })
  });

  app.get('/OwnerDel/:id', (req, res) => {
    var sql = "DELETE FROM user WHERE User_Id =?";
    con.query(sql, [req.params.id], function (err, result) {
      if (err) throw err;
      var sqll = "DELETE FROM house WHERE Owner_Id =?";
      con.query(sqll, [req.params.id], function (err, result) {
        if (err) throw err;
      console.log(result.affectedRows);

      res.redirect('/ownerList');}

    )
  });})


  app.get('/addFloor',isLoggedIn, function (req, res) {
    res.render('addFloor.ejs');
  });


 
  app.get('/addOwner',isLoggedIn, function (req, res) {
    res.render('addOwner.ejs',{
      message: req.flash('signupMessage')
    });
  });
 
  app.get('/addEmp',isLoggedIn, function (req, res) {
    res.render('addEmployee.ejs');
  });
  app.get('/salaryList',isLoggedIn, function (req, res) {
    res.render('salaryList.ejs');
  });
  app.get('/salaryList2',isLoggedIn, function (req, res) {
    res.render('salaryList2.ejs');
  });
  app.get('/leaveReqList',isLoggedIn, function (req, res) {
    res.render('leaveReqList.ejs');
  });
  app.get('/OwnerUtilityList',isLoggedIn, function (req, res) {
    res.render('OwnerUtilityList.ejs');
  });
  app.get('/OwnerUtilityList2',isLoggedIn, function (req, res) {
    res.render('OwnerUtilityList2.ejs');
  });

  app.get('/addOwnerUtility',isLoggedIn, function (req, res) {
    res.render('addOwnerUtility.ejs');
  });

  app.get('/maintainCostList',isLoggedIn, function (req, res) {
    res.render('maintainCostList.ejs');
  });
  app.get('/addMaintCost',isLoggedIn, function (req, res) {
    res.render('addMaintCost.ejs');
  });
  app.get('/committeList',isLoggedIn, function (req, res) {
    res.render('committeList.ejs');
  });
  app.get('/addCommitte',isLoggedIn, function (req, res) {
    res.render('addCommitte.ejs');
  });
  app.get('/complainList',isLoggedIn, function (req, res) {
    res.render('complainList.ejs');
  });
  app.get('/visitorsList',isLoggedIn, function (req, res) {
    res.render('visitorsList.ejs');
  });
  app.get('/addVisitors',isLoggedIn, function (req, res) {
    res.render('addVisitors.ejs');
  });
  app.get('/empNotice',isLoggedIn, function (req, res) {
    res.render('empNotice.ejs');
  });
  app.get('/ownerNotice',isLoggedIn, function (req, res) {
    res.render('ownerNotice.ejs');
  });
  app.get('/adview',isLoggedIn, function (req, res) {
    res.render('AdminProView.ejs', {
      user: req.user
    });
  });
  app.get('/buildingSet',isLoggedIn, function (req, res) {
    res.render('buildingSet.ejs');
  });


  app.get('/adpro',isLoggedIn, function (req, res) {
msg="";
    res.render('adminprofile.ejs', {
      user: req.user,
      msg:msg
    })
  });


  app.get('/ChangeAdPass',isLoggedIn, function (req, res) {

    res.render('ChangeAdPass.ejs', {
      user: req.user
    })
  });










  app.get('/editCommitte',isLoggedIn, function (req, res) {
    res.render('editCommitte.ejs');
  });

  app.get('/ComReply',isLoggedIn, function (req, res) {
    res.render('ComReply.ejs');
  });

  app.get('/editEmployee',isLoggedIn, function (req, res) {
    res.render('editEmployee.ejs');
  });

  app.get('/editEmpNotice', function (req, res) {
    res.render('editEmpNotice.ejs');
  });

  app.get('/editFloor', function (req, res) {
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

      res.render('editFloor.ejs', {
        floor: result,
        size: size
      });




      console.log(size);

    });

  });
  app.get('/editFloor2', function (req, res) {
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

      res.render('editFloor2.ejs', {
        floor: result,
        size: size
      });




      console.log(size);

    });

  });
  app.get('/editFloor3',isLoggedIn, function (req, res) {
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

      res.render('editFloor3.ejs', {
        floor: result,
        size: size
      });




      console.log(size);

    });

  });
  app.get('/editFloor4',isLoggedIn, function (req, res) {
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

      res.render('editFloor4.ejs', {
        floor: result,
        size: size
      });




      console.log(size);

    });

  });
  app.get('/editFloor5',isLoggedIn, function (req, res) {
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

      res.render('editFloor5.ejs', {
        floor: result,
        size: size
      });




      console.log(size);

    });

  });
  app.get('/editFloor6',isLoggedIn, function (req, res) {
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

      res.render('editFloor6.ejs', {
        floor: result,
        size: size
      });




      console.log(size);

    });

  });
  app.get('/editFloor7',isLoggedIn, function (req, res) {
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

      res.render('editFloor7.ejs', {
        floor: result,
        size: size
      });




      console.log(size);

    });

  });
  app.get('/editFloor8',isLoggedIn, function (req, res) {
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

      res.render('editFloor8.ejs', {
        floor: result,
        size: size
      });




      console.log(size);

    });

  });

  app.get('/employeeList2',isLoggedIn, function (req, res) {
    res.render('employeeList2.ejs');
  });

  app.get('/FloorList2',isLoggedIn, function (req, res) {
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

  app.get('/editMaintCost',isLoggedIn, function (req, res) {
    res.render('editMaintCost.ejs');
  });
 
  app.get('/editOwnerNotice', function (req, res) {
    res.render('editOwnerNotice.ejs');
  });
  app.get('/editOwnerUtility', function (req, res) {
    res.render('editOwnerUtility.ejs');
  });
  app.get('/addSalary', function (req, res) {
    res.render('addSalary.ejs');
  });
  app.get('/editSalary', function (req, res) {
    res.render('editSalary.ejs');
  });
  app.get('/EditVisitors', function (req, res) {
    res.render('EditVisitors.ejs');
  });
  app.get('', function (req, res) {
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




  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();

    res.redirect('/');
  }
}