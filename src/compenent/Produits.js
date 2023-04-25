// import React, { useState, useEffect } from "react";
// import balle from '../asset/ballon.jpg'
// import '../style/Produits.css'
// import Chaussure from '../asset/maillot_1.jpg'
// import Kadi from '../asset/ajouter.png'
// import Delete from '../asset/delete.png'
// import Maillot from '../asset/Maillot.png'
// import pannier from '../asset/Pannier.png'
// import ReactDOM from "react-dom/client";
// import UserInfo from './UserInfo'
// import Pannier from "../compenent/Panier";
// import { Button } from "bootstrap";

// function valider(e){
//     e.preventDefault()
// }


// const Contenu = ({ Articles }) => {
//   const [input_op, setInputOp] = useState(0);
//   const [input_kingdom, setInputKingdom] = useState(0);
//   const [input_cm, setInputCm] = useState(0);
//   const [input_choujin, setInputChoujin] = useState(0);
//   const [input_danda, setInputDanda] = useState(0);
//   const [panier, setPanier] = useState([]);

//   const ajouterAuPanier = (nom, prix, article) => {
//     const nouvelArticle = { ...article, id: panier.length + 1 };
//     const nouveauPanier = [...panier, nouvelArticle];
  
//     nouveauPanier.sort((a, b) => a.id - b.id);
//     setPanier(nouveauPanier);
    
//   };
  

//   return (
//     <>
//       <Pannier
//         input_kingdom={input_kingdom}
//         input_op={input_op}
//         input_cm={input_cm}
//         input_choujin={input_choujin}
//         input_danda={input_danda}
//       />
   
//       <div className="Contenu">
//         {Articles.map((article, index) => (
//           <div className="Kingdom" key={index}>
//             <img src={article.img} height="250px" width="200px" alt="product" />
//             <p>
//               {article.name} {article.prix}
//             </p>
//             <button type="button" onClick={() => setInputOp(input_op - 1)}>
//               Supprimer 
//             </button>
//             <button type="button" onClick={() => setInputOp(input_op + 1)}>
//               <img src={Kadi} height="20px" width="20px" alt="add-to-cart" />
//             </button>
//             <button type="button" onClick={() => ajouterAuPanier(article)}>
//               Ajouter au panier
//             </button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default function FavoriteColor() {
//   const [input_kingdom, setInputKingdom]= useState(0)
//   const [input_op, setInputOp]= useState(0)
//   const [input_cm, setInputCm]= useState(0)
//   const [input_choujin, setInputChoujin]= useState(0)
//   const [input_danda, setInputDanda]= useState(0)

//   const [panier, setPanier] = useState([]);

//   const [total, setTotal] = useState(0);

//   const calculerTotal = () => {
//     let total = 0;
//     panier.forEach((produit) => {
//       total += produit.Prix;
//     });
//     setTotal(total);
//   };

//   useEffect(() => {
//     calculerTotal();
//   }, [panier]);

// const ajouterAuPanier = (article) => {
//   const nouvelArticle = { ...article, id: panier.length + 1 };
//   const nouveauPanier = [...panier, nouvelArticle];
//   nouveauPanier.sort((a, b) => a.id - b.id);
//   setPanier(nouveauPanier);
// };

//   let Articles = [
//     {id: 0, name:'Ballon De Foot ', prix: '10€', img: balle, },
//     {id: 1, name:'Maillot du PSG', prix:'75€', img:Chaussure},
//     {id: 2, name:'Maillot Lakers', prix:'20€', img:Maillot},
//     {id: 3, name:'Panier', prix:'100€', img:pannier},
//   ]
  
//   const User = [
//     {name:"Kingdom",Star:5}
//   ]
  
//   const User1 = [
//     {name:"OnePiece",Star:5}
//   ]

//   const User2 = [
//     {name:"Chainsaw Man",Star:4}
//   ]

//   const User3 = [
//     {name:"Choujin X",Star:3}
//   ]

//   const User4 = [
//     {name:"Dandadan",Star:3}
//   ]
//     const [count, setCount] = useState(0)
    

//     useEffect(()=>{
//       User.push(
//         {id:count,
//         star:0,})

//         console.log(User)
//         console.log(count)
//     },[count])
//     console.log(typeof input_kingdom)
//   return (
//     <>
//     <Pannier input_kingdom={input_kingdom} input_op={input_op} input_cm={input_cm}
//     input_choujin={input_choujin} input_danda={input_danda}/>
    
//     <div className="Contenu">
      
