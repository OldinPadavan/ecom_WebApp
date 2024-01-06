import logo from './logo.svg';
import './App.css';
import NavigationBar from './customer/components/NavigationBar/NavigationBar';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductInfo from './customer/components/ProductInfo/ProductInfo';
import Cart from './customer/components/Cart/Cart';
import Order from './customer/components/Order/Order';
import OrderCreating from './customer/components/OrderCreating/OrderCreating';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './customer/Route/CustomerRoutes';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/*' element={<CustomerRoutes/>}></Route>
    </Routes>

 

    </div>
  );
}

export default App;
