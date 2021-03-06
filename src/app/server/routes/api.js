const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Invite = require('../models/invite');
const Register = require('../models/register');
const userTraveller = require('../models/userTraveller');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TravelGuide', function (err) {
  if (err) {
    console.log('Not connected');
  } else {
    console.log('Successfully log');
  }
});
var db = mongoose.connection;

//Register and save
router.post('/register', function (req, res) {
  let register = req.body;
  let registerData = new Register(register)
  registerData.registerEmail = register.email;
  registerData.password = register.password;
  registerData.userType = register.type;
  console.log(registerData)
  registerData.save(function (err, regUser) {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send(regUser)
      console.log('Data pass');
    }
  })
});


//Login user also match if the user exist or not
router.post('/login', (req, res) => {
  let userData = req.body;
  Register.findOne({
    registerEmail: userData.email
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

//create traveller 
router.get('/createTraveller', function (req, res) {
  let user = new userTraveller();
  user.name = req.query.name;
  user.email = req.query.email;
  user.type = req.query.type;
  user.password = req.query.password;
  user.phone = req.query.phone;
  user.telephone = req.query.telephone;
  user.gender = req.query.gender;
  user.address = req.query.address;
  user.about = req.query.about;
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

//Update Traveller profile
router.get('/updateTraveller', function (req, res) {
  let user = new User();
  user.name = req.query.name;
  user.email = req.query.email;
  user.password = req.query.password;
  user.phone = req.query.phone;
  user.gender = req.query.gender;
  user.telephone = req.query.telephone;
  user.address = req.query.address;
  user.about = req.query.about;
  console.log(user.payment);
  db.collection('users').updateOne({
      "email": user.email
    }, {
      $set: {
        "name": user.name,
        "phone": user.phone,
        "telephone": user.telephone,
        "address": user.address,
        "gender": user.gender,
        "about": user.about
      }
    },
    function (err, result) {
      console.log(result);
      console.log("ok update");
    });
});


////Create Profile
router.get('/create', function (req, res) {
  let user = new User();
  user.name = req.query.name;
  user.email = req.query.email;
  user.type = req.query.type;
  user.password = req.query.password;
  user.phone = req.query.phone;
  user.telephone = req.query.telephone;
  user.address = req.query.address;
  user.payment = req.query.payment;
  user.about = req.query.about;
  user.places = req.query.places;
  console.log(user.about);
  console.log(user.payment);
  user.save(function (err, registeredUser) {
    if (err) {
      console.log(err)

    } else {
      res.status(200).send(registeredUser)
      console.log('Data pass');
    }
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
  user.address = req.query.address;
  user.payment = req.query.payment;
  user.about = req.query.about;
  user.places = req.query.places;
  console.log(user.payment);
  db.collection('users').updateOne({
      "email": user.email
    }, {
      $set: {
        "name": user.name,
        "phone": user.phone,
        "telephone": user.telephone,
        "address": user.address,
        "places": user.places,
        "payment": user.payment,
        "about": user.about,
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
          if (x.type == 'guide') {
            srcGuiResult.result.push(x);
          }
        });
        res.json(srcGuiResult);
      } else {
        users.forEach(x => {
          if (x.type == 'guide') {
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
  let userData = req.body;
  let invite = new Invite(userData)
  invite.guideEmail = req.query.guideEmail;
  console.log(invite.guideEmail)
  console.log(invite)
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
          if (x.guideEmail == rcvEmail.getEmail) {
            getNoti.noti.push(x);
          }
        });
        res.json(getNoti);
        console.log(getNoti.noti)
      } else {
        invites.forEach(x => {
          if (x.guideEmail == rcvEmail.getEmail) {
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
  User.find({}, function (err, users) {
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


let getInviteDetails = {
  status: 300,
  info: [],
  message2: null
}
router.get('/getInviteDetailsUrl', (req, res) => {
  let email = req.query.email;
  console.log(email)
  Invite.find({}, function (err, users) {
    if (err) {
      console.log("log in error occurs!!!!");
    } else {
      if (getInviteDetails.info != '') {
        getInviteDetails.info = []
        users.forEach(x => {
          if (x.senderEmail == email) {
            getInviteDetails.info.push(x);
          }
        });
        res.json(getInviteDetails);
        console.log(getInviteDetails.info)
      } else {
        users.forEach(x => {
          if (x.senderEmail == email) {
            getInviteDetails.info.push(x);
          }
        });
        res.json(getInviteDetails);
        console.log(getInviteDetails.info)
      }
    }
  });
});


module.exports = router;
