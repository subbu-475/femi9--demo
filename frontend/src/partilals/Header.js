import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope,faBars,faXmark } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [searchText,setSearchText]=useState("");
    const [hamburgerMenu,setHamburgerMenu]=useState(false);
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setSearchText(e.target.value);
        console.log(searchText);
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        navigate(`/search/${searchText}`)
        //const response=await axios.get(`${API_URL}/recipies?keyword=${searchText}`);
        //const data=response.data;
    }
  return (
    <>
        <header className="py-3 mb-4 border-bottom header">
            {/* <div className='hamburger-icon' onClick={()=>setHamburgerMenu(true)}><FontAwesomeIcon icon={faBars} style={{color: "#f9a620",}} size="2x"/></div> */}
            <div className='side-bar' style={hamburgerMenu?{display:'block'}:{display:'none'}}>
                <ul className="nav me-auto" >
                    {/* <li className="nav-item" onClick={()=>setHamburgerMenu(false)} style={{'fontWeight':'600','fontSize':'1.2rem'}}><FontAwesomeIcon icon={faXmark} style={{color: "#000",}} size="2x"/></li> */}
                    <li className="nav-item" style={{'fontWeight':'600','fontSize':'1.2rem'}}><Link to={'/'} className="nav-link link-body-emphasis px-2 active" aria-current="page">Home</Link></li>
                    <li className="nav-item" style={{'fontWeight':'600','fontSize':'1.2rem'}}><Link to={'/'} className="nav-link link-body-emphasis px-2">Categories</Link></li>
                    <li className="nav-item" style={{'fontWeight':'600','fontSize':'1.2rem'}}> <a  href='https://subbu-portfolio.netlify.app' target='_blank' className="nav-link link-body-emphasis px-2">About</a></li>
                    <li className="nav-item" style={{'fontWeight':'600','fontSize':'1.2rem'}}><Link to={'/login'} className="nav-link link-body-emphasis px-2">Login</Link></li>
                    <li className="nav-item" style={{'fontWeight':'600','fontSize':'1.2rem'}}><Link to={'/signup'} className="nav-link link-body-emphasis px-2">Sign up</Link></li>
                </ul>
            </div>
            <nav className="py-2 border-bottom header-content hamburger-menu-set">
                <div className="d-flex flex-wrap">
                <ul className="nav me-auto">
                    <li className="nav-item" style={{'fontWeight':'600','fontSize':'1.2rem'}}><Link to={'/'} className="nav-link link-body-emphasis px-2 active" aria-current="page">Home</Link></li>
                    <li className="nav-item" style={{'fontWeight':'600','fontSize':'1.2rem'}}><Link to={'/'} className="nav-link link-body-emphasis px-2">Categories</Link></li>
                    <li className="nav-item" style={{'fontWeight':'600','fontSize':'1.2rem'}}><a  href='https://subbu-portfolio.netlify.app' target='_blank' className="nav-link link-body-emphasis px-2">About</a></li>
                </ul>
                <ul className="btns">
                    <li className="nav-item head-login-btn"><Link to={'/login'} className="nav-link ">Login</Link></li>
                    <li className="head-signup-btn"><Link to={'/signup'} className="nav-link ">Sign up</Link></li>
                </ul>
                </div>
            </nav>
                <div className="d-flex flex-wrap justify-content-center">
                <Link to ={'/'} className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4"><span className='heading-span1'>Receipe</span><span className='heading-span'>Book</span></span>
                </Link>
                <form className="col-12 col-lg-auto mb-3 mb-lg-0 form-details" role="search" onSubmit={handleSubmit}>
                    <input type="search" className="" onChange={handleChange} placeholder="Search..." aria-label="Search" value={searchText}/>
                    <button type='submit' className='search-btn'><i className="fa fa-search"></i></button>
                </form>
                </div>
        </header>
    </>
    
  )
}

export default Header;