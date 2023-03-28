// import React from 'react'
// import { useState } from 'react'; // Importation des hooks useState
// import { useForm } from "react-hook-form"; // Importation du hook useForm
// import axios from 'axios'; // Importation de la librairie axios pour effectuer des requêtes HTTP
// import '../style/Connecter.css'; // Importation du fichier CSS
// import { useNavigate } from "react-router-dom"; // Importation de la fonction useNavigate pour naviguer entre les pages de l'application

// export default function Connexion() {
//     const { register, handleSubmit, formState: { errors } } = useForm(); // Déclaration du hook useForm pour gérer le formulaire
//     let navigate = useNavigate(); // Initialisation de la fonction useNavigate

//     const [email, setemail] = useState("") // Initialisation de l'état email à une chaîne vide
//     const [mdp, setMdp] = useState("") // Initialisation de l'état mdp à une chaîne vide

//     // Fonction pour gérer la connexion de l'utilisateur
//     const handleConnexion = async (e) => {
//         e.preventDefault()
//         console.log(e)
//         await axios.post(`http://localhost:8000/connexion2`, { // Envoi d'une requête PUT à l'API
//             email: email, // Ajout de l'adresse email de l'utilisateur dans le corps de la requête
//             mdp: mdp // Ajout du mot de passe de l'utilisateur dans le corps de la requête
//         })
//             .then(res => {
//                 console.log(res)
//                 if (res.status === 200) { // Si la réponse de l'API est un code de statut 200, la connexion est réussie
//                     alert("Connexion réussie") // Affichage d'une alerte pour informer l'utilisateur que la connexion est réussie
//                     navigate("/"); // Redirection vers la page d'accueil
//                 }
//                 else { // Sinon, la connexion a échoué
//                     alert("Erreur de connexion") // Affichage d'une alerte pour informer l'utilisateur que la connexion a échoué
//                 }
//             })
//     }
// function LocalStorage() {
//     localStorage.clear();

//     const ls = LocalStorage;
    
//     ls.setItem("key1", email);
//     ls.setItem("key2", email);
//     ls.setItem("key3", email);

//     return(
//         <div>
//             <span>LocalStorage : </span>
//             <ul>
//                 {Object.keys(ls).map(key => ( 
//                     <li>{key} : {ls.getItem("key2")}</li>
//                 ))}
//             </ul>

//             <p>Valeur de "key2" : {ls.getItem("key")}</p>
//         </div>
//     );   
// }

//     // Rendu du composant
//     return (
//         <div className='container' style={{ marginTop:'200px'}}>
//             <h2> Connexion </h2>

//             <form className='form' onSubmit={handleConnexion}>
//                 <label>Adresse email </label>
//                 <input {...register("email", { required: true })} onChange={(e) => setemail(e.target.value)} />

//                 <label>Mot de passe </label>
//                 <input type="password" {...register("mdp", { required: true })} onChange={(e) => setMdp(e.target.value)} />

//                 {(errors.email || errors.mdp) ? <span>Tous les champs doivent être remplis</span> : ""}

//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }
import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../style/Connecter.css';
import { useNavigate } from "react-router-dom";

export default function Connexion() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [email, setemail] = useState("")
    const [mdp, setMdp] = useState("")
    const ls = localStorage;
    ls.clear();

    const handleLocalStorage = () => {
        localStorage.setItem("email", email);
    }

    const handleConnexion = async (e) => {
        e.preventDefault()
        console.log(e)
        await axios.post(`http://localhost:8000/connexion2`, {
            email: email,
            mdp: mdp,
        })
        .then(res => {
            console.log(res)
            if (res.status === 200) { // Si la réponse de l'API est un code de statut 200, la connexion est réussie
                alert("Connexion réussie") // Affichage d'une alerte pour informer l'utilisateur que la connexion est réussie

                ls.setItem ("email", res.data.email);
                // ls.setItem ("role", res.data.role);
                console.log(res.data)

                // if (res.data.role === 1 ){
                //     navigate("/Admin"); // Redirection vers la page d'accueil
                // }

                // if (res.data.role === 0){
                //     navigate("/produits"); // Redirection vers la page d'accueil
                // }
            }
            else { // Sinon, la connexion a échoué
                alert("Erreur de connexion") // Affichage d'une alerte pour informer l'utilisateur que la connexion a échoué
            }
        })
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

                <input type="submit" />
            </form>
        </div>
    )}
