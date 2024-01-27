import './MyForm.css'
import { useState } from 'react'
import InputMask from 'react-input-mask';

const MyForm = ({user}) => {
  // 6 - controle de inputs

  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name :'')
  const [email, setEmail] = useState(user ? user.email :'')
  const [bio, setBio] = useState(user ? user.bio :'')
  const [role, setRole] = useState(user ? user.role :'')
  const [cpf, setCpf] = useState(user ? user.cpf :'')

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role, cpf);

    // 7 - limpar form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
    setCpf("");
  }

  return (
    <div>
      {/* 5 - envio de form */}
        {/* 1 - criação do form */}
        <form onSubmit={handleSubmit}>
          <div className='form_container'>
            <div>
              <label>
                <span>Nome: </span>
                {/* 4 - simplificação de manipulação de state */}
                <input type="text" 
                name='name' 
                placeholder='Digite o seu nome' 
                onChange={handleName} 
                value={name}
                />
              </label>
            </div>
            {/* 2 - label envolvendo input */}
            <label>
              <span>E-mail: </span>
              {/* 4 - simplificação de manipulação de state */}
              <input type="email" 
              name='email' 
              placeholder='Digite o seu E-mail' 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              />
            </label>
            {/* 8 - textarea */}
            <label>
              <span>Bio: </span>
              <textarea
                name="bio"
                placeholder='Descrição do usuário' 
                onChange={(e) => setBio(e.target.value)}
                value={bio}
              ></textarea>
            </label>
            {/* 9 - select */}
            <label>
              <span>Função no sistema</span>
              <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>
            <label>
              <span>CPF: </span>
              <InputMask
                mask="999.999.999-99"
                placeholder='***.***.***-**'
                name="cpf"
                onChange={(e) => setCpf(e.target.value)}
                value={cpf}
              />
            </label>
            <input type="submit" value="Enviar"/>
          </div>
        </form>
    </div>
  )
}

export default MyForm