
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home/Home';
import Blog from './Component/Blog/Blog';
import About from './Component/About/About';
import PDetails1 from './Component/PDetails1/PDetails1'
import PDetails2 from './Component/PDetails2/PDetails2'
import PDetails3 from './Component/PDetails3/PDetails3'
import Contract from './Component/Home/Contract/Contract';
import Footer from './Component/Footer/Footer'



function App() {
  return (
    <div className='mx-auto px-5'>
      <Header/>
     
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='home' element={<Home/>}/>
<Route path='about' element={<About/>}/>
<Route path='contract' element={<Contract/>}/>

<Route path='PDetails1' element={<PDetails1/>}/>
<Route path='PDetails2' element={<PDetails2/>}/>
<Route path='PDetails3' element={<PDetails3/>}/>
<Route path='blog' element={<Blog/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
