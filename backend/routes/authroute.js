// routes/userRoutes.js
const express = require('express');

const router = express.Router();

const { getSingleUser, getSingleUserById, updateUserDetails, getSingleUserByToken } = require('../controller/authcontroller');
// Route to get a new user
router.post('/users', getSingleUser);
router.get('/users/:id', getSingleUserById);
router.get('/tokeneduser/:token', getSingleUserByToken);
router.put('/users/:id', updateUserDetails);

module.exports = router;