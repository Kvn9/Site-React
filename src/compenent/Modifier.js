import React from 'react'

import { useForm } from "react-hook-form";

import { Link } from 'react-router-dom';

import { useParams, useNavigate } from "react-router-dom";

import { useEffect, useState } from 'react';

import axios from 'axios';




export default function ModifierArticles() {
    
    const { handleSubmit, formState: { errors } } = useForm();
    let { id } = useParams();
     let navigate = useNavigate();

 // Fonction pour supprimer la question en envoyant une requête DELETE au backend

    const ModifierArticles = async () => {

        await axios.put(`http://localhost:8000/Modifier/` + id)

         .then(res => {
    
        console.log(res);

    setNom(res.data[0].nom)
    setPrix(res.data[0].prix)
    setQuantite(res.data[0].quantite)
    
    if (res.status === 200) {
         alert("Modification réussie");
         navigate("/produits");

     }

 else {
 alert("Erreur de modification");
 }

 });

}
 const [nom, setNom] = useState("")
 const [img, setImg] = useState("")
 const [prix, setPrix] = useState("")
 const [quantite, setQuantite] = useState("")


 const editQuestion = async () => {
    await axios.put(`http://localhost:8000/Modifier/` + id, {
    nom: nom,
    img: img,
    prix: prix,
    quantite: quantite,
 })
 .then(res => {
     console.log(res)
    if (res.status === 200) {
     alert("Modification réussi")
    navigate("/");
}

else {

 alert("Erreur d'envoi")


}

 })

}

    useEffect(() => {   
     ModifierArticles()

 }, [])

 return (

    <div className='container'>

 <h2> Modifier un Article </h2> 

 <form onSubmit={handleSubmit(editQuestion)}> 

 <label>Nom </label> 
 <input defaultValue={nom} onChange={(e) => setNom(e.target.value)} /> 

 <label>Image </label>
 <input defaultValue={img} onChange={(e) => setImg(e.target.value)} />

 <label>Prix </label>
 <input defaultValue={prix} onChange={(e) => setPrix(e.target.value)} />

 <label>Quantité </label> 
 <input defaultValue={quantite} onChange={(e) => setQuantite(e.target.value)} />

 {(errors.Nom || errors.Img || errors.Prix || errors.Quantite) ? <span>Tous les champs doivent être remplis</span> : ""} 

 <input type="submit" />
</form>



 </div>

 )

}