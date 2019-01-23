var mysql = require('mysql');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ams2"
});
var ty = require('../config/passport.js');
module.exports = function (app, passport) {

//GetFunction
  app.get('/employeeList', isLoggedIn, function (req, res){

    con.query("SELECT * FROM user u,employee_job e ,salary s where u.Type='Employee' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id", function (err, result, fields) {
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

      res.render('employeeList.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/employeeList2', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,salary s where u.Type='Employee' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id", function (err, result, fields) {
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

      res.render('employeeList2.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/delEmployee/:id', function (req, res) {
    var idd = req.params.id;
    
   
      

         






          var deleteQuery = "delete from user  where User_Id=?";

          con.query(deleteQuery, [idd
            ],
            function (err) {
              if (err)
                console.log(err);

            
            })




             


                  var deleteSalary = "delete  from salary  where Emp_Id=? ";
                  con.query(deleteSalary, [idd],
                    function (err, row) {
                      if (err)
                        console.log(err);
                    })



                  var deleteJob = "delete from  employee_job where Emp_Id=?";

                  con.query(deleteJob, [ idd],
                    function (err) {
                      if (err)
                        console.log(err);
                      res.redirect('/employeeList');
                    });

               

          


          })


  app.get('/editEmployee',isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,salary s where u.Type='Employee' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id", function (err, result, fields) {
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

      res.render('editEmployee.ejs', {
        emp: result,
        size: size,
        user: req.user,
        message: req.flash('signupMessage')

      });




      console.log(size);

    });
  });
  app.get('/editEmployee2',isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,salary s where u.Type='Employee' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id", function (err, result, fields) {
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

      res.render('editEmployee2.ejs', {
        emp: result,
        size: size,
        user: req.user,
        message: req.flash('signupMessage')

      });




      console.log(size);

    });
  });
  app.get('/editEmployee3',isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,salary s where u.Type='Employee' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id", function (err, result, fields) {
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

      res.render('editEmployee3.ejs', {
        emp: result,
        size: size,
        user: req.user,
        message: req.flash('signupMessage')

      });




      console.log(size);

    });
  });
  app.get('/editEmployee4',isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,salary s where u.Type='Employee' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id", function (err, result, fields) {
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

      res.render('editEmployee4.ejs', {
        emp: result,
        size: size,
        user: req.user,
        message: req.flash('signupMessage')

      });




      console.log(size);

    });
  });

  app.get('/editEmployee5',isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,salary s where u.Type='Employee' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id", function (err, result, fields) {
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

      res.render('editEmployee5.ejs', {
        emp: result,
        size: size,
        user: req.user,
        message: req.flash('signupMessage')

      });




      console.log(size);

    });
  });
  app.get('/editEmployee6',isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,salary s where u.Type='Employee' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id", function (err, result, fields) {
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

      res.render('editEmployee6.ejs', {
        emp: result,
        size: size,
        user: req.user,
        message: req.flash('signupMessage')

      });




      console.log(size);

    });
  });






  app.get('/ownerList', isLoggedIn, function (req, res) {

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
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/OwnerDel/:id',isLoggedIn, (req, res) => {
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
  app.get('/EditOwner1', isLoggedIn, function (req, res) {

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

      res.render('EditOwner.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/EditOwner2', isLoggedIn, function (req, res) {

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

      res.render('EditOwner2.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/EditOwner3', isLoggedIn, function (req, res) {

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

      res.render('EditOwner3.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/EditOwner4', isLoggedIn, function (req, res) {

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

      res.render('EditOwner4.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/EditOwner5', isLoggedIn, function (req, res) {

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

      res.render('EditOwner5.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/EditOwner6', isLoggedIn, function (req, res) {

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

      res.render('EditOwner6.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


  app.get('/ownerList2', isLoggedIn, function (req, res) {
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

      res.render('ownerList2.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


  app.get('/', function (req, res) {
    res.render('Home.ejs');
  });

  app.get('/signup', isLoggedIn, function (req, res) {
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
    console.log(ty.type);
    if (ty.type == 'Admin') {
      res.render('index.ejs', {
        user: req.user
      });
    } else if (ty.type == 'Owner') {
      res.render('feature.ejs', {
        user: req.user
      });
    } else {
      res.render('contact.ejs', {
        user: req.user
      });
    }


  } );

  app.get('/logout', function (req, res) {

    req.session.destroy();
    res.redirect('/');

   

  });
 
 //Post functions
 

 
  app.post('/login', passport.authenticate('local-login', {



      successRedirect: '/profile',
      failureRedirect: '/login',
      failureFlash: true,
}), function (req, res) {
   if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
      } else {
        req.session.cookie.expires = false;
      }
      res.redirect('/');
    });




  app.post('/editOwner/:id', urlencodedParser, (function (req, res) {
    var idd = req.params.id;
    var firstName = req.body.FirstName;
    var lastName = req.body.LastName;
    var emailId = req.body.username;
    var password = bcrypt.hashSync(req.body.password, null, null);
    var contact = req.body.Contact;
    var phone = req.body.Phone;
    var housename = req.body.HouseName;
    var Address = req.body.Address;


    var sql = "update user set PassWord=?,First_Name=?,Email_Id=?, Contact_Number=?,Last_Name=?,Phone=?,Address=? where User_Id=?";
    con.query(sql, [password, firstName, emailId, contact, lastName, phone, Address, idd], function (err, result) {
      if (err) throw err;
      var sql = "update house set House_Name=? where Owner_Id=?";
      con.query(sql, [housename, idd], function (err, result) {
        if (err) throw err;
      })
      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/ownerList');


      }

    });

  }));

  app.post('/addOwner', function (req, res) {
    var username = req.body.username;
    con.query("SELECT Email_Id FROM user WHERE Email_Id = ? ",
      [username],
      function (err, rows, ) {
        if (err)
          return (err);
        if (rows.length) {
          res.send('signupMessage', 'This user is already taken');
        } else {

          var newUserMysql = {

            username: req.body.username,
            firstname: req.body.FirstName,
            lastname: req.body.LastName,
            location: req.body.Address,
            phone: req.body.Phone,
            type: req.body.Type,
            des: req.body.des,
            contact: req.body.Contact,
            HouseNo: req.body.HouseName,
            conpassword: req.body.password2,
            password: bcrypt.hashSync(req.body.password, null, null)

          };






          var insertQuery = "INSERT INTO user (First_Name, Last_Name, Contact_Number, Email_ID, PassWord, Phone,Address,Type) values (?,?,?,?,?,?,?,?)";

          con.query(insertQuery, [newUserMysql.firstname,
              newUserMysql.lastname, newUserMysql.contact, newUserMysql.username, newUserMysql.password, newUserMysql.phone, newUserMysql.location, newUserMysql.type
            ],
            function (err, rows) {
              if (err)
                console.log(err);

              console.log(rows.insertId);
              newUserMysql.id = rows.insertId;



            });

          var selectuser = "select * from user where Email_Id =?";

          con.query(selectuser, [newUserMysql.username],
            function (err, rows) {
              if (err)
                console.log(err);

              var insertHouse = "INSERT INTO house (Owner_Id,House_Name) values (?,?)";

              con.query(insertHouse, [rows[0].User_Id, newUserMysql.HouseNo],
                function (err, rows) {
                  if (err)
                    console.log(err);
                  res.redirect('/Ownerlist');
                });

            });
        }


      }
    );
  })

  app.post('/addEmployee', function (req, res) {
    var username = req.body.username;
    con.query("SELECT Email_Id FROM user WHERE Email_Id = ? ",
      [username],
      function (err, rows, ) {
        if (err)
          return (err);
        if (rows.length) {

          res.send('signupMessage', 'This user is already taken');
        } else {

          var newUserMysql = {

            username: req.body.username,
            firstname: req.body.FirstName,
            lastname: req.body.LastName,
            location: req.body.Address,
            phone: req.body.Phone,
            type: req.body.Type,
            sal: req.body.salary,
            contact: req.body.Contact,
            job: req.body.job,
            conpassword: req.body.password2,
            password: bcrypt.hashSync(req.body.password, null, null)

          };






          var insertQuery = "INSERT INTO user (First_Name, Last_Name, Contact_Number, Email_ID, PassWord, Phone,Address,Type) values (?,?,?,?,?,?,?,?)";

          con.query(insertQuery, [newUserMysql.firstname,
              newUserMysql.lastname, newUserMysql.contact, newUserMysql.username, newUserMysql.password, newUserMysql.phone, newUserMysql.location, newUserMysql.type
            ],
            function (err) {
              if (err)
                console.log(err);

              console.log(rows.insertId);






              var selectuser = "select * from user  where Email_Id =?";

              con.query(selectuser, [newUserMysql.username],
                function (err, rowss) {
                  if (err)
                    console.log(err);


                  var insertSalary = "INSERT INTO salary (Emp_Id,Amount) values (?,?) ";
                  con.query(insertSalary, [rowss[0].User_Id, newUserMysql.sal],
                    function (err, row) {
                      if (err)
                        console.log(err);
                    })



                  var insertJob = "INSERT INTO employee_job (Emp_Id,Job) values (?,?)";

                  con.query(insertJob, [rowss[0].User_Id, newUserMysql.job],
                    function (err, rowss) {
                      if (err)
                        console.log(err);
                      res.redirect('/employeeList');
                    });

                });

            });










        }
      }
    )
  })

  app.post('/editEmployee/:id', function (req, res) {
    var idd = req.params.id;
    
   
      

          var newUserMysql = {

            username: req.body.username,
            firstname: req.body.FirstName,
            lastname: req.body.LastName,
            location: req.body.Address,
            phone: req.body.Phone,
            type: req.body.Type,
            sal: req.body.salary,
            contact: req.body.Contact,
            job: req.body.job,
            conpassword: req.body.password2,
            password: bcrypt.hashSync(req.body.password, null, null)

          };






          var updateQuery = "update user set First_Name=?, Last_Name=?, Contact_Number=?, Email_ID=?, PassWord=?, Phone=?,Address=?,Type=? where User_Id=?";

          con.query(updateQuery, [newUserMysql.firstname,
              newUserMysql.lastname, newUserMysql.contact, newUserMysql.username, newUserMysql.password, newUserMysql.phone, newUserMysql.location, newUserMysql.type,idd
            ],
            function (err) {
              if (err)
                console.log(err);

            
            })




             


                  var updateSalary = "update salary set Amount=? where Emp_Id=? ";
                  con.query(updateSalary, [newUserMysql.sal,idd],
                    function (err, row) {
                      if (err)
                        console.log(err);
                    })



                  var updateJob = "update employee_job set Job=? where Emp_Id=?";

                  con.query(updateJob, [ newUserMysql.job,idd],
                    function (err) {
                      if (err)
                        console.log(err);
                      res.redirect('/employeeList');
                    });

               

          


          })







  


  app.post('/signupO', passport.authenticate('local-signup', {
    successRedirect: '/ownerList',
    failureRedirect: '/addOwner',
    failureFlash: true
  }));





  





















  // //  app.post('/signup', passport.authenticate('local-signup',{
  // //   successRedirect: '/profile',
  // //   failureRedirect: '/',
  // //   failureFlash: true

  // // }
  // )
  // );





















  //outer functions
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect('/');
  }


}