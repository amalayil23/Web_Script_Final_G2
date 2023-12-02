var express = require('express');
var router = express.Router();
var req = require('connect-flash');
const passport = require('passport');
let userModel = require('../models/user');


let User = userModel.User;

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home', displayName: req.user ? req.user.displayName:''  
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' , displayName: req.user ? req.user.displayName:'' 
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Us', displayName: req.user ? req.user.displayName:''  
  });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { 
    title: 'Products' , displayName: req.user ? req.user.displayName:'' 
  });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { 
    title: 'Services', displayName: req.user ? req.user.displayName:''  
  });
});



/* GET contacts page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact Us' , displayName: req.user ? req.user.displayName:'' 
  });
});



// GET login page
router.get('/login',function(req,res,next){
  if(!req.user)
  {
    res.render('auth/login',
    {
      title:'Login',
      message: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName:''
    })
  }
  else{
    return res.redirect('/home')
  }
})

router.post('/login',function(req,res,next){
  passport.authenticate('local',function(err,User,info){
      // server error
      if(err)
      {
        return next(err);
      }
      // login error
      if(!User)
      {
        req.flash('loginMessage',
        'Authentication Error: Please check your username and password  ');
        //return res.redirect('/login')
          return res.render('auth/login',
          { 
            title:'Login',
            message: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName:''
          })
      }
      req.login(User,(err)=>{
        if(err)
        {
          return next(err)
        }
        return res.redirect('/concertlist');
      })
  })(req,res,next)
})

//GET Register Page
router.get('/register',function(req,res,next){
  if(!req.user)
  {
    res.render('auth/register',
    {
      title:'Register',
      message: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName: ''
    })
  }
  else{
    return res.redirect('/home')
  }
})

router.post('/register', function(req,res,next){  
  let newUser = new User({
    username: req.body.username,
    // password: req.body.password,
    email: req.body.email,
    displayName: req.body.displayName
  });
  User.register(newUser, req.body.password,(err) => {
    if(err)
    {
      console.log("Error in inserting new User");
      console.log(err.name)
      if(err.name =='UserExistsError')
      {
        req.flash('registerMessage',
        'Registration Error : Username already in use'
      )}
      return res.render('auth/register',
      {
        title:'Register',
        message: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName:''
      })
      }
    else
    {
      req.flash('sucessMessage',
        'Registration Success : Please login'
    )}
    res.redirect('/success')
    } )

  })


/* GET success page. */
router.get('/success', function(req, res, next) {
  res.render('auth/success', { 
    title: 'Success', displayName: req.user ? req.user.displayName:'', message: req.flash('sucessMessage'),
  });
});



router.get('/logout',function(req,res,next){
  req.logout(function(err){
    if(err)
    {
      return next(err);
    }
  })
  res.redirect('/home')
})
module.exports = router;
