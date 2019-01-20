var LocalStrategy = require("passport-local").Strategy;

var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

module.exports = function(passport) {
  passport.serializeUser(function(user, done){
  
   done(null, user.User_Id);
  });
 
  passport.deserializeUser(function(User_Id, done){
   connection.query("SELECT * FROM users WHERE User_Id = ? ", [User_Id],
    function(err, rows){
     done(err, rows[0]);
    });
  });
 
   
 

 passport.use(
  'local-signup',
  new LocalStrategy({
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, username, password, done){
    
   connection.query("SELECT Email_Id FROM users WHERE Email_Id = ? ", 
   [username], function(err, rows,){
    if(err)
     return done(err);
    if(rows.length){
     return done(null, false, req.flash('signupMessage', 'This user is already taken'));
    }else{
     var newUserMysql = {

      username: username,
      firstname:req.body.name,
      lastname:req.body.lastname,
      location:req.body.location,
      phoe:req.body.phone,
      type:req.body.type,
      des:req.body.des,
    contact:req.body.contactno,
    conpassword:req.body.password2,
      password: bcrypt.hashSync(password, null, null)
     };
     module.exports=newUserMysql;
     if(!bcrypt.compareSync(newUserMysql.conpassword,newUserMysql.password)){
     return done(null, false, req.flash('signupMessage', 'both password are diffrent'));}

 if(newUserMysql.type=='admin'){ 


  var  idd=req.params.id;
     var updateQuery = "update admin set passWord=?,First_Name=?,Email_Id=?, Contact_Number=?,Last_Name=?,Phone=?,Address=? where User_Id=?";


     connection.query(updateQuery, [newUserMysql.password,
      newUserMysql.firstname,newUserMysql.username, newUserMysql.contact,newUserMysql.lastname ,newUserMysql.phoe,newUserMysql.location,idd],
      function(err, rows,){
     
console.log(rows.insertId);
       newUserMysql.id = rows.insertId;
       return done(null, newUserMysql);
      });
   }

  else if(newUserMysql.type=='owner'){ 
    var insertQuery = "INSERT INTO house_owner (password,name,email,contactNo) values (?,?,?,?)";

    connection.query(insertQuery, [newUserMysql.password,
     newUserMysql.name,newUserMysql.username,newUserMysql.contact],
     function(err, rows){
      newUserMysql.id = rows.insertId;

      return done(null, newUserMysql);
     });
 
 }

  else {
  var insertQuery = "INSERT INTO employee (password,name,email,contactNo,type) values (?,?,?,?,?)";

  connection.query(insertQuery, [newUserMysql.password,
   newUserMysql.name,newUserMysql.username,newUserMysql.contact,newUserMysql.des],
   function(err, rows){
    newUserMysql.id = rows.insertId;

    return done(null, newUserMysql);
   });
 } 











}
   });
  })
 );

 passport.use(
  'local-login',
  new LocalStrategy({
   usernameField : 'username',
   passwordField: 'password',
   passReqToCallback: true
  },
  function(req, username, password, done){
   connection.query("SELECT * FROM users WHERE Email_Id = ? ", [username],
   function(err, rows,user){
    if(err)
     return done(err);
    if(!rows.length){
     return done(null, false, req.flash('loginMessage', 'No User Found'));
    }
    if(!bcrypt.compareSync(password, rows[0].PassWord)){
     return done(null, false, req.flash('loginMessage', 'Wrong Password'));}
     req.session.user=user;
     return done(null, rows[0]);
    
    
   });
   
   
  })
 );




}

