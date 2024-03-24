import React, { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate, useParams } from 'react-router-dom';
import green from '../Assets/green.jpg'
import blue from '../Assets/blue.jpg'
import red from '../Assets/red.jpg'
import purple from '../Assets/purple.jpg'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import API_URL from '../../config/global';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Grid, Typography, Paper, OutlinedInput, InputLabel, FormControl, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';


const ProductDisplay = (props) => {

  const { product } = props;

  const [image, setImage] = useState();
  const { addToCart } = useContext(ShopContext);
  const id = useParams().productId;
  const [products, setProducts] = useState({});
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  const [openAlertLogin, setOpenAlertLogin] = useState(false);
  const [alertMessageLogin, setAlertMessageLogin] = useState();

  const [openAlertExist, setOpenAlertExist] = useState(false);
  const [alertMessageExist, setAlertMessageExist] = useState();

  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle quantity decrement
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [userData, setUserData] = useState({});

  useEffect(() => {


    fetchProduct();
  }, [props]);

  const fetchProduct = async () => {
    try {
      let res = await axios.get(`${API_URL}/master/products/${id}`);
      setProducts(res?.data)

    } catch (err) {
      setOpenAlert(true);
      setAlertMessage("something went wrong!")
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, [])


  const fetchData = async () => {
    let token = localStorage.getItem('token');


    if (!!token) {
      try {
        const response = await axios.get(`${API_URL}/auth/tokeneduser/${token}`);
        const data = response?.data?.singleUser;
        setUserData((prev) => ({
          ...prev, ...data
        }))

      } catch (error) {
        let errorMessage = "Something went wrong!";
        if (error.response && error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
        setOpenAlert(true);
        setAlertMessage(errorMessage);
      }
    }


  };

  const addingToCart = async () => {
    let token = localStorage.getItem('token');
    if (!!token) {
      let response = await axios.get(`${API_URL}/cart/cartitems`);
      let allCartItems = response?.data?.items

      let filteredDataByUserID = allCartItems.filter((data) => data?.userid == userData?._id);

      let sameItemExist = filteredDataByUserID.some((item) => item.productid == products?._id);

      if (!sameItemExist) {
        try {
          let res = await axios.post(`${API_URL}/cart/cartitems`, {
            name: products?.name,
            userid: userData?._id,
            image: products?.image,
            type: products?.type,
            size: products?.size,
            vendor: products?.vendor,
            newprice: products?.newprice,
            quantity: quantity,
            totalprice: quantity * products.newprice,
            productid: products?._id,
          });
          setOpenAlert(true);
          setAlertMessage("Added to the Cart!")
          return;

        }
        catch (err) {
          let errorMessage = "Something went wrong!";
          if (err.response && err.response.data && err.response.data.message) {
            errorMessage = err.response.data.message;
          }
          setOpenAlert(true);
          setAlertMessage(errorMessage);
        }
      } else {
        setOpenAlertExist(true);
        setAlertMessageExist("Item Already Exist in the Cart! Please Check...")
        return;
      }


    } else {
      setOpenAlertLogin(true);
      setAlertMessageLogin("Login Required! Please Login...");
    }


  }


  useEffect(() => {
    if (products?.image) {
      let imageName = products.image.split('.')[0];
      switch (imageName) {
        case 'blue':
          setImage(blue);
          break;
        case 'red':
          setImage(red);
          break;
        case 'green':
          setImage(green);
          break;
        case 'purple':
          setImage(purple);
          break;
        default:
          // Handle the case where imageName doesn't match any of the cases
          setImage(null);
          break;
      }
    }
  }, [products, setImage]);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">

        <div className="productdisplay-img">

          <Carousel data-bs-theme="dark" interval={2000}>
            <Carousel.Item>
              <img
                className="d-block w-100 zoomable"
                src={image}
                alt="First slide"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 zoomable"
                src="/padss.jpg"
                alt="Second slide"
              />

            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product?.name}</h1>
        <div className="productdisplay-right-description productdisplay-right-prices">
          <ul className="product-details-list">
            <li>
              <span className="detail-label">Price:</span>
              <span className="detail-value">
                <span className="productdisplay-right-price-new">Rs.{products?.newprice}</span>
                <br />

              </span>
            </li>
            <li>
              <span className="detail-label">Size:</span>
              <span className="detail-value" style={{ border: '1px solid green', padding: '2px' }}>{products?.size}</span>
            </li>
            <li>
              <span className="detail-label">Vendor:</span>
              <span className="detail-value">{products?.vendor}</span>
            </li>
            <li>
              <span className="detail-label">Type:</span>
              <span className="detail-value">{products?.type}</span>
            </li>
            <li>
              <span className="detail-label">Availability:</span>
              <span className="detail-value" style={{ color: "green" }}>! In Stock</span>
            </li>
            <li>
              <span className="detail-label">Quantity:</span>

              <span className="detail-value">
                <RemoveIcon className='minus-icon' onClick={decrementQuantity} />
                {quantity}
                <AddIcon className='plus-icon' onClick={incrementQuantity} />
              </span>
            </li>
          </ul>
        </div>

        <button onClick={addingToCart} style={{ padding: '5%' }}>ADD TO CART</button>
      </div>
      <Dialog
        // fullWidth={true}
        maxWidth='sm'
        open={openAlert}
        onClose={() => setOpenAlert(false)}
      >
        {/* <DialogTitle>Optional sizes</DialogTitle> */}
        <DialogContent sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <CheckCircleOutlineIcon style={{ fontSize: '50px', color: 'green' }} />
          <br />
          <DialogContentText style={{ color: 'black', fontSize: "1.5rem" }}>
            {alertMessage}
          </DialogContentText>


        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAlert(false)} style={{ color: 'white', background: "green" }}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        // fullWidth={true}
        maxWidth='sm'
        open={openAlertLogin}
        onClose={() => setOpenAlertLogin(false)}
      >
        {/* <DialogTitle>Optional sizes</DialogTitle> */}
        <DialogContent sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <PriorityHighIcon style={{ fontSize: '50px', color: 'orange' }} />
          <br />
          <DialogContentText style={{ color: 'black', fontSize: "1.5rem" }}>
            {alertMessageLogin}
          </DialogContentText>


        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setOpenAlertLogin(false);
            navigate('/login');
          }
          } style={{ color: 'white', background: "orange" }}>Login</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        // fullWidth={true}
        maxWidth='sm'
        open={openAlertExist}
        onClose={() => setOpenAlertExist(false)}
      >
        {/* <DialogTitle>Optional sizes</DialogTitle> */}
        <DialogContent sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <PriorityHighIcon style={{ fontSize: '50px', color: 'orange' }} />
          <br />
          <DialogContentText style={{ color: 'black', fontSize: "1.5rem" }}>
            {alertMessageExist}
          </DialogContentText>


        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            setOpenAlertExist(false);
          }
          } style={{ color: 'white', background: "orange" }}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ProductDisplay
