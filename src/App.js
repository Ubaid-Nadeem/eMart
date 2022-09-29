import logo from './logo.svg';
import './App.css';
import Home from './Components/HomePage/home';
import PaymentMethods from './Components/Cart/cart';
import NavBar from './Components/Navbar/navbar';
import ViewProduct from './Components/ProductDetails/productdetails';
import LandscapeProduct from './Components/landscapeProduct/product';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import Home from './Components/HomePage/home';
import Checkout from './Components/Checkout/checkout';
import { AppProvider } from './Context/context';

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDh9paPz6DLSrubmgwIiV1HZR0mwKfzWSY",
    authDomain: "emart-db309.firebaseapp.com",
    projectId: "emart-db309",
    storageBucket: "emart-db309.appspot.com",
    messagingSenderId: "386275549090",
    appId: "1:386275549090:web:32752d5f6989e5bb0c5cfb",
    measurementId: "G-DX8MYFFQ46"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



  return (
    <div className="App">
      <AppProvider>
          <NavBar />
          {/* <ViewProduct/> */}
          <Home />
          {/* <Checkout /> */}
        </AppProvider>

    </div>
  );
}

export default App;
