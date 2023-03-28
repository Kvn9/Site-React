import '../style/Panier.css'
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function Panier({input_kingdom, input_op, input_cm, input_choujin, input_danda}) {
    // const [input_kingdom, setInputKingdom]= useState(0)
    // const [input_op, setInputOp]= useState('0')
    // const [input_cm, setInputCm]= useState('0')
    // const [input_choujin, setInputChoujin]= useState('0')
    // const [input_danda, setInputDanda]= useState('0')
    // console.log(input_kingdom)

    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const [id, setId] = useState("")
    const [nom, setNom] = useState("")
    const [quantite, seQuantite] = useState("")
    

    const produit = async () => {
      await axios.post(`http://localhost:8000/produit`, {
          id: id,
          nom: nom,
          quantite: quantite,
      })
          .then(res => {
              console.log(res)
              if (res.status === 200) {
                  alert("Ajout réussi")

              }
              else {
                  alert("Erreur d'ajout")
              }
          })
  }
    // return (
    //   <div id="lateral-panel">   
    //     <input id="lateral-panel-input" type="checkbox">
    //     </input>
    //     <label id="lateral-panel-label" for="lateral-panel-input">
    //     </label>
    //     <div id="lateral-panel-bloc">
    //       <div className="panier">
    //         <h3>Mon panier</h3>
    //         <p>Balle de basket : {input_kingdom}</p> 
    //         <p>Chaussure de foot : {input_op}</p> 
    //         <p>Maillot du PSG : {input_cm}</p>
    //         <p>Pannier de basket : {input_choujin}</p>
    //         <p>Total: {input_kingdom + input_op + input_cm + input_choujin}</p>
    //         {/* <p>Total : {input_kingdom + input_op + input_cm + input_choujin + input_danda}</p> */}
    //         <button type='button' name='payer'>
    //           Payer
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    return (
      <div id="lateral-panel">
        <input id="lateral-panel-input" type="checkbox" />
        <label id="lateral-panel-label" htmlFor="lateral-panel-input" />
        <div id="lateral-panel-bloc">
          <div className="panier">
            <h3>Mon panier</h3>
            <table>
              <thead>
                <tr>
                  <th>Produit</th>
                  <th>Quantité</th>
                  <th>Prix unitaire</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Balle de basket</td>
                  <td>{input_kingdom}</td>
                  <td>10€</td>
                  <td>{input_kingdom * 10}€</td>
                </tr>
                <tr>
                  <td>Chaussure de foot</td>
                  <td>{input_op}</td>
                  <td>25€</td>
                  <td>{input_op * 25}€</td>
                </tr>
                <tr>
                  <td>Maillot du PSG</td>
                  <td>{input_cm}</td>
                  <td>50€</td>
                  <td>{input_cm * 50}€</td>
                </tr>
                <tr>
                  <td>Panier de basket</td>
                  <td>{input_choujin}</td>
                  <td>15€</td>
                  <td>{input_choujin * 15}€</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">Total :</td>
                  <td>{input_kingdom * 10 + input_op * 25 + input_cm * 50 + input_choujin * 15}€</td>
                </tr>
              </tfoot>
            </table>
            <button type='button' name='payer'>Payer</button>
          </div>
        </div>
      </div>
    );
    
      
    
  }
  