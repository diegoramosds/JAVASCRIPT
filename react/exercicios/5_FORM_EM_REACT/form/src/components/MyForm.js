import "./MyForm.css"
import { useState } from 'react'

const MyForm = ({user}) => {
  // 6 controlled inputs
    //3- gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');

    const [bio, setBio] = useState(user ? user.bio : '');

    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
      setName(e.target.value);
    }
    // console.log(name);
    // console.log(email);

    const handleSubmit = (event) => {
      event.preventDefault();
    console.log("Enviando formulário");
    console.log(name, email, bio, role);

    // 7 limpar form
    setName('');
    setEmail('');
    setBio('');
    setRole('');
    }


  return (
    <div>
        {/* 5- envio do form */}
        {/* 1- criando form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome"
                 onChange={handleName} value={name}/>
            </div>
            {/* 1- label */}
            <label>
                <span>E-mail</span>
            {/* 4- simplificando de manipulção de state*/}

                <input type="email" placeholder="Digite seu e-mail" 
                onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            {/* 8- textarea */}
            <label >
              <span>Bio:</span>
              <textarea name="bio" placeholder="Descrição do usuário" 
              onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
              </label>
            {/* 8- select */}
            <label>
              <span>Função sistema</span>
              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm