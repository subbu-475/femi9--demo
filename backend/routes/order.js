const express = require('express');
const { getAllOrders, addOrder, getOrderById, deleteOrder, updateOrder } = require('../controller/ordercontroller');

const router = express.Router();



router.get('/orders', getAllOrders);


router.post('/orders', addOrder);


router.get('/order/:id', getOrderById);


router.delete('/order/:id', deleteOrder);


router.put('/order/:id', updateOrder);

module.exports = router;
