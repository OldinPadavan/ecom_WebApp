import logo from './logo.svg';
import './App.css';
import NavigationBar from './customer/components/NavigationBar/NavigationBar';
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductInfo from './customer/components/ProductInfo/ProductInfo';
import Cart from './customer/components/Cart/Cart';
import OrderCreating from './customer/components/OrderCreating/OrderCreating';

function App() {
  return (
    <div className="App">
    <div>
    <NavigationBar/>
    </div>
    <div>
    {/*<HomePage/>*/}
    {/*<Product/>*/}
    {/*<ProductInfo/>*/}
    {/*<Cart/>*/}
    <OrderCreating/>
    </div>
    <div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
