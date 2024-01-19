function BancodeDados(){

    function Dados(email){
        this.email = email;
     
     
    }
    function NovoEmail (eml){
        this.eml = eml;
       }
     
    const emailjaCadastrado = new Dados ('felisberto@gmail.com');
    const Novoemail = new NovoEmail('felisberto@gmail.com');
    
    if(emailjaCadastrado.email === Novoemail.eml){
        console.log('Email já cadastrado no Banco de dados');
        }else{
     
         console.log('Email  cadastrado com sucesso');
        }
       
}
BancodeDados()