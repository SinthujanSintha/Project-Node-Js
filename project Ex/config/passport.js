var LocalStrategy = require("passport-local").Strategy;
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);



module.exports = function (passport) {
  passport.serializeUser(function (user, done) {

    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    connection.query("SELECT * FROM user WHERE id = ? ", [id],
      function (err, rows) {
        done(err, rows[0]);
      });
  });




  passport.use(
    'local-signup',
    new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      function (req, username, password, done) {

        connection.query("SELECT Email_Id FROM user WHERE Email_Id = ? ",
          [username],
          function (err, rows, ) {
            if (err)
              return done(err);
            if (rows.length) {
              return done(null, false, req.flash('signupMessage', 'This user is already taken'));
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
                HouseNo: req.body.HouseNo,
                conpassword: req.body.password2,
                password: bcrypt.hashSync(password, null, null)
           
              };
              //  module.exports=newUserMysql;
              if (!bcrypt.compareSync(newUserMysql.conpassword, newUserMysql.password)) {
                return done(null, false, req.flash('signupMessage', 'both password are diffrent'));
              }

              if (newUserMysql.type == 'Admin') {


                var idd = req.params.id;
                var updateQuery = "update user set PassWord=?,First_Name=?,Email_Id=?, Contact_Number=?,Last_Name=?,Phone=?,Address=? where User_Id=?";


                connection.query(updateQuery, [newUserMysql.password,
                    newUserMysql.firstname, newUserMysql.username, newUserMysql.contact, newUserMysql.lastname, newUserMysql.phone, newUserMysql.location, idd
                  ],
                  function (err, rows, ) {

                    console.log(rows.insertId);
                    newUserMysql.id = rows.insertId;
                    return done(null, newUserMysql);
                  });
              } else if (newUserMysql.type == 'Owner') {


                var insertQuery = "INSERT INTO user (First_Name, Last_Name, Contact_Number, Email_ID, PassWord, Phone,Address,Type) values (?,?,?,?,?,?,?,?)";

                connection.query(insertQuery, [newUserMysql.firstname,
                    newUserMysql.lastname, newUserMysql.contact, newUserMysql.username, newUserMysql.password, newUserMysql.phone, newUserMysql.location, newUserMysql.type
                  ],
                  function (err, rows) {
                    if (err)
                      console.log(err);

                    console.log(rows.insertId);
                    newUserMysql.id = rows.insertId;

                    return done(null, newUserMysql);

                  });

                var selectuser = "select * from user where Email_Id =?";

                connection.query(selectuser, [newUserMysql.username],
                  function (err, rows) {
                    if (err)
                      console.log(err);

                    var insertHouse = "INSERT INTO house (Owner_Id,House_Name) values (?,?)";

                    connection.query(insertHouse, [rows[0].User_Id, newUserMysql.HouseNo],
                      function (err, rows) {
                        if (err)
                          console.log(err);

                      });

                  });
              } else {

                var insertQuery = "INSERT INTO user (First_Name, Last_Name, Contact_Number, Email_ID, House_ID, PassWord, Phone,Address) values (?,?,?,?,?,?,?,?,?)";

                connection.query(insertQuery, [newUserMysql.firstname,
                    newUserMysql.lastname, newUserMysql.contact, newUserMysql.username, newUserMysql.HouseNo, newUserMysql.password, newUserMysql.phone, newUserMysql.Address, newUserMysql.type
                  ],
                  function (err, rows) {
                    if (err)
                      console.log(err);

                    console.log(rows.insertId);
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
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
      },
      function (req, username, password, done) {
        connection.query("SELECT * FROM user WHERE Email_Id = ? ", [username],
          function (err, rows, user) {
            if (err)
              return done(err);

            if (!rows.length) {
              return done(null, false, req.flash('loginMessage', 'No User Found'));
            }
            if (!bcrypt.compareSync(password, rows[0].PassWord)) {
              return done(null, false, req.flash('loginMessage', 'Wrong Password'));
            }

            // req.session.user = user;


            module.exports.type = rows[0].Type_Id;



            return done(null, rows[0]);


          });


      })
  );




}