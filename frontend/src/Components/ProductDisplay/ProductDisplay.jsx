import React, { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
import { useParams } from 'react-router-dom';
import green from '../Assets/green.jpg'
import blue from '../Assets/blue.jpg'
import red from '../Assets/red.jpg'
import purple from '../Assets/purple.jpg'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import API_URL from '../../config/global';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const ProductDisplay = (props) => {

  const { product } = props;

  const [image, setImage] = useState();
  const { addToCart } = useContext(ShopContext);
  const id = useParams().productId;
  const [products, setProducts] = useState({});
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle quantity decrement
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {


    fetchProduct();
  }, [props]);

  const fetchProduct = async () => {
    try {
      let res = await axios.get(`${API_URL}/master/products/${id}`);
      setProducts(res?.data)
      console.log(res?.data.size)
    } catch (err) {
      setOpenAlert(true);
      setAlertMessage("something went wrong!")
      return;
    }
  };

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
        {/* <div className="productdisplay-img-list">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div> */}
        <div className="productdisplay-img">
          {/* <img className='productdisplay-main-img' src={image} alt="" /> */}
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
        {/* <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div> */}
        {/* <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs.{product?.oldprice}</div>
          <div className="productdisplay-right-price-new">Rs.{product?.newprice}</div>
        </div> */}
        <div className="productdisplay-right-description productdisplay-right-prices">
          <ul className="product-details-list">
            <li>
              <span className="detail-label">Price:</span>
              <span className="detail-value">
                <span className="productdisplay-right-price-new">Rs.{products?.newprice}</span>
                <br />
                {/* <span className="productdisplay-right-price-old">Rs.{products?.oldprice}</span> */}
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
              <span className="detail-value" style={{color:"green"}}>! In Stock</span>
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

        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay
