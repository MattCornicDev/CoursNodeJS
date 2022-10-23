const express = require('express');

const app = express();

// accéde à l'API depuis n'importe quelle origine ( '*' ) ;
// ajoute les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
// d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/page1', (req, res, next) => {
    const article = [
      {
        _id: 'art1',
        title: 'Valise',
        description: 'Valise hi-tech avec poignée en argent',
        imageUrl: 'https://www.kanpai.fr/sites/default/files/uploads/2015/06/valise-delsey.jpg',
        price: 100,
        userId: 'moi',
      },
      {
        _id: 'art2',
        title: 'Carafe',
        description: 'Une carafe d\'eau que vous pouvez emporter partout',
        imageUrl: 'https://media.but.fr/images_produits/produit-zoom/4009049232782_AMB1.jpg',
        price: 12,
        userId: 'moi',
      },
    ];
    res.status(200).json(article);
  });

module.exports = app;