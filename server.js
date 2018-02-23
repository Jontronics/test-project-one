const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Cat', lastName: 'MeatTaco'},
    {id: 2, firstName: 'Nick', lastName: 'my dog'},
    {id: 3, firstName: 'Chloe', lastName: 'wifey'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);