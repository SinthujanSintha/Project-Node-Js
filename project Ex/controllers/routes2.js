var mysql = require('mysql');
var dbconfig = require('../config/database');
var con = mysql.createConnection(dbconfig.connection);
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = function (app){


app.post('/addFloor',urlencodedParser,(function(req,res)  {



con.connect(function(err) {
    if (err) throw err;
     console.log("Connected!");
     var sql = "INSERT INTO floor(floorName, Houses)values ('"+req.body.Floorname+"','"+  req.body.houses+ "' )";
     
    

     console.log(sql);
     con.query(sql, function (err, result) {
             console.log(result.insertId);
             

           if (err) throw err;



        })});

    }));


















  app.get('/in', isLoggedIn, function (req, res) {
    res.render('index3.ejs', {
      user: req.user
    });
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

  app.get('/ownerList2', function (req, res) {
    res.render('ownerList2.ejs');
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
  app.get('/salaryList2', function (req, res) {
    res.render('salaryList2.ejs');
  });
  app.get('/leaveReqList', function (req, res) {
    res.render('leaveReqList.ejs');
  });
  app.get('/OwnerUtilityList', function (req, res) {
    res.render('OwnerUtilityList.ejs');
  });
  app.get('/OwnerUtilityList2', function (req, res) {
    res.render('OwnerUtilityList2.ejs');
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

  app.get('/editMaintCost', function (req, res) {
    res.render('editMaintCost.ejs');
  });
  app.get('/EditOwner', function (req, res) {
    res.render('EditOwner.ejs');
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
  app.get('/', function (req, res) {
    res.render('.ejs');
  });





  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
  
    res.redirect('/');
  }
}