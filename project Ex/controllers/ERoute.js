var mysql = require('mysql');
var express = require('express');
var app = express();
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var createHtml = require('create-html');
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
var user = require('./routes.js');
var msg = "";


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ams2"
});



module.exports = function (app) {

 

  app.post('/addLeaverequestE', urlencodedParser, (function (req, res) {
    var title= req.body.title;
    var des= req.body.des;
    var lFrom=req.body.LeaveFrom;
    var lTo=req.body.LeaveTo;


    var sql = "INSERT INTO employee_leave(Emp_Id,Leave_Title, Leave_From, Leave_To, Description,Remark) VALUES (?,?,?,?,?,'NotAccepted')";
    con.query(sql, [user.usee.User_Id,title,lFrom,lTo,des], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/leaveRequestE');


      }

    });

  }));

  
  app.post('/EditLeaveRequestE/:id', urlencodedParser, (function (req, res) {
   var id=req.params.id;
    var title= req.body.title;
    var des= req.body.des;
    var lFrom=req.body.LeaveFrom;
    var lTo=req.body.LeaveTo;


    var sql = "update employee_leave set Leave_Title=?,Description=?,Leave_From=?,Leave_To=? where Leave_Id=?";
    con.query(sql, [title, des, lFrom,lTo, id], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/LeaveRequestE');


      }

    });

  }));

  app.post('/addComplainE', urlencodedParser, (function (req, res) {
 


   
    var title = req.body.title;
    var date = req.body.date;
    var des = req.body.des;


    var sql = "INSERT INTO complaint (User_Id,Subject,Description,Date) VALUES (?,?,?,?)";
    con.query(sql, [user.usee.User_Id, title, des, date], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/complainListE');


      }

    });
  }));
  app.post('/editComplainE/:id', urlencodedParser, (function (req, res) {
    var id = req.params.id;
    var title = req.body.title;
    var date = req.body.date;
    var des = req.body.des;


    var sql = "update complaint set Subject=?,Description=?,Date=? where Complaint_ID=?";
    con.query(sql, [title, des, date, id], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/complainListE');


      }

    });

  }));


  app.get('/addLeaverequestE', isLoggedIn, function (req, res) {
    res.render('../Eviews/addLeaverequestE.ejs',{
      user:req.user
    });
  });
 
  app.get('/EditLeaveRequest1E', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,employee_type t,employee_leave l where t.Emtype_id=e.Emtype_id and e.Emp_Id=u.User_Id and  u.User_Id=?", [user.usee.User_Id], function (err, result, fields) {

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

      res.render('../Eviews/EditLeaveRequest1E.ejs', {
        lev: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/EditLeaveRequest2E', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,employee_type t,employee_leave l where t.Emtype_id=e.Emtype_id and e.Emp_Id=u.User_Id and  u.User_Id=?", [user.usee.User_Id], function (err, result, fields) {

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

      res.render('../Eviews/EditLeaveRequest2E.ejs', {
        lev: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });



  app.get('/addComplainE', isLoggedIn, function (req, res) {
    res.render('../Eviews/addcomplainE.ejs',{
      user:req.user
    });
  });

  


  app.get('/editComplain1E', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u, complaint c where u.User_Id=c.User_Id and u.User_Id=?", [user.usee.User_Id], function (err, result, fields) {

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

      res.render('../Eviews/editComplain1E.ejs', {
        cop: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/editComplain2E', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u, complaint c where u.User_Id=c.User_Id and u.User_Id=?", [user.usee.User_Id], function (err, result, fields) {

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

      res.render('../Eviews/editComplain2E.ejs', {
        cop: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/editComplain3E', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u, complaint c where u.User_Id=c.User_Id and u.User_Id=?", [user.usee.User_Id], function (err, result, fields) {

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

      res.render('../Eviews/editComplain3E.ejs', {
        cop: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  


  
  app.get('/delComplainE/:id', isLoggedIn, function (req, res) {

    var sql = "DELETE FROM complaint WHERE Complaint_ID =?";
    con.query(sql, [req.params.id], function (err, result) {
      if (err) throw err;

      console.log(result.affectedRows);

      res.redirect('/complainListE');

    })
  })
  




  app.get('/complainListE', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u, complaint c where u.User_Id=c.User_Id and u.User_Id=?", [user.usee.User_Id], function (err, result, fields) {

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

      res.render('../Eviews/complainListE.ejs', {
        cop: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  
 
  
  
  app.get('/committelistE', isLoggedIn, function (req, res) {

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

      res.render('../Eviews/committeListE.ejs', {
        com: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


  app.get('/commonoticeE', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM noticeboard where 	Notice_Type='Common' ", function (err, result, fields) {

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

      res.render('../Eviews/commonoticeE.ejs', {
        not: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });



  app.get('/indexE', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM employee_Job e,employee_type t where e.Emtype_Id=t.Emtype_Id and e.Emp_Id=? ",[user.usee.User_Id], function (err, row1) {
      con.query("SELECT * FROM user u, complaint c where u.User_Id=c.User_Id and u.User_Id=?", [user.usee.User_Id], function (err, result) {

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
    res.render('../Eviews/indexE.ejs', {
    emp:row1,
    cop:result,
    size:size,
    user: req.user
    });
  })
  });

})

  app.get('/FloorListE', isLoggedIn, function (req, res) {


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

      res.render('FloorListE.ejs', {
        floor: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });

  });


  app.get('/FloorList2E', isLoggedIn, function (req, res) {


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

      res.render('FloorList2E.ejs', {
        floor: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });

  });

  
  
  app.get('/empnoticeE', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM noticeboard where 	Notice_Type='ForEmployee' ", function (err, result, fields) {

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

      res.render('../Eviews/empnoticeE.ejs', {
        not: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


 
  app.get('/employeeListE', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u,employee_job e ,salary s,employee_type t where u.Type_Id='TY003' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id and e.Emtype_Id=t.Emtype_Id", function (err, result, fields) {
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

      res.render('../Eviews/employeeListE.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/employeeList2E', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u,employee_job e ,salary s,employee_type t where u.Type_Id='TY003' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id and e.Emtype_Id=t.Emtype_Id", function (err, result, fields) {
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

      res.render('../Eviews/employeeList2E.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });



  app.get('/empprofileE', isLoggedIn, function (req, res) {
    res.render('../Eviews/empprofileE.ejs', {
      user: req.user
    });
  });




  app.get('/empproviewE', isLoggedIn, function (req, res) {
    res.render('empproviewE.ejs', {
      user: req.user
    });
  });



  app.get('/leaveRequestE', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u,employee_job e ,employee_type t,employee_leave l where t.Emtype_id=e.Emtype_id and e.Emp_Id=u.User_Id and  u.User_Id=?", [user.usee.User_Id], function (err, result, fields) {

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

      res.render('../Eviews/leaveRequestE.ejs', {
        lev: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

 

  app.get('/visitorsListE', isLoggedIn, function (req, res) {
    res.render('visitorsListE.ejs');
  });



  


  app.get('/ChangeAdPass', isLoggedIn, function (req, res) {

    res.render('ChangeAdPass.ejs', {
      user: req.user
    })
  });


  app.get('/ownerListE', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u,house h,user_type t where u.Type_Id='TY002' and u.user_Id=h.Owner_Id and u.Type_Id=t.Type_Id", function (err, result, fields) {
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

      res.render('../Eviews/ownerListE.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


  app.get('/ownerList2E', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u,house h,user_type t where u.Type_Id='TY002' and u.user_Id=h.Owner_Id and u.Type_Id=t.Type_Id", function (err, result, fields) {
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

      res.render('../Eviews/ownerList2E.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


  app.get('/salaryListE', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u,employee_job e ,salary s,employee_type t where u.Type_Id='TY003' and u.User_Id=e.Emp_Id and e.Emp_Id=s.Emp_Id and t.Emtype_Id=e.Emtype_Id and u.User_Id=?",[user.usee.User_Id], function (err, result, fields) {
      
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

      res.render('../Eviews/salaryListE.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




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