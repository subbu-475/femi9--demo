const Order = require('../model/orders');
const { sendMail } = require('./sendmail');

// Get all Orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});

    if (orders) {
      res.status(200).json({ orders });
    } else {
      res.status(404).json({ message: 'orders not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Add into order
exports.addOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a single Order by ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a order
exports.deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (deletedOrder) {
      res.status(200).json(deletedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a order
exports.updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedOrder) {
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a order 
exports.sendOrderedMailToClient = async (req, res) => {
  const { clientname, email, mobile, doorno, street, landmark, city, district, state, pincode, razorpaypaymentid, productname, userid, type, size, vendor, quantity, totalprice } = req.body;
  try {

    const content = `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Order Details on Femi9</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h4 {
              color: #333;
          }
          p {
              color: #555;
          }
          ul {
              list-style-type: none;
              padding: 0;
          }
          li {
              margin-bottom: 10px;
          }
          strong {
              font-weight: bold;
          }
      </style>
      </head>
      <body>
      <div class="container">
          <h4>Hi ${clientname},</h4>
          <p>Thank you for your order!</p>
          <p>Here are your order details:</p>
          <ul>
              <li><strong>Product:</strong> ${productname}</li>
              <li><strong>Type:</strong> ${type}</li>
              <li><strong>Size:</strong> ${size}</li>
              <li><strong>Vendor:</strong> ${vendor}</li>
              <li><strong>Quantity:</strong> ${quantity}</li>
              <li><strong>Total Price:</strong> ${totalprice}</li>
          </ul>
          <p>Your order has been successfully placed. We will notify you once it is processed.</p>
          <p>Thank you for choosing us!</p>
          <p>Regards,</p>
          <p>Your Company Name</p>
      </div>
      </body>
      </html>
      
      `
    sendMail(email, "Femi9 order Details", content);
    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.sendOrderedMailToSeller = async (req, res) => {
  console.log(req.body);
  const { clientname, email, mobile, doorno, street, landmark, city, district, state, pincode, razorpaypaymentid, productname, userid, type, size, vendor, quantity, totalprice } = req.body;
  try {

    const content = `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Order Details on Femi9</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h4 {
              color: #333;
          }
          p {
              color: #555;
          }
          ul {
              list-style-type: none;
              padding: 0;
          }
          li {
              margin-bottom: 10px;
          }
          strong {
              font-weight: bold;
          }
      </style>
      </head>
      <body>
      <div class="container">
          <h4>Hi ${clientname},</h4>
          <p> Order Received!</p>
          <p>Order Details Below:</p>
          <ul>
          <li><strong>Mobile:</strong> ${mobile}</li>
          <li><strong>Door No:</strong> ${doorno}</li>
          <li><strong>Street:</strong> ${street}</li>
          <li><strong>Landmark:</strong> ${landmark}</li>
          <li><strong>City:</strong> ${city}</li>
          <li><strong>District:</strong> ${district}</li>
          <li><strong>State:</strong> ${state}</li>
          <li><strong>Pincode:</strong> ${pincode}</li>
          <li><strong>Payment ID:</strong> ${razorpaypaymentid}</li>
          <li><strong>Payment status:</strong> Paid</li>
          <li><strong>User ID:</strong> ${userid}</li>
              <li><strong>Product:</strong> ${productname}</li>
              <li><strong>Type:</strong> ${type}</li>
              <li><strong>Size:</strong> ${size}</li>
              <li><strong>Vendor:</strong> ${vendor}</li>
              <li><strong>Quantity:</strong> ${quantity}</li>
              <li><strong>Total Price:</strong> ${totalprice}</li>
          </ul>
          <p> order has been successfully placed</p>
      </div>
      </body>
      </html>
      
      `
    await sendMail("femi9womens@gmail.com", "Femi9 order Details", content);
    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.sendSubscriptionConfirmation = async (req, res) => {
  console.log(req.body);
  const { email } = req.body; // Assuming you're only capturing email for subscription
  try {
    const content = `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Subscription Confirmation - Femi9</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h4 {
              color: #333;
          }
          p {
              color: #555;
          }
      </style>
      </head>
      <body>
      <div class="container">
          <h4>Hi there,</h4>
          <p>Thank you for subscribing to Femi9!</p>
          <p>You'll now receive the latest updates, exclusive offers, and more directly to your inbox.</p>
          <p>Stay tuned!</p>
          <p>Regards,</p>
            <p>Femi9 Women's World</p>
            <p><strong>Phone:</strong> 8124337451</p>
            <p><strong>Phone:</strong> 8610418066</p>
            <p>Trichy</p>  
      </div>
      </body>
      </html>
      `;

    // Sending mail to the subscriber
    await sendMail(email, "Subscription Confirmation - Femi9", content);

    res.status(200).json({ message: 'Subscription confirmation email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.sendContact = async (req, res) => {
  const { email, name, message } = req.body;
  try {
    const content = `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Subscription Confirmation - Femi9</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h4 {
              color: #333;
          }
          p {
              color: #555;
          }
      </style>
      </head>
      <body>
      <div class="container">
          <h4>Hi there,</h4>
          <p>This is ${name}</p>
          <p><strong>My mail ID:</strong> ${email}</p>
          <p>${message}</p>
          
      </div>
      </body>
      </html>
      `;

    // Sending mail to the subscriber
    await sendMail("femi9womens@gmail.com", "Message From Client - Femi9", content);

    res.status(200).json({ message: 'Subscription confirmation email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
