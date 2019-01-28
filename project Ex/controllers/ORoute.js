var mysql = require('mysql');


var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var user=require('./routes.js');
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


  app.post('/addComplainO', urlencodedParser, (function (req, res) {
  
  var title=req.body.title;
  var date=req.body.date;
  var des=req.body.des;


    var sql = "INSERT INTO complaint (User_Id,Subject,Description,Date) VALUES (?,?,?,?)";
    con.query(sql, [user.us.User_Id,title,des,date], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/complainListO');


      }

    });

  }));


  app.post('/editComplainO/:id', urlencodedParser, (function (req, res) {
  var id=req.params.id;
    var title=req.body.title;
    var date=req.body.date;
    var des=req.body.des;
  
  
      var sql = "update complaint set Subject=?,Description=?,Date=? where Complaint_ID=?";
      con.query(sql, [title,des,date,id], function (err, result) {
        if (err) throw err;
  
        console.log("Number of records inserted: " + result.affectedRows);
        if (result.affectedRows == 1) {
          res.redirect('/complainListO');
  
  
        }
  
      });
  
    }));
  

  
 
  app.get('/addComplainO', isLoggedIn, function (req, res) {
    res.render('../Oviews/addComplainO.ejs', {
      user: req.user
    });
  });











  app.get('/index', isLoggedIn, function (req, res) {

    con.query("SELECT COUNT(*) as total FROM floor ", function (err, row) {
      con.query("SELECT sum(Total_Amount) as total  FROM owner_utility where Owner_Id=? ",[user.us.User_Id], function (err, row2) {
        con.query("SELECT COUNT(*) as total FROM  user where Type_Id=' ' ", function (err, row) {

      res.render('../Oviews/indexO.ejs', {
    floor: row,
    utility:row2,
    user: req.user
        
      });

    })
  })

    });
  
  });
 



    
  

  app.get('/delComplainO/:id', isLoggedIn, function (req, res) {

    
    var sql = "DELETE FROM complaint WHERE Complaint_ID =?";
    con.query(sql, [req.params.id], function (err, result) {
      if (err) throw err;

      console.log(result.affectedRows);

      res.redirect('/complainListO');

    })
  })

  app.get('/FloorListO', isLoggedIn, function (req, res) {


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

      res.render('../Oviews/FloorListO.ejs', {
        floor: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });

  });


  app.get('/FloorList2O', isLoggedIn, function (req, res) {


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

      res.render('../Oviews/FloorList2O.ejs', {
        floor: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });

  });

  
  app.get('/ownerListlo', isLoggedIn, function (req, res) {

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

      res.render('../Oviews/ownerListO.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


  
  app.get('/ownerList2o', isLoggedIn, function (req, res) {

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

      res.render('../Oviews/ownerList2O.ejs', {
        owner: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


  app.get('/editComplain1O', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u, complaint c where u.User_Id=c.User_Id and u.User_Id=?",[user.us.User_Id], function (err, result, fields) {

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

      res.render('../Oviews/editComplain1O.ejs', {
        cop: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/editComplain2O', isLoggedIn, function (req, res) {

    con.query("SELECT * FROM user u, complaint c where u.User_Id=c.User_Id and u.User_Id=?",[user.us.User_Id], function (err, result, fields) {

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

      res.render('../Oviews/editComplain2O.ejs', {
        cop: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  

 
 
  
  


  app.get('/OwnerUtilityListO', isLoggedIn, function (req, res) {
    console.log(user.us.User_Id)
    con.query("SELECT * FROM user u,owner_utility o,house h where u.Type_Id='TY002' and u.User_Id=o.Owner_Id and u.User_Id=h.Owner_Id and u.User_Id=?",[user.us.User_Id], function (err, result, fields) {

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

      res.render('../Oviews/OwnerUtilityListO.ejs', {
        cost:result,
        size:size,
        user:req.user
      });




      console.log(size);

    });
  });




 
  app.get('/employeeListO', isLoggedIn, function (req, res) {
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

      res.render('../Oviews/employeeListO.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/employeeList2O', isLoggedIn, function (req, res) {
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

      res.render('../Oviews/employeeList2O.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });









 

 



  app.get('/maintainCostListO', isLoggedIn, function (req, res) {
    con.query("SELECT Maintenance_Id, Title,Total_Amount, Paid_Amount,Due_Date ,Paid_Date, Description FROM maintenance", function (err, result, fields) {

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

      res.render('../Oviews/maintainCostListO.ejs', {
        main: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });

  });

  
  
 




  app.get('/committeListO', isLoggedIn, function (req, res) {
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

      res.render('../Oviews/committeListO.ejs', {
        com: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  
  app.get('/complainListO', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u, complaint c where u.User_Id=c.User_Id and u.User_Id=?",[user.us.User_Id], function (err, result, fields) {

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

      res.render('../Oviews/complainListO.ejs', {
        cop: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  
 
  
  app.get('/ownerNoticeO', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM noticeboard where 	Notice_Type='ForOwners' ", function (err, result, fields) {

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

      res.render('../Oviews/OwnerNoticeO.ejs', {
        not: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  
  app.get('/CommonNoticeO', isLoggedIn, function (req, res) {
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

      res.render('../Oviews/CommonNoticeO.ejs', {
        not: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/Ownerprofile', isLoggedIn, function (req, res) {
    msg = "";
    res.render('Ownerprofile.ejs', {
      user: req.user,
      msg: msg
    })
  });

  app.get('/OwnerProView', isLoggedIn, function (req, res) {
    msg = "";
    res.render('OwnerProView.ejs', {
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