//        {Articles.map((article,index) => (
//         <div className='Kingdom'>
//         {/* <img src={balle} height="250px" width="200px"></img> */}
//         <img src={article.img} height="250px" width="200px"></img>
//         <p>{article.name} {article.prix}</p>
//           <button
//         type="button"
//         onClick={() => setInputOp(input_op - 1)}
//       >
        

       
//         <img src={Delete} height="20px" width="20px"></img>
//       </button>

//             <button
//         type="button"
//         onClick={() => setInputOp(input_op + 1)}
//       >
//              <img src={Kadi} height="20px" width="20px"></img>
//             </button>
            
//         </div>
        
//       ))}
  
//              {}
//          </div>
    
//         {
//       }
      
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);


// // function Panier() {


// //   const [input_kingdom, setInput_kingdom] = useState(0);
// //   const [input_op, setInput_op] = useState(0);
// //   const [input_cm, setInput_cm] = useState(0);
// //   const [input_choujin, setInput_choujin] = useState(0);
// //   const [cart, setCart] = useState([]);

// //   const addToCart = (productName, price, category) => {
// //     const existingItemIndex = cart.findIndex(item => item.productName === productName);
// //     if (existingItemIndex !== -1) {
// //       const updatedCart = [...cart];
// //       updatedCart[existingItemIndex].quantity += 1;
// //       setCart(updatedCart);
// //     } else {
// //       const newItem = {
// //         productName: productName,
// //         quantity: 1,
// //         price: price,
// //         category: category
// //       };
// //       setCart([...cart, newItem]);
// //     }
// //   };

// //   return (
// //     <div id="lateral-panel">   
// //       <input id="lateral-panel-input" type="checkbox" />
// //       <label id="lateral-panel-label" htmlFor="lateral-panel-input" />
// //       <div id="lateral-panel-bloc">
// //         <div className="panier">
// //           <h3>Mon panier</h3>
// //           <div>
// //             <h4>Basket</h4>
// //             {cart.filter(item => item.category === 'Basket').map(item => (
// //               <p key={item.productName}>
// //                 {item.productName} ({item.quantity} x {item.price} €) = {item.quantity * item.price} €
// //               </p>
// //             ))}
// //           </div>
// //           <div>
// //             <h4>Foot</h4>
// //             {cart.filter(item => item.category === 'Foot').map(item => (
// //               <p key={item.productName}>
// //                 {item.productName} ({item.quantity} x {item.price} €) = {item.quantity * item.price} €
// //               </p>
// //             ))}
// //           </div>
// //           <div>
// //             <h4>Autres</h4>
// //             {cart.filter(item => item.category === 'Autres').map(item => (
// //               <p key={item.productName}>
// //                 {item.productName} ({item.quantity} x {item.price} €) = {item.quantity * item.price} €
// //               </p>
// //             ))}
// //           </div>
// //           <p>Total : {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)} €</p>
// //           <button type='button' name='payer'>
// //             Payer
// //           </button>
// //           <div>
// //             <h3>Ajouter au panier</h3>
// //             <div>
// //               <p>Balle de basket : <input type="number" value={input_kingdom} onChange={(e) => setInput_kingdom(e.target.value)} /></p>
// //               <button type='button' name='ajouter' onClick={() => addToCart('Balle de basket', 10, 'Basket')}>
// //                 Ajouter
// //               </button>
// //             </div>
// //             <div>
// //   <p>Chaussure de foot : <input type="number" value={input_op} onChange={(e) => setInput_op(e.target.value)} /></p>
// //   <button type='button' name='ajouter' onClick={() => addToCart('Chaussure de foot', 20, 'Foot')}>
// //     Ajouter
// //   </button>
// // </div>

// //               <div>
// //               <p>Maillot du PSG : <input type="number" value={input_cm} onChange={(e) => setInput_cm(e.target.value)} /></p>
// //               <button type='button' name='ajouter' onClick={() => addToCart('Maillot du PSG', 30, 'Autres')}>
// //               Ajouter
// //               </button>
// //               </div>
// //               <div>
// //               <p>Pannier de basket : <input type="number" value={input_choujin} onChange={(e) => setInput_choujin(e.target.value)} /></p>
// //               <button type='button' name='ajouter' onClick={() => addToCart('Pannier de basket', 40, 'Basket')}>
// //               Ajouter
// //               </button>
// //               </div>
// //               </div>
// //               </div>
// //               </div>
// //               </div>



// //     useEffect(()=>{
// //       User.push(
// //         {id:count,
// //         star:0,})

// //         console.log(User)
// //         console.log(count)
// //     },[count])
// //     console.log(typeof input_kingdom)
// //   return (
// //     <>
// //     <Pannier input_kingdom={input_kingdom} input_op={input_op} input_cm={input_cm}
// //     input_choujin={input_choujin} input_danda={input_danda}/>
    
