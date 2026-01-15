const express = require('express');
const hbs = require('hbs');
const path = require('path');


const app = express();
const porta = 3001;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {

  return res.send('Resposta')
});

app.listen(porta, () => {
  console.log(` Servidor rodando em http://localhost:${porta}`);
});