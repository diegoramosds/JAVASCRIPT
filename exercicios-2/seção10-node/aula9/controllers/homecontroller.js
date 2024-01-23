exports.paginainicial = (req,res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    Outro campo: <input type="text" name="qualquercoisa">
    <button>Enviar formulário</button>
    </form>
    `);
}
exports.trataPost = (req,res) => {
res.send('Ei, sou sua nova rota de post')
}; 