// //     <div className="Contenu">
      
// // //       {Articles.map((article,index) => (
// //         <div className='Kingdom'>
// //         {/* <img src={balle} height="250px" width="200px"></img> */}
// //         <img src={article.img} height="250px" width="200px"></img>
// //         <p>{article.name} {article.prix}</p>
// //           <button
// //         type="button"
// //         onClick={() => setInputOp(input_op - 1)}
// //       >
// //         <p> __ </p> 
// //       </button>

// //             <button
// //         type="button"
// //         onClick={() => setInputOp(input_op + 1)}
// //       >
// //             <img src={Kadi} height="20px" width="20px"></img>
// //             </button>
        
// //         </div>
        
// //       ))}
  
// //              {}
// //          </div>
    
// //         {
// //       }
      
// //     </>
// //   );
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<FavoriteColor />);
      
// // export default Panier;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import ReactDOM from "react-dom/client";
// import '../style/Produits.css';
// import UserInfo from './UserInfo'
// import Pannier from "../compenent/Panier";
// import { Button } from "bootstrap";

// export default function Quiz() {
//   const [quiz, setQuiz] = useState([]);
//   const [affichage, setAffichage] = useState(false);
//   const [panier, setPanier] = useState([]);
//   const [total, setTotal] = useState(0); // Ajout d'un état pour le total initialisé à 0

//   const recup = async () => {
//     await axios
//       .get(`http://localhost:8000/produit`)
//       .then((res) => {
//         console.log(res);
//         setQuiz(res.data);
//         setAffichage(true);
//       });
//   };

//   const handlePayer = () => {
//     // Stockage du panier dans le local storage
//     localStorage.setItem('panier', JSON.stringify(panier));
  
//     // Redirection vers une nouvelle page
//     window.location.href = "/";
//   };
  
  

//   useEffect(() => {
//     recup();
//   }, []);

//   const ajouterAuPanier = (produit) => {
//     setPanier([...panier, produit]);
//   };

//   const calculerTotal = () => {
//     let total = 0;
//     panier.forEach((produit) => {
//       total += produit.prix;
//     });
//     setTotal(total);
//   };

//   useEffect(() => {
//     calculerTotal();
//   }, [panier]);
  
// // Fonction pour supprimer un produit du panier
// const supprimerDuPanier = (produit) => {
//   // On vérifie si le produit est déjà dans le panier
//   const produitIndex = panier.findIndex((p) => p.id === produit.id);
//   if (produitIndex >= 0) {
//     // Si le produit est déjà dans le panier, on le supprime
//     const nouveauPanier = [...panier];
//     nouveauPanier.splice(produitIndex, 1);
//     setPanier(nouveauPanier);
//   }
// };
  
// return (
//   <div className="body">
//     <h2>Les produits</h2>
//     <div className="box">
//       {affichage ? (
//         quiz.map((produit) => (
//           <div className="Contenu" style={{ marginTop: '200px' }}>
//             <div className="box-title">
//               {produit.nom} {produit.prix} €
//             </div>
//             <div className="box-body">
//               <img
//                 src={`${process.env.PUBLIC_URL}/images/${produit.img}`}
//                 width="200px"
//               />
//               <input type="button" value="Ajouter au Panier" onClick={() => ajouterAuPanier(produit)}></input>
//               <input type="button" value="Supprimer " onClick={() => supprimerDuPanier(produit)}></input>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Chargement...</p>
//       )}
//     </div>
//     <div className='panier'>
//       <h3>Panier</h3>
//       <ul>
//         {panier.map((produit, index) => (
//           <li key={index}>
//             {produit.nom} {produit.prix}  €
//           </li>
//         ))}
//       </ul>
//       <p className='total'>Total : {total} €</p>
//       <button type='button' name='payer' onClick={handlePayer}>Payer</button>
//     </div>
//   </div>
// );
// }

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
    // window.location.href = "/delete";
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
                  <input type="button" value="Supprimer " onClick={() => supprimerDuPanier(produit)}></input>
                </div>
              </div>
            ))
          ) : (
            <p>Chargement...</p>
          )}
        </div>
        <div className='panier'>
          <h3>Panier</h3>
          <ul>
            {panier.map((produit, index) => (
              <li key={index}>
                {produit.nom} {produit.prix}  €
              </li>
            ))}
          </ul>
          <p className='total'>Total : {total} €</p>
          <button type='button' name='payer' onClick={handlePayer}>Payer</button>
        </div>
      </div>
    );
    }