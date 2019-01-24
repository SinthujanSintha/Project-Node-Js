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




  app.post('/addOwnerUtility', urlencodedParser, function (req, res) {





    var username = req.body.email;
    var month = req.body.month;
    var year = req.body.year;
    var gas = req.body.gas;
    var water = req.body.water;
    var electric = req.body.electric;
    var security = req.body.security;
    var other = req.body.other;
    var total = req.body.total;


    var selectuser = "select * from user  where Email_Id =?";

    con.query(selectuser, [username],
      function (err, rowss) {
        if (err)
          console.log(err);


        var insertutil = "INSERT INTO owner_utility (Owner_Id,Month,Year,Gas_Amount,Water_Amount,Electricity_Amount,Security_Charge,Other_Expensive,Total_Amount) values (?,?,?,?,?,?,?,?,?)";
        con.query(insertutil, [rowss[0].User_Id, month, year, gas, water, electric, security, other, total],
          function (err, row) {
            if (err)
              console.log(err);
            res.redirect('/OwnerUtilityList');
          })







      });






  })




  app.post('/addCommitte', isLoggedIn, function (req, res) {


    var username = req.body.email;
    var Mtype = req.body.mTypeId;
    var status= req.body.status;
    var jdate = req.body.jdate;
    

    var selectuser = "select * from user  where Email_Id =?";

    con.query(selectuser, [username],
      function (err, rowss) {
        if (err)
          console.log(err);


        var insertutil = "INSERT INTO committee (Member_Id,CType_Id,Join_Date,Status) values (?,?,?,?)";
        con.query(insertutil, [rowss[0].User_Id, Mtype,jdate, status],
          function (err, row) {
            if (err)
              console.log(err);
            res.redirect('/committeeList');
          })







      });

  });

  app.post('/editOwnerUtility/:id', urlencodedParser, function (req, res) {
    var idd = req.params.id;

    var username = req.body.email;
    var month = req.body.month;
    var year = req.body.year;
    var gas = req.body.gas;
    var water = req.body.water;
    var electric = req.body.electric;
    var security = req.body.security;
    var other = req.body.other;
    var total = req.body.total;


    var selectuser = "select * from user  where Email_Id =?";

    con.query(selectuser, [username],
      function (err, rowss) {
        if (err)
          console.log(err);


        var insertutil = "update owner_utility set Owner_Id=?,Month=?,Year=?,Gas_Amount=?,Water_Amount=?,Electricity_Amount=?,Security_Charge=?,Other_Expensive=?,Total_Amount=? where Cost_Id=?";
        con.query(insertutil, [rowss[0].User_Id, month, year, gas, water, electric, security, other, total, idd],
          function (err, row) {
            if (err)
              console.log(err);
            res.redirect('/OwnerUtilityList');
          })







      });





  })






  app.post('/addMaintenance', urlencodedParser, (function (req, res) {
    var title = req.body.title;
    var total = req.body.total;
    var paid = req.body.paid;
    var due = req.body.endDate;
    var pdate = req.body.paidDate;
    var des = req.body.des;


    var sql = "INSERT INTO maintenance(Title,Total_Amount,Paid_Amount,Due_Date,Paid_Date,Description) VALUES (?,?,?,?,?,?)";
    con.query(sql, [title, total, paid, due, pdate, des], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/maintainCostList');


      }

    });

  }));

  app.post('/editMaintenance/:id', urlencodedParser, (function (req, res) {

    var idd = req.params.id;
    var title = req.body.title;
    var total = req.body.total;
    var paid = req.body.paid;
    var due = req.body.endDate;
    var pdate = req.body.paidDate;
    var des = req.body.des;


    var sql = "update maintenance set Title =?,Total_Amount=?,Paid_Amount=?,Due_Date=?,Paid_Date=?,Description=? where Maintenance_Id=?";
    con.query(sql, [title, total, paid, due, pdate, des, idd], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/maintainCostList');


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
    con.query(sql, [firstname, username, contact, lastname, phone, location, idd], function (err, result) {
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


  app.post('/editSalary/:id', urlencodedParser, (function (req, res) {
    var idd = req.params.id;
    var sal = req.body.salary;

    var sql = "UPDATE salary SET Amount = ? WHERE Emp_Id = ?";
    con.query(sql, [sal, idd], function (err, result) {
      if (err) throw err;

      console.log("Number of records inserted: " + result.affectedRows);
      if (result.affectedRows == 1) {
        res.redirect('/salaryList');


      }

    });


  }))














  app.get('/in', isLoggedIn, function (req, res) {
    res.render('index2.ejs', {
      user: req.user
    });
  });

  app.get('/delUtility/:id', isLoggedIn, function (req, res) {

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

  app.get('/FloorDel/:id', isLoggedIn, (req, res) => {
    var sql = "DELETE FROM floor WHERE Floor_Id =?";
    con.query(sql, [req.params.id], function (err, result) {
      if (err) throw err;

      console.log(result.affectedRows);

      res.redirect('/FloorList');

    })
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


  app.get('/editOwnerUtility', isLoggedIn, function (req, res) {
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

      res.render('editOwnerUtility.ejs', {
        cost: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/editOwnerUtility2', isLoggedIn, function (req, res) {
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

      res.render('editOwnerUtility2.ejs', {
        cost: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/editOwnerUtility3', isLoggedIn, function (req, res) {
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

      res.render('editOwnerUtility3.ejs', {
        cost: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/editOwnerUtility4', isLoggedIn, function (req, res) {
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

      res.render('editOwnerUtility4.ejs', {
        cost: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });


  app.get('/editOwnerUtility5', isLoggedIn, function (req, res) {
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

      res.render('editOwnerUtility5.ejs', {
        cost: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/editOwnerUtility6', isLoggedIn, function (req, res) {
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

      res.render('editOwnerUtility6.ejs', {
        cost: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });












  app.get('/addOwnerUtility', isLoggedIn, function (req, res) {


    con.query("SELECT * FROM user u where u.Type_Id='TY002' ", function (err, result, fields) {
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

      res.render('addOwnerUtility.ejs', {
        cost: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });

  app.get('/maintainCostList', isLoggedIn, function (req, res) {
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

      res.render('maintainCostList.ejs', {
        main: result,
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

  app.get('/delMaint/:id', isLoggedIn, function (req, res) {

    var sql = "DELETE FROM maintenance WHERE Maintenance_Id=?";
    con.query(sql, [req.params.id], function (err, result) {
      if (err) throw err;

      console.log(result.affectedRows);

      res.redirect('/maintainCostList');

    })
  })
  app.get('/editMaintCost', isLoggedIn, function (req, res) {
    con.query("SELECT Maintenance_Id,Title,Total_Amount, Paid_Amount,Due_Date ,Paid_Date, Description FROM maintenance", function (err, result, fields) {

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

      res.render('editMaintCost.ejs', {
        main: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/editMaintCost2', isLoggedIn, function (req, res) {
    con.query("SELECT Maintenance_Id,Title,Total_Amount, Paid_Amount,Due_Date ,Paid_Date, Description FROM maintenance", function (err, result, fields) {

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

      res.render('editMaintCost2.ejs', {
        main: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/editMaintCost3', isLoggedIn, function (req, res) {
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

      res.render('editMaintCost3.ejs', {
        main: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });





  app.get('/committeList', isLoggedIn, function (req, res) {
    con.query("SELECT * FROM user u, committee c,committee_type t where u.User_Id=c.Member_Id and c.CType_Id=t.CType_ID", function (err, result, fields) {

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

      res.render('addCommittee.ejs', {
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










  app.get('/editCommitte', isLoggedIn, function (req, res) {
    res.render('editCommitte.ejs');
  });

  app.get('/ComReply', isLoggedIn, function (req, res) {
    res.render('ComReply.ejs');
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
  app.get('/editFloor3', isLoggedIn, function (req, res) {
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
  app.get('/editFloor4', isLoggedIn, function (req, res) {
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
  app.get('/editFloor5', isLoggedIn, function (req, res) {
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
  app.get('/editFloor6', isLoggedIn, function (req, res) {
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
  app.get('/editFloor7', isLoggedIn, function (req, res) {
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
  app.get('/editFloor8', isLoggedIn, function (req, res) {
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



  app.get('/editOwnerNotice', isLoggedIn, function (req, res) {
    res.render('editOwnerNotice.ejs');
  });

  app.get('/addSalary', isLoggedIn, function (req, res) {
    res.render('addSalary.ejs');
  });
  app.get('/editSalary', isLoggedIn, function (req, res) {
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

      res.render('editSalary.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/editSalary2', isLoggedIn, function (req, res) {
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

      res.render('editSalary2.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/editSalary3', isLoggedIn, function (req, res) {
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

      res.render('editSalary3.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/editSalary4', isLoggedIn, function (req, res) {
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

      res.render('editSalary4.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/editSalary5', isLoggedIn, function (req, res) {
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

      res.render('editSalary5.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });
  app.get('/editSalary6', isLoggedIn, function (req, res) {
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

      res.render('editSalary6.ejs', {
        emp: result,
        size: size,
        user: req.user
      });




      console.log(size);

    });
  });



  app.get('/EditVisitors', isLoggedIn, function (req, res) {
    res.render('EditVisitors.ejs');
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