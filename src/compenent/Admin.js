// import React, { useState } from 'react';
// import '../style/Admin.css'
// import { useForm } from "react-hook-form";
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   let navigate = Link();

//   const [id, setId] = useState("")
//   const [nom, setNom] = useState("")
//   const [mdp, setMdp] = useState("")

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (username === 'admin' && password === 'admin') {
//       // Connecter l'utilisateur
//       console.log('Connecté en tant qu\'admin');
//     } else {
//       setError('Nom d\'utilisateur ou mot de passe incorrect.');
//     }
//   }
//   const admin = async () => {
//     await axios.post(`http://localhost:8000/admin`, {
//         id : id,
//         nom: nom,
//         mdp: mdp,
//     })
//         .then(res => {
//             console.log(res)
//             if (res.status === 200) {
//                 alert("Ajout réussi")
//                 navigate("/");
//             }
//             else {
//                 alert("Erreur d'ajout")
//             }
//         })
// }


//   return (
//     <form onSubmit={handleSubmit}>
//       {error && <div>{error}</div>}
//       <div>
//         <label >Nom d'utilisateur</label>
//         <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
//       </div>
//       <div>
//         <label className='label2'>Mot de passe</label>
//         <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//       </div>
//       <br></br>
//       <button type="submit">Se connecter</button>
//       <Link to="/"><input type='button' value='Ajouter un article'/></Link>
//       <Link to="/"><input type='button' value='Supprimer un article'/></Link>
//     </form>
    
//   );
// }

// export default LoginForm;

// import React from 'react'
// import { useState } from 'react';
// import { useForm } from "react-hook-form";
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";


// export default function AjoutArticles() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     let navigate = useNavigate();

//     const [Articles, setArticles] = useState("")
//     const [Image, setImage] = useState("")
//     const [Prix, setPrix] = useState("")


//     const AjoutArticles = async () => {
//         await axios.post(`http://localhost:8000/Ajt`, {
//             Articles: Articles,
//             Image: Image,
//             Prix: Prix
//         })
//             .then(res => {
//                 console.log(res)
//                 if (res.status === 200) {
//                     alert("Ajout réussi")
//                     navigate("/");
//                 }
//                 else {
//                     alert("Erreur d'ajout")
//                 }
//             })
//     }
    

//     return (
//         <div className='container' style={{ marginTop:'200px'}}>
//             <h2> Ajouter un article</h2>

//             <form onSubmit={handleSubmit(AjoutArticles)}>
//                 <label>Articles </label>
//                 <input {...register("Articles", { required: true })} onChange={(e) => setArticles(e.target.value)} />

//                 <label>Lien de l'images </label>
//                 <input {...register("Image", { required: true })} onChange={(e) => setImage(e.target.value)} />

//                 <label>Prix </label>
//                 <input {...register("Prix", { required: true })} onChange={(e) => setPrix(e.target.value)} />

//                 {(errors.Articles || errors.Image || errors.Prix) ? <span>Tous les champs doivent être remplis</span> : ""}

//                 <input type="submit" />
//                 <Link to="/Admin"><input type='button' value='Ajouter un article'/></Link>
//                 <Link to="/Sup"><input type='button' value='Supprimer un article'/></Link>
//             </form>
//         </div>
//     )
// }
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../style/Admin.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Vérifier si les valeurs entrées correspondent aux informations de connexion valides
    if (username === 'Admin' && password === 'Admin') {
      // Naviguer vers la page de tableau de bord
      navigate("/Admin2");
    } else {
      // Afficher un message d'erreur si les informations de connexion sont incorrectes
      setLoginError(true);
    }
  };

  return (
    <div className="login-page-container">
      <h1 className="login-page-heading">Se connecter</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          Nom d'utilisateur:
          <input className="login-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label className="login-label">
          Mot de passe:
          <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {loginError && <p className="login-error">Le nom d'utilisateur ou le mot de passe est incorrect.</p>}
        <button className="login-button" type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginPage;
