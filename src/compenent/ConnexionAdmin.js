import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../style/ConnexionAdmin.css';


export default function AjoutArticles() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    let navigate = useNavigate();

    const [nom, setnom] = useState("")
    const [img, setimg] = useState("")
    const [prix, setprix] = useState("")


    const AjoutArticles = async () => {
        await axios.post(`http://localhost:8000/admin`, {
            nom: nom,
            img: img,
            prix: prix
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Ajout réussi")
                    navigate("/");
                }
                else {
                    alert("Erreur d'ajout")
                }
            })
    }
    

    return (
        <div className='container' style={{ marginTop:'200px'}}>
            <h2> Ajouter un article</h2>

            <form onSubmit={handleSubmit(AjoutArticles)}>
                <label>Articles </label>
                <input {...register("Articles", { required: true })} onChange={(e) => setnom(e.target.value)} />
<br></br>

                <label className='label3'>Lien de l'images </label>
                <input {...register("Image", { required: true })} onChange={(e) => setimg(e.target.value)} />
                <br></br>
                <label>Prix </label>
                <input {...register("Prix", { required: true })} onChange={(e) => setprix(e.target.value)} />
                <br></br>
                {(errors.nom || errors.img || errors.prix) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type="submit" />
                <Link to="/Admin2"><input type='button' value='Ajouter un article'/></Link>
                <Link to="/edit"><input type='button' value='Modifier un article'/></Link>
                <Link to="/Delete"><input type='button' value='Supprimer un article'/></Link>
                {/* <Link to="/Sup"><input type='button' value='Supprimer un article'/></Link> */}
            </form>
        </div>
    )
}