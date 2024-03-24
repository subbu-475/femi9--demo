const express = require('express');
const { getAllCartItems, addItems, getCartItemsById, deleteItem, updateCart } = require('../controller/cartcontroller');
const router = express.Router();



router.get('/cartitems', getAllCartItems);


router.post('/cartitems', addItems);


router.get('/cartitem/:id', getCartItemsById);


router.delete('/cartitem/:id', deleteItem);


router.put('/cartitem/:id', updateCart);

module.exports = router;
