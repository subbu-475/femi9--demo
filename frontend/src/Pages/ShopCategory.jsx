import React, { useContext, useState, useEffect } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import axios from 'axios'
import { Button, Grid, Typography, Paper, OutlinedInput, InputLabel, FormControl, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import API_URL from '../config/global';
import { Helmet } from 'react-helmet';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const [products, setProducts] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await axios.get(`${API_URL}/master/products`);
        setProducts(res?.data?.products)
      } catch (err) {
        setOpenAlert(true);
        setAlertMessage("something went wrong!")
        return;
      }
    };

    fetchProduct();
  }, []);
  return (

    <div className='shop-category' style={{ marginTop: '0' }}>
      <Helmet>
        <title>Buy Femi9 Products</title>
      </Helmet>
      <br />
      <br />
      <br />
      <br />
      <img className='shopcategory-banner' src={'/banner.jpg'} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {products.length} products</span> out of {products.length} products
        </p>
        {/* <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div> */}
      </div>
      <div className="shopcategory-products">

        {products.map((item, i) => {
          return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.newprice} old_price={item.oldprice} size={item.size} />
        })}


      </div>
      {/* <div className="shopcategory-loadmore">
        Explore More
      </div> */}
      <Dialog
        // fullWidth={true}
        maxWidth='sm'
        open={openAlert}
        onClose={() => setOpenAlert(false)}
      >
        {/* <DialogTitle>Optional sizes</DialogTitle> */}
        <DialogContent sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <ErrorOutlineIcon style={{ fontSize: '50px', color: 'red' }} />
          <br />
          <DialogContentText style={{ color: 'black', fontSize: "1.5rem" }}>
            {alertMessage}
          </DialogContentText>


        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAlert(false)} style={{ color: 'red' }}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ShopCategory
