const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Invite = require('../models/invite');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TravelGuide', function (err) {
  if (err) {
    console.log('Not connected');
  } else {
    console.log('Successfully log');
  }
});
var db = mongoose.connection;


//Register User and save in mongodb
router.post('/register', function (req, res) {
  let userData = req.body;
  let user = new User(userData);
  user.name = "";
  user.phone = "";
  user.telephone = "";
  user.gender = "";
  user.city = "";
  user.description = "";
  console.log(user);
  user.save(function (err, registeredUser) {
    if (err) {
      console.log(err)

    } else {
      res.status(200).send(registeredUser)
      console.log('Data pass');
    }
  });
});


//Login user also match if the user exist or not
router.post('/login', (req, res) => {
  let userData = req.body;
  User.findOne({
    email: userData.email
  }, (err, user) => {
    if (err) {
      console.log(err)
    } else {
      if (!user) {
        res.status(401).send('Invalid email')
      } else {
        if (user.password !== userData.password) {
          res.status(401).send('Invalid password')
        } else {
          res.status(200).send(user)
        }
      }
    }
  })
})


//Create Profile
router.get('/create', function (req, res) {
  let user = new User();
  user.name = req.query.name;
  user.email = req.query.email;
  user.password = req.query.password;
  user.phone = req.query.phone;
  user.telephone = req.query.telephone;
  user.city = req.query.city;
  user.gender = req.query.gender;
  user.description = req.query.description;
  console.log(user);
  db.collection('users').updateOne({
      "email": user.email
    }, {
      $set: {
        "name": user.name,
        "phone": user.phone,
        "gender": user.gender,
        "telephone": user.telephone,
        "city": user.city,
        "description": user.description
      }
    },
    function (err, result) {
      console.log(result);
      console.log("ok update");
    });
});



//Update profile
router.get('/update', function (req, res) {
  let user = new User();
  user.name = req.query.name;
  user.email = req.query.email;
  user.password = req.query.password;
  user.phone = req.query.phone;
  user.telephone = req.query.telephone;
  user.city = req.query.city;
  user.gender = req.query.gender;
  user.description = req.query.description;
  console.log(user);
  db.collection('users').updateOne({
      "email": user.email
    }, {
      $set: {
        "name": user.name,
        "phone": user.phone,
        "gender": user.gender,
        "telephone": user.telephone,
        "city": user.city,
        "description": user.description
      }
    },
    function (err, result) {
      console.log(result);
      console.log("ok update");
    });
});

let resp = {
  status: 300,
  data: [],
  message2: null
}

router.get('/profile', (req, res) => {
  let email = req.query.email;
  let password = req.query.password;
  User.find({
    "email": email,
    "password": password
  }, function (err, users) {
    if (err) {
      console.log("log in error occurs!!!!");
    } else {
      for (const userinfo in users) {
        if (users.hasOwnProperty(userinfo)) {
          const user = users[userinfo];
          if (user.email == email) {
            resp.data = user;
            res.json(resp);
            console.log('data retrive');
            return;
          }

        }
      }

    }
  });
});

//Search Guider 
let srcGuiResult = {
  status: 300,
  result: [],
  message2: null
}
router.get('/searchGuider', (req, res) => {
  User.find({}, function (err, users) {
    if (err) {
      console.log("log in error occurs!!!!");
    } else {
      if (srcGuiResult.result != '') {
        srcGuiResult.result = []
        users.forEach(x => {
          if (x.type == 'guider') {
            srcGuiResult.result.push(x);
          }
        });
        res.json(srcGuiResult);
      } else {
        users.forEach(x => {
          if (x.type == 'guider') {
            srcGuiResult.result.push(x);
          }
        });
        res.json(srcGuiResult);
        console.log(srcGuiResult.result)
        console.log('1st time')
      }

    }
  });
});


//Search Agency
let srcAgnResult = {
  status: 300,
  result: [],
  message2: null
}
router.get('/searchAgency', (req, res) => {
  User.find({}, function (err, users) {
    if (err) {
      console.log("log in error occurs!!!!");
    } else {
      if (srcAgnResult.result != '') {
        srcAgnResult.result = []
        users.forEach(x => {
          if (x.type == 'agency') {
            srcAgnResult.result.push(x);
          }
        });
        res.json(srcAgnResult);
      } else {
        users.forEach(x => {
          if (x.type == 'agency') {
            srcAgnResult.result.push(x);
          }
        });
        res.json(srcAgnResult);
        console.log(srcAgnResult.result)
      }

    }
  });
});


//Invite Guider or Agency
let getNotiResult = {
  status: 300,
  result: [],
  message2: null
}
router.post('/postInvite', (req, res) => {
  let userData = req.body.params;
  let invite = new Invite(userData)
  invite.save(function (err, saveInvite) {
    if (err) {
      console.log(err)
    } else {
      res.status(204).send(saveInvite)
      console.log(saveInvite)
    }
  })
})


//Get all Notifications
let getNoti = {
  status: 300,
  noti: [],
  message2: null
}
router.post('/getNotification', (req, res) => {
  let rcvEmail = req.body.params;
  console.log(rcvEmail.getEmail)
  Invite.find({}, function (err, invites) {
    if (err) {
      console.log("log in error occurs!!!!");
    } else {
      if (getNoti.noti != '') {
        getNoti.noti = []
        invites.forEach(x => {
          if (x.getEmail == rcvEmail.getEmail) {
            getNoti.noti.push(x);
          }
        });
        res.json(getNoti);
        console.log(getNoti.noti)
      } else {
        invites.forEach(x => {
          if (x.getEmail == rcvEmail.getEmail) {
            getNoti.noti.push(x);
          }
        });
        res.json(getNoti);
        console.log(getNoti.noti)
      }
    }
  });
});

let getNDetails = {
  status: 300,
  details: [],
  message2: null
}
router.get('/getNotiDetails', (req, res) => {
  let email = req.query.email;
  console.log("yes")
  console.log(email)
  User.find({ },function(err,users){
    if (err) {
      console.log("log in error occurs!!!!");
    } else {
      if (getNDetails.details != '') {
        getNDetails.details = []
        users.forEach(x => {
          if (x.email == email) {
            getNDetails.details.push(x);
          }
        });
        res.json(getNDetails);
        console.log(getNDetails.details)
      } else {
        users.forEach(x => {
          if (x.email == email) {
            getNDetails.details.push(x);
          }
        });
        res.json(getNDetails);
        console.log(getNDetails.details)
      }
    }
  });
});



module.exports = router;
