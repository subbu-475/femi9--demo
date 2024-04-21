import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import API_URL from '../../config/global';

const Navbar1 = () => {



  const [menu, setMenu] = useState("shop");
  const [isUserAuthenticated, setIsUserAuthenticated] = useState("false");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const [userDetails, setUserDetails] = useState({});

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  const [cartCount, setCartCount] = useState(0); // State to manage cart count

  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem('token');
      if (!!token) {
        try {
          let response = await axios.post(`${API_URL}/auth/users`, { token });
          let data = response?.data?.singleUser;
          setUserDetails({
            ...userDetails,
            ...data,
          });
          let respon = await axios.get(`${API_URL}/cart/cartitems`);
          let allCartItems = respon?.data?.items;
          let filteredDataByUserID = allCartItems.filter(
            (data) => data?.userid == response?.data?.singleUser?._id
          );
          setCartCount(filteredDataByUserID?.length); // Update cart count
        } catch (error) {
          console.error(error);
        }
      }
      setIsUserAuthenticated(!!token);
    };

    fetchData();
  }, [localStorage.getItem('token')]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem('token');
    setIsUserAuthenticated(false);
    navigate('/');
  }

  return (


    <>
      <Navbar expand="lg" className="bg-body-tertiary mt-0">
        <Container fluid className="mt-0">
          <Navbar.Brand href="/" onClick={() => { setMenu("shop") }}>
            <img src={logo} alt="Logo" id='img-logo' style={{ width: '150px' }} /> {/* Adjust the width as per your requirement */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => { e.target.style.color = '#b58b69' }} onMouseLeave={(e) => e.target.style.color = '#12372A'}>Home</Nav.Link>
              <Nav.Link href="/shop" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.color = '#b58b69'} onMouseLeave={(e) => e.target.style.color = '#12372A'}>Shop</Nav.Link>
              <Nav.Link href="/about" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.color = '#b58b69'} onMouseLeave={(e) => e.target.style.color = '#12372A'}>About</Nav.Link>
              <Nav.Link href="/contact" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.color = '#b58b69'} onMouseLeave={(e) => e.target.style.color = '#12372A'}>Contact</Nav.Link>

              {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <div className="nav-login-cart">
              {isUserAuthenticated ?
                <>

                  <NavDropdown title={userDetails.name?.substring(0, 10)} id="get-name">
                    <NavDropdown.Item href={`/userdetails/${userDetails._id}`} className='profile-dropdown'>My Account</NavDropdown.Item>
                    <NavDropdown.Item href='/placedorders' className='profile-dropdown'>
                      My orders
                    </NavDropdown.Item>
                    <NavDropdown.Item href='/cart' className='profile-dropdown'>
                      My Cart
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" onClick={handleLogout} className='profile-dropdown'>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                  <div className="nav-cart-count">{cartCount}</div>



                </> :
                <>
                  <Link to='/login'><img src={cart_icon} alt="" /></Link>
                  <div className="nav-cart-count">0</div>
                  <Link to='/login'><button>Login</button></Link>
                </>
              }


            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  )
}

export default Navbar1;