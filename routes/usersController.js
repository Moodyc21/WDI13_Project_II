const express = require('express');
const router = express.Router();
const User = require('../db/models/User')


/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.render('user/index');
// });


router.get('/', (req, res, next) => {
  User.find({})
    .then((user) => {
      res.render('user/index', {
        user
      })

    })

})

router.get('/:id', (req, res, next) => {
  res.render('user/show')

})

router.post('/', (req, res) => {
  const newUser = req.body

  User.create(newUser)
    .then(() => {
      res.redirect('/')
    })
    .catch((error) => {
      console.log(error)
    })
})


// router.get('/:userId', (request, response) => {
//   const userId = request.params.userId
//   User.findById(userId)
//     .then((user) => {
//       response.render('users/show')
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// })

module.exports = router;
