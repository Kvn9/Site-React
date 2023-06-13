import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/Connecter.css';
import { useNavigate } from "react-router-dom";

export default function Connexion() {
    const { register,  formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [email, setemail] = useState("")
    const [mdp, setMdp] = useState("")
    const [role, setrole] = useState("")
    const ls = localStorage;
    ls.clear();

    
const handleLocalStorage = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("role", role);
}

const handleConnexion = async (e) => {
    e.preventDefault();
    console.log(e);
    await axios.post(`http://localhost:8000/connexion2`, {
        email: email,
        mdp: mdp,
        role: role,
    })
    .then(res => {
        console.log(res);
        if (res.status === 200) {
            alert("Connexion réussie");

            handleLocalStorage(); // Appeler la fonction pour stocker les données dans le localStorage

            console.log(res.data);

            const userRole = parseInt(res.data.role); // Convertir le rôle en nombre

            if (userRole === 1) {
                navigate("/Admin2");
            }

            if (userRole === 0) {
                navigate("/");
            }
        }
        else {
            alert("Erreur de connexion");
        }
    });
}
    // Rendu du composant
    return (
        <div className='container' style={{ marginTop:'200px'}}>
            <h2> Connexion </h2>

            <form className='form' onSubmit={handleConnexion}>
                <label>Adresse email </label>
                <input {...register("email", { required: true })} onChange={(e) => setemail(e.target.value)} />

                <label>Mot de passe </label>
                <input type="password" {...register("mdp", { required: true })} onChange={(e) => setMdp(e.target.value)} />

                {(errors.email || errors.mdp) ? <span>Tous les champs doivent être remplis</span> : ""}

                <input type='submit'/>
            </form>
        </div>
    )}