// Importation des modules nécessaires
const mariadb = require('mariadb')
const express = require('express')
const app = express()
let cors = require('cors')

require('dotenv').config()

const pool = mariadb.createPool ({ // Création de la pool de connexions à la base de données
    host: process.env.DB_HOST, // récupération de l'adresse de l'hôte de la base de données depuis les variables d'environnement
    user: process.env.DB_USER, // récupération de l'utilisateur de la base de données depuis les variables d'environnement
    password: process.env.DB_PWD, // récupération du mot de passe de la base de données depuis les variables d'environnement
    database: process.env.DB_DTB // récupération du nom de la base de données depuis les variables d'environnement
});


app.use(express.json())
app.use(cors())

// app.get('/question', async (req, res) => {
//     let conn;
//     try {
//         console.log("lancement de la connexion")
//         conn = await pool.getConnection();
//         console.log("lancement de la requete select")
//         const rows = await conn.query('SELECT * FROM questions');
//         res.status(200).json(rows)
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

// app.get('/question/:id', async (req, res) => {
//     const id = parseInt(req.params.id)
//     let conn;
//     try {
//         console.log("lancement de la connexion")
//         conn = await pool.getConnection();
//         console.log("lancement de la requete select")
//         const rows = await conn.query('SELECT * FROM questions WHERE id = ?', [id]);
//         res.status(200).json(rows)
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

app.get('/produit', async(req,res) => {
    let conn; 
    try{
        // On affiche un message de connexion
        console.log("lancement de la connexion")
        // On récupère une connexion à la base de données
        conn = await pool.getConnection();
        // On affiche un message de requête
        console.log("lancement de la requete")
        // On exécute une requête SELECT pour récupérer tous les produits de la table 'produit'
        const rows = await conn.query('SELECT * FROM produit');
        // On affiche le résultat de la requête
        console.log(rows);
        // On renvoie les résultats au format JSON
        res.status(200).json(rows)
    }
    catch(err){
        // On affiche les erreurs s'il y en a une
        console.log(err)
    }
  })

  
app.post('/', async (req, res) => {
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete insert")
        console.log(req.body);
        let requete = 'INSERT INTO produit (nom, quantite, prix , img ) VALUES (?, ?, ?, ?);'
        let rows = await conn.query(requete, [req.body.nom, req.body.quantite, req.body.prix, req.body.img]);
        console.log(rows); // Affichage du nombre de lignes affectées par la requête d'insertion
        res.status(200).json(rows.affectedRows)
    }
    catch (err) { // Affichage de l'erreur en cas d'échec de la requête
        console.log(err);
    }
})

app.post('/connexion', async (req, res) => {
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete insert")
        console.log(req.body);
        let requete = 'INSERT INTO connexion  (email, mdp) VALUES (?, ?);'
        let rows = await conn.query(requete, [req.body.email, req.body.mdp]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
    }
})

app.post('/connexion2', async (req, res) => {
    const id =parseInt(req.params.id)
    const {email,mdp} = req.body;
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete verification")
        console.log(req.body);
        const rows = await conn.query('SELECT * FROM connexion WHERE email = ?' , [email]);
        console.log(rows);
        if (rows.length === 1) {
            res.status(200).json ({message: "Connexion reussi ! "});
        }
        else {
            console.log("pas correct")
            res.status(401).json ({message: "Nom utilisteur ou mot de passe incorrect. "});
        }
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({message: "Une erreur s'est produite lors de la connexion"})
    } finally {
        if (conn) {
            conn.release();
        }
    }
    // const match = await  bcrypt.compare(mdp, rows[0].mdp);
    // console.log(match);

    // if(match) {
        
    // }
    // else {

    // }
})

app.post('/connexion', async (req, res) => {
    const id =parseInt(req.params.id)
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete verification")
        console.log(req.body);
        const rows = await conn.query('SELECT * FROM connexion WHERE email = Admin AND mdp = Admin');
        console.log(rows);
        if (rows.length === 1) {
            res.status(200).json ({message: "Connexion reussi ! "});
        }
        else {
            console.log("pas correct")
            res.status(401).json ({message: "Nom utilisteur ou mot de passe incorrect. "});
        }
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
        res.status(500).json({message: "Une erreur s'est produite lors de la connexion"})
    } finally {
        if (conn) {
            conn.release();
        }
    }
})




const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post('/inscription', async (req, res) => {
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete insert")
        console.log(req.body);
        let hashedPassword = await bcrypt.hash(req.body.mdp, saltRounds);
        let requete = 'INSERT INTO connexion (email, mdp) VALUES (?, ?);'
        let rows = await conn.query(requete, [req.body.email, hashedPassword ]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
    }
})


app.post('/admin', async (req, res) => {
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete insert")
        console.log(req.body);
        let requete = 'INSERT INTO produit (nom, img, prix) VALUES (?, ?, ?);'
        let rows = await conn.query(requete, [req.body.nom, req.body.img, req.body.prix ]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
    }
})
app.delete('/admin', async(req,res) => { 

    const id = parseInt(req.params.id) 
    
    let conn;
    
    try{
    console.log("lancement de la connexion")
    conn = await pool.getConnection();
     console.log("lancement de la requete")
    // Supprimer un produit de la base de données en fonction de son ID
    const rows = await conn.query ('DELETE FROM produit WHERE id = ?', [id]);
     console.log(rows);
     res.status(200).json(rows.affectedRows)
    
    }
    
    catch(err){
     console.log(err)
    }
    })


// app.put('/question/:id', async (req, res) => {
//     const id = parseInt(req.params.id)
//     let conn;
//     try {
//         console.log("lancement de la connexion")
//         conn = await pool.getConnection();
//         console.log("lancement de la requete update")
//         let requete = 'UPDATE questions SET theme = ?, question = ?, reponse = ? WHERE id = ?;'
//         let rows = await conn.query(requete, [req.body.theme, req.body.question, req.body.reponse, id]);
//         console.log(rows);
//         res.status(200).json(rows.affectedRows)
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

// app.delete('/question/:id', async (req, res) => {
//     const id = parseInt(req.params.id)
//     let conn;
//     try {
//         console.log("lancement de la connexion")
//         conn = await pool.getConnection();
//         console.log("lancement de la requete delete")
//         let requete = 'DELETE FROM questions WHERE  id= ?;'
//         let rows = await conn.query(requete, [id]);
//         console.log(rows);
//         res.status(200).json(rows.affectedRows)
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

app.listen(8000, () => { // ouverture du serveur sur le port 8000
    console.log("Serveur à l'écoute") // afficher un message dans la console.
})