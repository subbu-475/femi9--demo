
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import UserDetails from './Pages/Userdetails';
import About from '../src/Pages/About';
import Contact from '../src/Pages/Contact';
import PlacedOrders from './Pages/placedorders';
import AddressForm from './Pages/stepper/AddressForm';
import Checkout from './Pages/stepper/Checkout'
import getCheckoutTheme from './Pages/stepper/getCheckoutTheme';
import Info from './Pages/stepper/Info';
import InfoMobile from './Pages/stepper/InfoMobile';
import PaymentForm from './Pages/stepper/PaymentForm';
import Review from './Pages/stepper/Review';
import ToggleColorMode from './Pages/stepper/ToggleColorMode';
import Stepper from './Pages/stepper/stepper'
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RefundPolicy from './Pages/Refundpolilcy';
import TermsAndConditions from './Pages/TermsandConditions';
import ShippingPolicy from './Pages/ShippingPolicy';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Shop />} />
          <Route path='/shop' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/placedorders' element={<PlacedOrders/>} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/addressform' element={<AddressForm />} />
          <Route path='/stepper' element={<Stepper />} />

          <Route path='/signup' element={<Signup />} />
          <Route path='/userdetails/:id' element={<UserDetails />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/refundpolicy' element={<RefundPolicy />} />
          <Route path='/termsandconditions' element={<TermsAndConditions />} />
          <Route path='/shippingpolicy' element={<ShippingPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
