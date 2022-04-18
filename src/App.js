import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
