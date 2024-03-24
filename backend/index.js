const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const authRoutes = require('./routes/authroute');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/order');

const connectDB=require('./db')
const signInRoutes = require('./routes/signin');
const loginRoutes = require('./routes/login');

app.use(express.json());
app.use(cors());

connectDB();

app.use('/signin',signInRoutes);
app.use('/login',loginRoutes);
app.use('/auth',authRoutes);
app.use('/master',productRoutes);
app.use('/cart',cartRoutes);
app.use('/checkout',orderRoutes);



//Image Storage Engine 
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
      console.log(file);
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({storage: storage})
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:4000/images/${req.file.filename}`
    })
})
app.use('/images', express.static('upload/images'));

// MiddleWare to fetch user from database
// const fetchuser = async (req, res, next) => {
//   const token = req.header("auth-token");
//   if (!token) {
//     res.status(401).send({ errors: "Please authenticate using a valid token" });
//   }
//   try {
//     const data = jwt.verify(token, "secret_ecom");
//     req.user = data.user;
//     next();
//   } catch (error) {
//     res.status(401).send({ errors: "Please authenticate using a valid token" });
//   }
// };





// app.get("/", (req, res) => {
//   res.send("Root");
// });

// //Create an endpoint at ip/login for login the user and giving auth-token
// app.post('/login', async (req, res) => {
//   console.log("Login");
//     let success = false;
//     let user = await Users.findOne({ email: req.body.email });
//     if (user) {
//         const passCompare = req.body.password === user.password;
//         if (passCompare) {
//             const data = {
//                 user: {
//                     id: user.id
//                 }
//             }
// 			success = true;
//       console.log(user.id);
// 			const token = jwt.sign(data, 'secret_ecom');
// 			res.json({ success, token });
//         }
//         else {
//             return res.status(400).json({success: success, errors: "please try with correct email/password"})
//         }
//     }
//     else {
//         return res.status(400).json({success: success, errors: "please try with correct email/password"})
//     }
// })

// //Create an endpoint at ip/auth for regestring the user in data base & sending token
// app.post('/signup', async (req, res) => {
//   console.log("Sign Up");
//         let success = false;
//         let check = await Users.findOne({ email: req.body.email });
//         if (check) {
//             return res.status(400).json({ success: success, errors: "existing user found with this email" });
//         }
//         let cart = {};
//           for (let i = 0; i < 300; i++) {
//           cart[i] = 0;
//         }
//         const user = new Users({
//             name: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//             cartData: cart,
//         });
//         await user.save();
//         const data = {
//             user: {
//                 id: user.id
//             }
//         }
        
//         const token = jwt.sign(data, 'secret_ecom');
//         success = true; 
//         res.json({ success, token })
//     })

// app.get("/allproducts", async (req, res) => {
// 	let products = await Product.find({});
//   console.log("All Products");
//     res.send(products);
// });

// app.get("/newcollections", async (req, res) => {
// 	let products = await Product.find({});
//   let arr = products.slice(1).slice(-8);
//   console.log("New Collections");
//   res.send(arr);
// });

// app.get("/popularinwomen", async (req, res) => {
// 	let products = await Product.find({});
//   let arr = products.splice(0,  4);
//   console.log("Popular In Women");
//   res.send(arr);
// });

// //Create an endpoint for saving the product in cart
// app.post('/addtocart', fetchuser, async (req, res) => {
// 	console.log("Add Cart");
//     let userData = await Users.findOne({_id:req.user.id});
//     userData.cartData[req.body.itemId] += 1;
//     await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
//     res.send("Added")
//   })

//   //Create an endpoint for saving the product in cart
// app.post('/removefromcart', fetchuser, async (req, res) => {
// 	console.log("Remove Cart");
//     let userData = await Users.findOne({_id:req.user.id});
//     if(userData.cartData[req.body.itemId]!=0)
//     {
//       userData.cartData[req.body.itemId] -= 1;
//     }
//     await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
//     res.send("Removed");
//   })

//   //Create an endpoint for saving the product in cart
// app.post('/getcart', fetchuser, async (req, res) => {
//   console.log("Get Cart");
//   let userData = await Users.findOne({_id:req.user.id});
//   res.json(userData.cartData);

//   })


// app.post("/addproduct", async (req, res) => {
//   let products = await Product.find({});
//   let id;
//   if (products.length>0) {
//     let last_product_array = products.slice(-1);
//     let last_product = last_product_array[0];
//     id = last_product.id+1;
//   }
//   else
//   { id = 1; }
//   const product = new Product({
//     id: id,
//     name: req.body.name,
//     image: req.body.image,
//     category: req.body.category,
//     new_price: req.body.new_price,
//     old_price: req.body.old_price,
//   });
//   console.log(product);
//   await product.save();
//   console.log("Saved");
//   res.json({success:true,name:req.body.name})
// });

// app.post("/removeproduct", async (req, res) => {
//   const product = await Product.findOneAndDelete({ id: req.body.id });
//   console.log("Removed");
//   res.json({success:true,name:req.body.name})
// });

const server = app.listen(process.env.port,()=>{
  console.log(`server running on the port ${process.env.port}`);
})

process.on('unhandledRejection',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log('shutting down the server due to unhandled rejection');
  server.close(()=>{
      process.exit(1);
  })
})

process.on('uncaughtException',(err)=>{
  console.log(`Error: ${err.message}`);
  console.log('shutting down the server due to uncaughtexception error');
  server.close(()=>{
      process.exit(1);
  })
})
