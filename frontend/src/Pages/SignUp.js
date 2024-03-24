import React, { useState,useEffect } from 'react';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import '../styles/signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import API_URL from '../config/global';
import Header from '../partilals/Header';
import Footer from '../partilals/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            toast.error("Please fill in all fields.");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/signin/verify`, formData);
            if (response.data === "Mail sent successfully") {
                toast.success('An email sent to your gmail id! Please check and verify!');
                setTimeout(() => {
                    setFormData({
                        name: "",
                        email: "",
                        password: ""
                    });
                    navigate('/login');
                }, 3000); // 3000 milliseconds = 3 seconds
            } else {
                toast.error('User already exists! Please login.');
            }
        } catch (err) {
            console.log(err);
            toast.error("Error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Register</title>
                <link rel="icon" href="/images/user.png" />
            </Helmet>
            <br />
            <br />
            <br />
            <br />


            <Container>
                <h1>Registration Form</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' onChange={handleChange} name='name' value={formData.name} placeholder='Enter a name' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' onChange={handleChange} name='email' value={formData.email} placeholder='Enter a email' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' onChange={handleChange} value={formData.password} placeholder='Enter a password' />
                        <Form.Text className='to-login-text'>Already signedup please click here to login</Form.Text><Link to={'/login'} className='login-text'>Login</Link>
                    </Form.Group>
                    <Button variant='primary' type='submit' className='signup-btn'>
                        {loading ? <Spinner animation="border" size="sm" /> : 'Register'}
                    </Button>
                </Form>
            </Container>
            <ToastContainer />
        </>
    )
}

export default SignUp;
