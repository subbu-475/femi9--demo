import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import axios from 'axios'; // Import axios for HTTP requests
import API_URL from '../config/global';



const PlacedOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch placed orders data
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API_URL}/checkout/orders`); // Replace 'your_api_endpoint' with your actual endpoint
        setOrders(response?.data?.orders);
      } catch (error) {
        console.error('Error fetching placed orders:', error);
      }
    };

    fetchOrders();
  }, []); // Run once when component mounts

  return (
    <Container>
      <br />
      <br />
      <br />
      {orders.length > 0 ?
        <>
          <Box mt={4}>
            <Typography variant="h4" gutterBottom sx={{ color: "#12372A", fontSize: '2rem', fontWeight: 'bold' }}>
              Placed Orders
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Items</TableCell> {/* Add column for items */}
                    <TableCell>Order ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Delivery Address</TableCell> {/* New column for delivery address */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <Grid container spacing={2}>
                          <Grid item>
                            <Box display="flex" alignItems="center">
                              <img src={order.image} alt={order.image} style={{ width: 50, height: 50, marginRight: 10 }} />
                              <Typography>{order.name}</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell>{order._id}</TableCell>
                      <TableCell>{order.date.substring(0, 10)}</TableCell>
                      <TableCell>{"Not Delivered"}</TableCell>
                      <TableCell>Rs.{order.totalprice}</TableCell>
                      <TableCell>
                        <Typography variant="subtitle1" fontWeight="bold">
                          Delivery Address:
                        </Typography>
                        <Typography>
                          {order.doorno}, {order.street}, {order.city}, {order.district},{order.state},{order.country},{order.pincode}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </> :
        <>
        <br/>
        <br/>
          <Box sx={{ margin: '0 0 10% 0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '0.2%' }} mt={4}>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>There is no order placed.</p>
            <a href='./shop' style={{ background: "green", color: "white", padding: '0.3% 0.8%' }}>Shop here</a>
          </Box>
        </>}

    </Container>
  );
};

export default PlacedOrders;
