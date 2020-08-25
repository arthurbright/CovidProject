//SESSION/COOKIES TEMPLATE CODE - CAN BE USED HERE OR IN index.js IF NECESSARY LATER

/*
app.use(session({
    cookieName: 'session',
    secret: 'random string', //long ass random unguessable str
    duration: 30 * 60 * 1000, //how long the session remains active in ms,
    activeDuration: 5 * 60 * 1000 //if user stays on session and remaining time is less than activeDuration, session time+=activeDuration
    httpOnly: true,
    secure: true,
    ephemeral: true
}));
app.post('/login', function(req, res) {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (!user) {
      res.send("Invalid email or password."");
    } 
    else {
        //if login successful
      if (req.body.password === user.password) {
        res.redirect('/dashboard');
        //setting cookie with user info
        req.session.user = user;
      } else {
        res.send("Invalid email or password."");
      }
    }
  });
});
app.use(function(req, res, next) {
  if (req.session && req.session.user) {
    User.findOne({ email: req.session.user.email }, function(err, user) {
      if (user) {
        req.user = user;
        delete req.user.password; // delete the password from the session
        req.session.user = user;  //refresh the session value
        res.locals.user = user;
      }
      // finishing processing the middleware and run the route
      next();
    });
  } else {
    next();
  }
});
function requireLogin (req, res, next) {
  if (!req.user) {
    res.redirect('/login');
  } else {
    next();
  }
};
app.get('/dashboard', requireLogin, function(req, res) {
  res.render('template.html');
});
app.get('/logout', function(req, res) {
  req.session.reset();
  res.redirect('/');
});

*/