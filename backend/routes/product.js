const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  addProduct,
  getProductById,
  deleteProduct,
  updateProduct
} = require('../controller/productcontroller');


router.get('/products', getAllProducts);


router.post('/products', addProduct);


router.get('/products/:id', getProductById);


router.delete('/products/:id', deleteProduct);


router.put('/products/:id', updateProduct);

module.exports = router;
