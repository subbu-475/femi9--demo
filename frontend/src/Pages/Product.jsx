import React, { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import axios from 'axios'
import API_URL from '../config/global';
import { Button, Grid, Typography, Paper, OutlinedInput, InputLabel, FormControl, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const [products, setProducts] = useState({});
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState();
  const product = all_product.find((e) => e.id === Number(productId));
  const id=useParams().productId;



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await axios.get(`${API_URL}/master/products/${id}`);
        setProducts({...res?.data})
      } catch (err) {
        setOpenAlert(true);
        setAlertMessage("something went wrong!")
        return;
      }
    };

    fetchProduct();
  }, []);
  return (
    <div>

      <br />
      <br />
      <br />
      <br />
      <ProductDisplay product={products} />
      <DescriptionBox />
      <RelatedProducts />
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

export default Product
