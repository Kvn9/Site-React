import '../style/App.css';
import Banniere from './Banniere';
import Produits from './Produits';
import Panier from './Panier';
import Inscrire from './Inscrire';
import Connecter from './Connecter';
import Footer from './Footer';
import Admin from './Admin';
import Admin2 from './ConnexionAdmin';
import Delete from './Delete';
import Supprimer from './Supprimer';
import Edit from './Edit';
import Modifier from './Modifier';
import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Banniere />
      <Routes>
        <Route path="/inscr" element={<Inscrire />} />
        <Route path="/connect" element={<Connecter />} />
        <Route path="/" element={<Produits />} />
        <Route path='/admin' element= {<Admin />} />
        <Route path='/Admin2' element= {<Admin2/>} />
        <Route path='/Delete' element= {<Delete/>} />
        <Route path='/Del/:id' element= {<Supprimer/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/Modifier/:id' element={<Modifier/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
