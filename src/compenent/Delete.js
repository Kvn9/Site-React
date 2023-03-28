import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/Produits.css';
import UserInfo from './UserInfo'
import Pannier from "../compenent/Panier";
import { Button } from "bootstrap";


export default function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [affichage, setAffichage] = useState(false);
  const [panier, setPanier] = useState([]);
  const [total, setTotal] = useState(0); // Ajout d'un état pour le total initialisé à 0

  const handlePayer = () => {
    // Stockage du panier dans le local storage
    localStorage.setItem('panier', JSON.stringify(panier));
  
    // Redirection vers une nouvelle page
    window.location.href = "/delete";
  };

  

  const recup = async () => {
    await axios
      .get(`http://localhost:8000/produit`)
      .then((res) => {
        console.log(res);
        setQuiz(res.data);
        setAffichage(true);
      });
  };

  useEffect(() => {
    recup();
  }, []);

  const ajouterAuPanier = (produit) => {
    setPanier([...panier, produit]);
  };

  const calculerTotal = () => {
    let total = 0;
    panier.forEach((produit) => {
      total += produit.prix;
    });
    setTotal(total);
  };

  useEffect(() => {
    calculerTotal();
  }, [panier]);

  // Fonction pour supprimer un produit du panier
  const supprimerDuPanier = (produit) => {
    // On vérifie si le produit est déjà dans le panier
    const produitIndex = panier.findIndex((p) => p.id === produit.id);
    if (produitIndex >= 0) {
      // Si le produit est déjà dans le panier, on le supprime
      const nouveauPanier = [...panier];
      nouveauPanier.splice(produitIndex, 1);
      setPanier(nouveauPanier);
    }
  };

  // Fonction pour enregistrer le panier dans le localStorage
  const payerPanier = () => {
    const produitsPanier = panier.map((produit) => ({ nom: produit.nom, prix: produit.prix }));
    localStorage.setItem('panier', JSON.stringify(produitsPanier));
    alert('Paiement effectué avec succès!');
    setPanier([]); // On vide le panier après le paiement
    setTotal(0); // On réinitialise le total à 0 après le paiement
  };

  return (
      <div className="body">
        <h2>Les produits</h2>
        <div className="box">
          {affichage ? (
            quiz.map((produit) => (
              <div className="Contenu" style={{ marginTop: '200px' }}>
                <div className="box-title">
                  {produit.nom} {produit.prix} €
                </div>
                <div className="box-body">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${produit.img}`}
                    width="200px"
                  />
                  <input type="button" value="Ajouter au Panier" onClick={() => ajouterAuPanier(produit)}></input>
                  
                  <div className='box-footer'>
                    <Link to={'/Del/'+ produit.id}>Supprimer</Link> 
                    </div>
                </div>
              </div>
            ))
          ) : (
            <p>Chargement...</p>
          )}
        </div>
      </div>
    );
    }