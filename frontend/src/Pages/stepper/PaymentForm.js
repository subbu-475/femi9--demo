import axios from "axios";
import { useState } from "react";
import API_URL from '../../config/global';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import React, { useContext, useEffect } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';



const PaymentProcessing = ({ open }) => {
	return (
		<Dialog open={open}>
			<DialogContent sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
				<CircularProgress color="success" />
				<p>Processing payment...</p>
			</DialogContent>
		</Dialog>
	);
};

function Payment() {

	const [btnSubmit, setBtnSubmit] = useState(false);
	const [openAlertorderPlaced, setOpenAlertorderPlaced] = useState(false);
	const [alertMessageorderPlaced, setAlertMessageorderPlaced] = useState();

	const [processing, setProcessing] = useState(false);
	const [paynow, setPaynow] = useState(false);

	const navigate = useNavigate();




	const sendRegistration = async () => {
		console.log("picked")
		setPaynow(true);
		setBtnSubmit(true);
		setProcessing(true);

	
		await registerUser("response?.razorpay_payment_id");
		setProcessing(false);
		setPaynow(false);
		// try {
		// 	// Fetch the checkout details
		// 	const orderUrl = `${API_URL}/api/payment/orders`;
		// 	const res = await axios.post(orderUrl, { amount: totalAmount + 50 });
		// 	console.log(res.data)

		// 	// Construct options for Razorpay
		// 	var options = {
		// 		key: "rzp_test_HQ3xaLGAC0SGra",
		// 		amount: Number(res?.data?.data?.amount),
		// 		currency: "INR",
		// 		name: "Femi9",
		// 		description: "Order Transaction",
		// 		order_id: res?.data?.id,
		// 		handler: async function (response) {
		// 			try {

		// 				alert("Payment successful!");
		// 				setProcessing(true);



		// 				await registerUser(response?.razorpay_payment_id);
		// 				setProcessing(false);



		// 				setOpenAlertorderPlaced(true);
		// 				setAlertMessageorderPlaced("Order Placed Succesfully!");


		// 			} catch (error) {
		// 				console.error("Error occurred after payment success:", error);
		// 				// Handle any errors that occur after successful payment
		// 			}
		// 		},
		// 		// callback_url: "http://localhost:8004/api/verificationrazorpaystatus",
		// 		prefill: {
		// 			"email": "femi9womens@gmail.com",
		// 			"contact": "8124337451"
		// 		},
		// 		notes: {
		// 			"address": "Razorpay Corporate Office"
		// 		},
		// 		theme: {
		// 			"color": "black"
		// 		}
		// 	};


		// 	var razorpaycard = new window.Razorpay(options);


		// 	razorpaycard.open();
		// 	setBtnSubmit(false);




		// 	razorpaycard.on('payment.failed', function (response) {

		// 		console.log("Payment failed!");
		// 		setBtnSubmit(false);
		// 		console.log(response.error.code);
		// 		console.log(response.error.description);

		// 	});

		// } catch (error) {
		// 	setBtnSubmit(false);
		// 	console.error("Error occurred:", error);

		// }
	};

	const registerUser = async (paymentid) => {

		try {
			// Use Promise.all to wait for all async operations to complete
			await Promise.all(cartItems.map(async (data) => {
	
				await axios.post(`${API_URL}/checkout/orders`, {
					clientname: `${userData?.firstname} ${userData?.lastname}`,
					firstname: userData?.firstname,
					lastname: userData?.lastname,
					email: userData?.email,
					mobile: userData?.mobile,
					doorno: userData?.doorno,
					street: userData?.street,
					landmark: userData?.landmark,
					city: userData?.city,
					district: userData?.district,
					state: userData?.state,
					pincode: userData?.pincode,
					country: userData?.country,
					// razorpaypaymentid: paymentid,
					productname: data?.name,
					userid: data?.userid,
					image: data?.image,
					type: data?.type,
					size: data?.size,
					vendor: data?.vendor,
					quantity: data?.quantity,
					productid: data?.productid,
					totalprice: data?.totalprice,
				});

				await axios.post(`${API_URL}/checkout/orders/sendmailtoclient`, {
					clientname: `${userData?.firstname} ${userData?.lastname}`,
					email: userData?.email,
					mobile: userData?.mobile,
					doorno: userData?.doorno,
					street: userData?.street,
					landmark: userData?.landmark,
					city: userData?.city,
					district: userData?.district,
					state: userData?.state,
					pincode: userData?.pincode,
					country: userData?.country,
					// razorpaypaymentid: paymentid,
					productname: data?.name,
					userid: data?.userid,
					image: data?.image,
					type: data?.type,
					size: data?.size,
					vendor: data?.vendor,
					quantity: data?.quantity,
					productid: data?.productid,
					totalprice: data?.totalprice,
				});

				await axios.post(`${API_URL}/checkout/orders/sendmailtoseller`, {
					clientname: `${userData?.firstname} ${userData?.lastname}`,
					email: userData?.email,
					mobile: userData?.mobile,
					doorno: userData?.doorno,
					street: userData?.street,
					landmark: userData?.landmark,
					city: userData?.city,
					district: userData?.district,
					state: userData?.state,
					pincode: userData?.pincode,
					country: userData?.country,
					razorpaypaymentid: paymentid,
					productname: data?.name,
					userid: data?.userid,
					image: data?.image,
					type: data?.type,
					size: data?.size,
					vendor: data?.vendor,
					quantity: data?.quantity,
					productid: data?.productid,
					totalprice: data?.totalprice,
				});

				await axios.delete(`${API_URL}/cart/cartitem/${data._id}`);
			}));

		} catch (err) {
			console.log(err); // Log the error object for debugging
			let errorMessage = err.response?.data?.message || "Something went wrong!";
			setOpenAlertLogin(true);
			setAlertMessageLogin(errorMessage);
		}
	}

	const sendMailToSeller = async (paymentid) => {

		try {
			// Use Promise.all to wait for all async operations to complete
		

			await Promise.all(cartItems.map(async (data) => {

				
				await axios.post(`${API_URL}/checkout/orders/sendmailtoseller`, {
					clientname: `${userData?.firstname} ${userData?.lastname}`,
					email: userData?.email,
					mobile: userData?.mobile,
					doorno: userData?.doorno,
					street: userData?.street,
					landmark: userData?.landmark,
					city: userData?.city,
					district: userData?.district,
					state: userData?.state,
					pincode: userData?.pincode,
					country: userData?.country,
					razorpaypaymentid: paymentid,
					productname: data?.name,
					userid: data?.userid,
					image: data?.image,
					type: data?.type,
					size: data?.size,
					vendor: data?.vendor,
					quantity: data?.quantity,
					productid: data?.productid,
					totalprice: data?.totalprice,
				});
			}))







		} catch (err) {
			console.log(err); // Log the error object for debugging
			let errorMessage = err.response?.data?.message || "Something went wrong!";
			setOpenAlertLogin(true);
			setAlertMessageLogin(errorMessage);
		}
	}

	const deleteItems = async (paymentid) => {
		try {
			// Use Promise.all to wait for all async operations to complete
			await Promise.all(cartItems.map(async (data) => {


			}));




		} catch (err) {
			console.log(err); // Log the error object for debugging
			let errorMessage = err.response?.data?.message || "Something went wrong!";
			setOpenAlertLogin(true);
			setAlertMessageLogin(errorMessage);
		}
	}




	const [alertMessageLogin, setAlertMessageLogin] = useState();
	const [totalAmount, setTotalAmount] = useState(0);
	const [userData, setUserData] = useState({});
	const [cartItems, setCartItems] = useState([]);
	const [openAlertLogin, setOpenAlertLogin] = useState(false);

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
				console.log(sum)
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

	useEffect(() => {
		getCartItemsByUser();
	}, []);

	return (
		<div className="razorpay-payment">
			<div className="book_container">
				<img src='./logo192.png' alt="book_img" className="book_img" />
				<p className="book_name">Sanitary Pads</p>
				<p className="book_author">By Femi9</p>
				<p className="book_price">
					Price : <span>&#x20B9; {totalAmount + 50}</span>
				</p>
				<Button onClick={sendRegistration} className="buy_btn" disabled={paynow}>
					Pay now
				</Button>
			</div>
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
					<Button onClick={() => { setOpenAlertorderPlaced(false); navigate("/placedorders"); }} style={{ color: 'white', background: "green" }}>Close</Button>
				</DialogActions>
			</Dialog>
			<PaymentProcessing open={processing} />

		</div>
	);
}

export default Payment;
