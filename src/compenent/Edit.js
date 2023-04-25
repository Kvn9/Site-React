// import React from 'react'
// import { useForm } from "react-hook-form";
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from "react-router-dom";
// import axios from 'axios';


// export default function EditQuestion() {
//     let { id } = useParams()

//     const { handleSubmit, formState: { errors } } = useForm();
//     let navigate = useNavigate();

//     const [Nom, setNom] = useState("")
//     const [Prix, setPrix] = useState("")
//     const [Quantite, setQuantite] = useState("")
//     const [Img, setImg] = useState("")
//     const [quiz, setQuiz] = useState([]);
//     const [affichage, setAffichage] = useState(false);
    

//     const recup = async () => {
//         await axios.get(`http://localhost:8000/edit/` + id)
//             .then(res => {
//                 setNom(res.data[0].theme)
//                 setPrix(res.data[0].question)
//                 setQuantite(res.data[0].reponse)
//                 setImg(res.data[0].reponse)
//             })
//     }

//     const editQuestion = async () => {
//         await axios.put(`http://localhost:8000/edit/` + id, {
//             Nom: Nom,
//             Prix: Prix,
//             Quantite: Quantite,
//             Img: Img,
//         })
//             .then(res => {
//                 console.log(res)
//                 if (res.status === 200) {
//                     alert("Envoie réussi")
//                     navigate("/");
//                 }
//                 else {
//                     alert("Erreur d'envoi")
//                 }
//             })
//     }
    
//     useEffect(() => {
//         recup()
//     }, [])

// //     return (
// //         <div className='container'>
// //             <h2> Editer une question</h2>

// //             <form onSubmit={handleSubmit(editQuestion)}>
// //                 <label>Thème </label>
// //                 <input defaultValue={Nom} onChange={(e) => setNom(e.target.value)} />

// //                 <label>Question </label>
// //                 <input defaultValue={Prix} onChange={(e) => setPrix(e.target.value)} />

// //                 <label>Réponse </label>
// //                 <input defaultValue={Quantite} onChange={(e) => setQuantite(e.target.value)} />

// //                 {(errors.Nom || errors.Prix || errors.Quantite) ? <span>Tous les champs doivent être remplis</span> : ""}

// //                 <input type="submit" />
// //             </form>
// //         </div>
// //     )
// // }
// return (
//     <div className="body">
//       <h2>Les produits</h2>
//       <div className="box">
//         {affichage ? (
//           quiz.map((produit) => (
//             <div className="Contenu" style={{ marginTop: '200px' }}>
//               <div className="box-title">
//                 {produit.nom} {produit.prix} €
//               </div>
//               <div className="box-body">
//                 <img
//                   src={`${process.env.PUBLIC_URL}/images/${produit.img}`}
//                   width="200px"
//                 />
//                 <input type="button" value="Ajouter au Panier" onClick={() => editQuestion(produit)}></input>
                
//                 <div className='box-footer'>
//                   <Link to={'/edit/'+ produit.id}>Modifier</Link> 
//                   </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>Chargement...</p>
//         )}
//       </div>
//     </div>
//   );
//   }

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

//     return (
//         <div className='container'>
//             <h2> Modification d'un produit</h2>

//             <form onSubmit={handleSubmit(editQuestion)}>
//                 <label>Nom </label>
//                 <input defaultValue={nom} onChange={(e) => setNom(e.target.value)} />

//                 <label>Prix </label>
//                 <input defaultValue={prix} onChange={(e) => setPrix(e.target.value)} />

//                 <label>Quantite </label>
//                 <input defaultValue={quantite} onChange={(e) => setQuantite(e.target.value)} />

//                 <label>Img </label>
//                 <input defaultValue={img} onChange={(e) => setImg(e.target.value)} />

//                 {(errors.nom || errors.prix || errors.quantite || errors.img) ? <span>Tous les champs doivent être remplis</span> : ""}

//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }
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
