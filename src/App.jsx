
import Navbar from './components/Navbar';
import Footer from './Footer/Footer';
import './App.css';
import Home from "./Home/Home";
import About from "./About/About"
import Account from "./Account/Account"
import Contact from "./Contact/Contact"
import AllProduct from "./AllProduct/AllProduct"
import Cart from './Cart/Cart';
import SuccessPage from './Account/SuccessPage';
import SuccessRegister from './Account/SuccessRegister';
import PlaceOrder from './Cart/PlaceOrder';
import PaymentConfirmation from './Cart/PaymentConfirmation';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <>
    <div className='App'>

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/About" element={<About />} />     
        <Route path="/account" element={<Account />} />  
        <Route path="/Contact" element={<Contact />} />  
        <Route path="/Product" element={<AllProduct />} />  
        <Route path="/Cart" element={<Cart />} />  
        <Route path="/success" element={<SuccessPage />} />  
        <Route path="/SuccessRegister" element={<SuccessRegister />} /> 
        <Route path="/PlaceOrder" element={<PlaceOrder />} />  
        <Route path="/PaymentConfirmation" element={<PaymentConfirmation />} />  
      </Routes>  
    </Router>
    
    </div>
    <div>
    <hr />
    <Footer/>
    </div>
    </>
  );
}

export default App;
