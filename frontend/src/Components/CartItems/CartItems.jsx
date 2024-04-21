import React, { useContext, useEffect, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import API_URL from '../../config/global';
import DeleteIcon from '@mui/icons-material/Delete';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const CartItems = () => {
  const { getTotalCartAmount, removeFromCart } = useContext(ShopContext);
  const [cartItems, setCartItems] = useState([]);
  const [openAlertLogin, setOpenAlertLogin] = useState(false);
  const [alertMessageLogin, setAlertMessageLogin] = useState();
  const [totalAmount, setTotalAmount] = useState(0);
  const [userData, setUserData] = useState({});

  const [openAlertorderPlaced, setOpenAlertorderPlaced] = useState(false);
  const [alertMessageorderPlaced, setAlertMessageorderPlaced] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getCartItemsByUser = async () => {
    try {
      let token = localStorage.getItem('token');
      let response = await axios.post(`${API_URL}/auth/users`, { token });
      let data = response?.data?.singleUser;
      setUserData(data);

      if (!!token) {
        let respon = await axios.get(`${API_URL}/cart/cartitems`);
        let allCartItems = respon?.data?.items;
        let filteredDataByUserID = allCartItems.filter((data) => data?.userid == response?.data?.singleUser?._id);
        setCartItems(filteredDataByUserID);
        const sum = filteredDataByUserID.reduce((total, item) => total + Number(item.totalprice), 0);
        setTotalAmount(sum);
      } else {
        setOpenAlertLogin(true);
        setAlertMessageLogin("Login Required! Please Login...");
      }
    } catch (err) {
      let errorMessage = err.response?.data?.message || "Something went wrong!";
      setOpenAlertLogin(true);
      setAlertMessageLogin(errorMessage);
    }
  };

  const removeCartItem = async (id) => {
    try {
      let respon = await axios.delete(`${API_URL}/cart/cartitem/${id}`);
      await getCartItemsByUser();

    } catch (err) {
      let errorMessage = err.response?.data?.message || "Something went wrong!";
      setOpenAlertLogin(true);
      setAlertMessageLogin(errorMessage);
    }
  };

  const placeOrder = async () => {
    navigate('/stepper')
    
  };



  useEffect(() => {
    getCartItemsByUser();
  }, []);

  return (
    <div className='cartitems'>
      <br />
      <br />
      <br />
      <br />
      <br />
      {cartItems?.length > 0 ?
        <>
          <Box sx={{ marginLeft: '5%', marginRight: '5%' }}>
            <Typography variant="h4" gutterBottom style={{ fontSize: '2.5rem', fontWeight: 'bolder', color: '#12372A' }}>Cart Items</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Size</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <img src={`/${item.image}`} alt={item.name} className='carticon-product-icon' />
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>Rs. {item.newprice}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>Rs. {item.newprice * item.quantity}</TableCell>
                      <TableCell>
                        <DeleteIcon style={{ color: 'red', cursor: 'pointer' }} onClick={() => removeCartItem(item._id)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
          </Box>



          <Box sx={{ marginLeft: '5%', marginRight: '5%', backgroundColor: '#fff', color: '#12372A', padding: '5% 10%' }}>
            <Typography variant="h6" style={{ fontSize: '2rem', fontWeight: 'bolder', color: '#12372A' }}>Cart Totals</Typography>
            <div>
              <div className="cartitems-total-item">
                <Typography>Subtotal</Typography>
                <Typography>Rs.{totalAmount}</Typography>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <Typography>Shipping Fee</Typography>
                <Typography>Rs.{50}</Typography>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <Typography>Total</Typography>
                <Typography>Rs.{totalAmount + 50}</Typography>
              </div>
            </div>
            <Button variant="contained" style={{ background: 'green' }} fullWidth onClick={placeOrder}>Proceed to Checkout</Button>
          </Box>
        </> :
        <>
          <Box sx={{margin:'0 0 10% 0',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'0.2%'}}>
            <p style={{fontSize:'1.5rem',fontWeight:'bold'}}>There is no item in the cart.</p>
            <a href='./shop' style={{ background: "green", color: "white",padding:'0.3% 0.8%' }}>Shop here</a>
          </Box>

        </>}



      <Dialog open={openAlertLogin} onClose={() => setOpenAlertLogin(false)}>
        <DialogContent>
          <PriorityHighIcon style={{ fontSize: '50px', color: 'orange' }} />
          <br />
          <DialogContentText style={{ color: 'black', fontSize: "1.5rem" }}>{alertMessageLogin}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpenAlertLogin(false); }} style={{ color: 'white', background: "orange" }}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openAlertorderPlaced} onClose={() => setOpenAlertorderPlaced(false)}>
        <DialogContent>
          <CheckCircleOutlineIcon style={{ fontSize: '50px', color: 'green' }} />
          <br />
          <DialogContentText style={{ color: 'black', fontSize: "1.5rem" }}>{alertMessageorderPlaced}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpenAlertorderPlaced(false); }} style={{ color: 'white', background: "green" }}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CartItems;
