import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './website/home/Home';
import Book from './website/book/Book';
import Header from './website/header/Header';
import New from './website/new/New';
import Footer from './website/footer/Footer';
import SeeMore from './website/home/SeeMore';
import AboutUs from './website/aboutUs/AboutUs';

function App() {
  return (
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/book' element={<Book/>}></Route>
            <Route path='/new' element={<New/>}></Route>
            <Route path='/SeeMore' element={<SeeMore/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
