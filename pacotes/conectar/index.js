async function buscarmsg() {
    try {

        const response = await fetch('http://localhost:3001/');
 
        const data = await response.text();
               console.log('chegou')
        console.log(data)
        return data;
    } catch (error) {
       
        return { erro: "Não foi possível conectar ao servico de mensagem" };
    }
}

module.exports = { buscarmsg };