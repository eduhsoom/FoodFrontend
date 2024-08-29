import { useNavigate } from "react-router-dom"

import * as C from "./styles"

import polygon from "../../assets/Polygon.svg"
import chefAmico from "../../assets/amico.svg"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { signIn } = useAuth();

  async function handleSignUp(){
    if(!name){
      alert("Preencha o campo de nome!");
      return
    }
    if(!email){
      alert("Preencha o campo de e-mail!");
      return
    }
    if(!password){
      alert("Preencha o campo de senha!");
      return
    }
    if(password.length < 6){
      alert("A senha precisa ter 6 dígitos!");
      return
    }

    try{
      await api.post('/users', {name, email, password});
      
      signIn({email, password});

      navigate('/');

    }catch(error){
        if(error.response){
            alert(error.response.data.message)
        }else{
            alert("Não foi possível criar uma conta!");
        }
    }
}

console.log(handleSignUp)

function handleSignUpWithEnter(event){
  if(event.key === 'Enter'){
    handleSignUp()
  }
}

  return (
    <C.Container>
      <C.Logo>
        <div className="Logo">
        <img src={polygon} alt="Poligono"/>
        <h1>food explorer</h1>
        </div>
        <div className="SVG">
        <img src={chefAmico} alt="Chef"/>
        </div>
      </C.Logo>
    <C.Form>
      <h1>Crie sua conta</h1>
      <Input 
      label="Seu nome"
      type="text" 
      placeholder="Exemplo: Maria da Silva"
      onChange={e => setName(e.target.value)}
      onKeyDown={handleSignUpWithEnter}
      />

      <Input 
      label="E-mail"
      type="email" 
      placeholder="Exemplo: exemplo@email.com.br"
      onChange={e => setEmail(e.target.value)}
      onKeyDown={handleSignUpWithEnter}
      />

      <Input 
      label="Senha"
      type="password" 
      placeholder="No mínimo 6 caracteres"
      onChange={e => setPassword(e.target.value)}
      onKeyDown={handleSignUpWithEnter}
      />

      <Button onClick={handleSignUp} type="button">Criar conta</Button>

      <ButtonText text="Já tenho uma conta" link="/" type="button" className='signIn'/>
    </C.Form>
   </C.Container>
  )
}

