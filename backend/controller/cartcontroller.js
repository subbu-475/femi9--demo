const Cart = require('../model/cart');

// Get all cart items
exports.getAllCartItems = async (req, res) => {
    try {
      const items = await Cart.find({});
      
      if (items) {
        res.status(200).json({ items });
      } else {
        res.status(404).json({ message: 'items not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Add a item into cart
  exports.addItems = async (req, res) => {
    try {
      const newItem = new Cart(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Get a single cart item by ID
  exports.getCartItemsById = async (req, res) => {
    try {
      const item = await Cart.findById(req.params.id);
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Delete a item
  exports.deleteItem = async (req, res) => {
    console.log(req.params.id);
    try {
      const deletedItem = await Cart.findByIdAndDelete(req.params.id);
      if (deletedItem) {
        res.status(200).json(deletedItem);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Update a item in a cart
  exports.updateCart = async (req, res) => {
    try {
      const updatedItems = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedItems) {
        res.status(200).json(updatedItems);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  