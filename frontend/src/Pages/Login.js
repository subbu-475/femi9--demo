import React, { useEffect, useState } from 'react';
import { Container, Form, Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/login.css';
import axios from 'axios';
import API_URL from '../config/global';
import Header from '../partilals/Header';
import Footer from '../partilals/Footer';

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
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
        if (!formData.email || !formData.password) {
            toast.error("Please fill in all fields.");
            return;
        }
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}/login`, formData);
            if (response.data.status === true) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            } else {
                toast.error(response.data);
            }
        } catch (err) {
            console.log(err);
            toast.error("Server error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login</title>
                <link rel="icon" href="/images/user.png" />
            </Helmet>
            <br />
            <br />
            <br />
            <br />

            <Container>
                <h1 className='login-heading'>Login Form</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={handleChange} type='email' name='email' value={formData.email} placeholder='Enter a email' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' onChange={handleChange} name='password' value={formData.password} placeholder='Enter a password' />
                    </Form.Group>
                    <Form.Text>New user please<Link to={'/signup'} className='signup-text'> Signup</Link></Form.Text>
                    <Button variant='primary' type='submit' className='login-btn' disabled={loading}>
                        {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
                    </Button>
                </Form>
            </Container>
            <ToastContainer />
        </>
    );
}

export default Login;
