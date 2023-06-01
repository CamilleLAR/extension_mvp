const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const createError = require("http-errors");

const indexRouter = require('./routes/index');
const petsRouter = require('./routes/pets');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/pets', petsRouter);
app.use('/api/users', usersRouter);


// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/index.html"));
  }); 
  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};  
    // render the error page
    res.status(err.status || 500);
    res.send({ msg: "Error" });
  });
  



module.exports = app;
