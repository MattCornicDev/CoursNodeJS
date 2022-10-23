const express = require('express');

const app = express();


app.use((req, res, next) => {
    console.log('la requete à bien été reçu !')
    next();
})

app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
    next()
 });

 app.use((req, res) => {
    console.log('reponse recu')
 })

module.exports = app;
