const express = require('express');
const app = express();
const port = 3001; // You can choose any available port
const hostname = 'localhost'; // You can specify the hostname here if needed

// Your data
const data = {
  products: [
    // ... (the data you provided)
    {
      products: [
        {
          _id: 'dress1',
          image: '/images/dress1.jpg',
          title: 'Midi sundress with shirring detail',
          description:
            'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
          availableSizes: ['X', 'L', 'XL', 'XXL'],
          price: 289.9,
        },
        {
          _id: 'dress2',
          image: '/images/dress2.jpg',
          title: 'Midi sundress with ruched front',
          description:
            'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
          availableSizes: ['X', 'M', 'L'],
          price: 198.9,
        },
        {
          _id: 'dress3',
          image: '/images/dress3.jpg',
          title: 'Midi dress in pink ditsy floral',
          description:
            'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
          availableSizes: ['X', 'M', 'L'],
          price: 164.9,
        },
        {
          _id: 'dress4',
          image: '/images/dress4.jpg',
          title: 'cami maxi dress in polka dot',
          description:
            'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
          availableSizes: ['XL'],
          price: 285.9,
        },
        {
          _id: 'dress5',
          image: '/images/dress5.jpg',
          title: 'Frill mini dress in yellow polka dot',
          description:
            'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
          availableSizes: ['X', 'L', 'XL'],
          price: 180.9,
        },
        {
          _id: 'dress6',
          image: '/images/dress6.jpg',
          title: 'Midi tea dress in blue and red spot',
          description:
            'This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.',
          availableSizes: ['XL', 'XXL'],
          price: 149.9,
        },
      ],
    },
  ],
};

app.get('/api/products', (req, res) => {
  res.json(data.products);
});

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
