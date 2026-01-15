const express = require('express');
const hbs = require('hbs');
const path = require('path');
const { msg } = require('@pacote/saudacao'); 
const {buscarmsg} = require('@pacote/conectar')
const app = express();
const porta = 3000;


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res)  => {
  const msg = await buscarmsg()
  console.log('mensagem aqui')
  console.log(msg)
  res.render('index', { 
    titulo: "Portal express 1",
    mensagemCompartilhada: msg 
  });
});

app.listen(porta, () => {
  
  console.log(` Servidor rodando em http://localhost:${porta}`);
});