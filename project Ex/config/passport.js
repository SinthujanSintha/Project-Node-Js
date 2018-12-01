var LocalStrategy = require("passport-local").Strategy;
//var session = require('express-session');
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

module.exports = function(passport) {
  passport.serializeUser(function(user, done){
   done(null, user.id);
  });
 
  passport.deserializeUser(function(id, done){
   connection.query("SELECT * FROM users WHERE id = ? ", [id],
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
   connection.query("SELECT email FROM users WHERE email = ? ", 
   [username], function(err, rows,){
    if(err)
     return done(err);
    if(rows.length){
     return done(null, false, req.flash('signupMessage', 'This user is already taken'));
    }else{
     var newUserMysql = {

      username: username,
      name:req.body.name,
      type:req.body.type,
      des:req.body.des,
    contact:req.body.contactno,
    conpassword:req.body.password2,
      password: bcrypt.hashSync(password, null, null)
     };
     if(!bcrypt.compareSync(newUserMysql.conpassword,newUserMysql.password)){
     return done(null, false, req.flash('signupMessage', 'both password are diffrent'));}

 if(newUserMysql.type=='admin'){ 
     var insertQuery = "INSERT INTO admin (password,name,email,contactNo) values (?,?,?,?)";


     connection.query(insertQuery, [newUserMysql.password,
      newUserMysql.name,newUserMysql.username, newUserMysql.contact],
      function(err, rows){
     

       newUserMysql.id = rows.insertId;
       return done(null, newUserMysql);
      });
   }

  else if(newUserMysql.type=='owner'){ 
    var insertQuery = "INSERT INTO owner (password,name,email,contactNo) values (?,?,?,?)";

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
   connection.query("SELECT * FROM users WHERE email = ? ", [username],
   function(err, rows){
    if(err)
     return done(err);
    if(!rows.length){
     return done(null, false, req.flash('loginMessage', 'No User Found'));
    }
    if(!bcrypt.compareSync(password, rows[0].password))
     return done(null, false, req.flash('loginMessage', 'Wrong Password'));

    return done(null, rows[0]);
   });
  })
 );
};