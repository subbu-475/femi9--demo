const express = require('express');
const { getAllOrders, addOrder, getOrderById, deleteOrder, updateOrder, sendOrderedMailToClient, sendSubscriptionConfirmation, sendContact, sendOrderedMailToSeller } = require('../controller/ordercontroller');

const router = express.Router();



router.get('/orders', getAllOrders);


router.post('/orders', addOrder);

router.post('/orders/sendmailtoclient', sendOrderedMailToClient);


router.post('/orders/sendmailtoseller', sendOrderedMailToSeller);


router.post('/orders/subscriptionConfirmation', sendSubscriptionConfirmation);

router.post('/orders/sendcontact', sendContact);


router.get('/order/:id', getOrderById);


router.delete('/order/:id', deleteOrder);


router.put('/order/:id', updateOrder);

module.exports = router;
