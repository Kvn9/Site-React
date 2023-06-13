import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function EditQuestion() {
    let { id } = useParams()

    const { handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [nom, setNom] = useState("")
    const [prix, setPrix] = useState("")
    const [quantite, setQuantite] = useState("")
    const [img, setImg] = useState("")
    const [affichage, setAffichage] = useState(false);
    const [quiz, setQuiz] = useState([]);

    

    const recup = async () => {
        await axios.get(`http://localhost:8000/produit/`)
            .then(res => {
                setNom(res.data[0].nom)
                setPrix(res.data[0].prix)
                setQuantite(res.data[0].quantite)
                setImg(res.data[0].img)
                setQuiz(res.data);
                setAffichage(true);
            })
    }

    const editQuestion = async () => {
        await axios.put(`http://localhost:8000/produit`, {
            nom: nom,
            prix: prix,
            quantite: quantite,
            img: img,
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Envoie réussi")
                    navigate("/");
                }
                else {
                    alert("Erreur d'envoi")
                }
            })
    }
    
    useEffect(() => {
        recup()
    }, [])

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
                <input type="button" value="Ajouter au Panier" onClick={() => editQuestion(produit)}></input>
                
                <div className='box-footer'>
                  <Link to={'/Modifier/' + produit.id}>Modifier</Link> 
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
