var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var createHtml=require('create-html');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "amsystem"
});



module.exports = function (app){


app.post('/addFloor',urlencodedParser,(function(req,res)  {
var FloorName=req.body.Floorname ;
var  houses=req.body.houses;

 
    var sql = "INSERT INTO floor (floorName, Houses) VALUES (?,?)";
    con.query(sql, [FloorName,houses], function (err, result) {
      if (err) throw err;
     
      console.log("Number of records inserted: " + result.affectedRows);
      if(result.affectedRows==1){
      res.redirect('/FloorList');
    
   
    }

    });

    })
  );

  app.post('/editFloor/:id',urlencodedParser,(function(req,res)  {
    var FloorName=req.body.Floorname ;
    var  houses=req.body.houses;
    var  idd=req.params.id;
    
     
        var sql = "UPDATE floor SET floorName = ?, Houses = ? WHERE floorId = ?";
        con.query(sql, [FloorName,houses,idd], function (err, result) {
          if (err) throw err;
         
          console.log("Number of records inserted: " + result.affectedRows);
          if(result.affectedRows==1){
          res.redirect('/FloorList');
        
       
        }
    
        });
    
        })
      );
















  app.get('/in', isLoggedIn, function (req, res) {
    res.render('index3.ejs', {
      user: req.user
    });
  });


  app.get('/FloorList',function (req, res) {
   
 
      con.query("SELECT * FROM floor", function (err,result, fields) {
        if (err) throw err;
        Object.size = function(obj) {
          var size = 0, key;
          for (key in obj) {
              if (obj.hasOwnProperty(key)) size++;
          }
          return size;
      };
        var size=Object.size(result);
        
        res.render('FloorList.ejs',{
          floor:result,
        size:size
      });
   
       
     
      
        console.log(size);
        
      });
  
  });

 app.get('/FloorDel/:id',(req,res)=>{
  var sql = "DELETE FROM floor WHERE floorId =?";
  con.query(sql, [req.params.id],function (err, result) {
    if (err) throw err;
   
   console.log(result.affectedRows);
  
    res.redirect('/FloorList');
  
}
 )});



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
    con.query("SELECT * FROM floor", function (err,result, fields) {
      if (err) throw err;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
      var size=Object.size(result);
      
      res.render('editFloor.ejs',{
        floor:result,
      size:size
    });
 
     
   
    
      console.log(size);
      
    });

  });
  app.get('/editFloor2', function (req, res) {
    con.query("SELECT * FROM floor", function (err,result, fields) {
      if (err) throw err;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
      var size=Object.size(result);
      
      res.render('editFloor2.ejs',{
        floor:result,
      size:size
    });
 
     
   
    
      console.log(size);
      
    });

  });
  app.get('/editFloor3', function (req, res) {
    con.query("SELECT * FROM floor", function (err,result, fields) {
      if (err) throw err;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
      var size=Object.size(result);
      
      res.render('editFloor3.ejs',{
        floor:result,
      size:size
    });
 
     
   
    
      console.log(size);
      
    });

  });
  app.get('/editFloor4', function (req, res) {
    con.query("SELECT * FROM floor", function (err,result, fields) {
      if (err) throw err;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
      var size=Object.size(result);
      
      res.render('editFloor4.ejs',{
        floor:result,
      size:size
    });
 
     
   
    
      console.log(size);
      
    });

  });
  app.get('/editFloor5', function (req, res) {
    con.query("SELECT * FROM floor", function (err,result, fields) {
      if (err) throw err;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
      var size=Object.size(result);
      
      res.render('editFloor5.ejs',{
        floor:result,
      size:size
    });
 
     
   
    
      console.log(size);
      
    });

  });
  app.get('/editFloor6', function (req, res) {
    con.query("SELECT * FROM floor", function (err,result, fields) {
      if (err) throw err;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
      var size=Object.size(result);
      
      res.render('editFloor6.ejs',{
        floor:result,
      size:size
    });
 
     
   
    
      console.log(size);
      
    });

  });
  app.get('/editFloor7', function (req, res) {
    con.query("SELECT * FROM floor", function (err,result, fields) {
      if (err) throw err;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
      var size=Object.size(result);
      
      res.render('editFloor7.ejs',{
        floor:result,
      size:size
    });
 
     
   
    
      console.log(size);
      
    });

  });
  app.get('/editFloor8', function (req, res) {
    con.query("SELECT * FROM floor", function (err,result, fields) {
      if (err) throw err;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
      var size=Object.size(result);
      
      res.render('editFloor8.ejs',{
        floor:result,
      size:size
    });
 
     
   
    
      console.log(size);
      
    });

  });

  app.get('/employeeList2', function (req, res) {
    res.render('employeeList2.ejs');
  });

  app.get('/FloorList2', function (req, res) {
    con.query("SELECT * FROM floor", function (err,result, fields) {
      if (err) throw err;
      Object.size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
      var size=Object.size(result);
      
      res.render('FloorList2.ejs',{
        floor:result,
      size:size
    });
 
     
   
      console.log(result[0].floorName);
      console.log(size);
      
    });
   
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