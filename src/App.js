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
import NotFound from './components/NotFound/NotFound';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Course from './components/Course/Course';
import Blogs from './components/Blogs/Blogs';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/home' element={<Home></Home>}></Route>
        <Route exact path='/course' element={<Courses></Courses>}></Route>
        <Route exact path='/course/:courseId' element={
          <RequireAuth>
            <CourseDetails></CourseDetails>
          </RequireAuth>
        }></Route>
        <Route exact path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route exact path='/login' element={<Login></Login>}></Route>
        <Route exact path='/register' element={<Register></Register>}></Route>
        <Route exact path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route exact path='/blogs' element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        }></Route>
        <Route exact path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
