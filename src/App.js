import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './componts/Contact';
import Header from './componts/Header';
import Prodactliste from './componts/Prodactliste';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './componts/About';
import Cart from './componts/Cart';
import { useState } from 'react';



function App() {
  const [Sershe, setSershe] = useState('');
  console.log(Sershe);
  
  return (
    <div>
      <Header  setSershe={setSershe} />
      <Routes>
        <Route path="/" element={<Prodactliste Sershe={Sershe}/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
