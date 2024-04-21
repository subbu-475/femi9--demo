const User = require('../model/users');

exports.getSingleUser = async (req, res) => {
  try {
    const { token } = req.body;
    const singleUser = await User.findOne({ token }).select('-password');;
    
    if (singleUser) {
      res.status(200).json({singleUser:singleUser});
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getSingleUserById = async (req, res) => {
  try {
    // Extracting the user ID from the request parameters (assuming it's passed in the URL)
    const id = req.params.id;

    // Finding the user by ID in the database
    const singleUser = await User.findById(id);
    
    // If user is found, send it in the response
    if (singleUser) {
      res.status(200).json({ singleUser });
    } else {
      // If user is not found, send a 404 response
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    // If any error occurs during the process, log it and send a 500 response
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getSingleUserByToken = async (req, res) => {
  try {

   
    // Extract the token from the request body
    const token = req.params.token;



    // Find the user by token in the database
    const singleUser = await User.findOne({ token }).select('-password');

    // If user is found, send it in the response
    if (singleUser) {
      res.status(200).json({ singleUser });
    } else {
      // If user is not found, send a 404 response
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    // If any error occurs during the process, log it and send a 500 response
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



exports.updateUserDetails = async (req, res) => {
  try {
    // Extracting the user ID from the request parameters
    const id = req.params.id;

    // Check if the user exists before updating
    const existingUser = await User.findById(id);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user details in the database
    // Ensure to use { new: true } option to return the updated document
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

    // Send the updated user details in the response
    res.status(200).json({ updatedUser });
  } catch (error) {
    // If any error occurs during the process, log it and send a 500 response
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
