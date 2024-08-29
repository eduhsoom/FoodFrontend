import { useState } from "react";

import * as C from "./styles";

import { toast } from 'react-toastify'

import { useAuth } from '../../hooks/auth'

import polygon from "../../assets/Polygon.svg";
import chefAmico from "../../assets/amico.svg"

import {Input} from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn(){
    if(!email){
      toast.warn("Preencha o campo de e-mail");
      return
    }
    if(!password){
      toast.warn("Preencha o campo de senha");
      return
    }

    signIn({email, password})
  }

  function handleSignInWithEnter(event){
    if(event.key === 'Enter'){
      handleSignIn()
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
      <h1>Faça login</h1>

      <Input 
      label="E-mail"
      type="text" 
      placeholder="Exemplo: Exemplo@email.com.br"
      onChange={e => setEmail(e.target.value)}
      onKeyDown={handleSignInWithEnter}
      />

      <Input 
      label="Senha"
      type="password" 
      placeholder="No mínimo 6 caracteres"
      onChange={e => setPassword(e.target.value)}
      onKeyDown={handleSignInWithEnter}
      />

      <Button onClick={handleSignIn} type="button">Entrar</Button>

      <ButtonText text="Criar uma conta" link="/register" type="button" className='signIn'/>
    </C.Form>
   </C.Container>
  )
}

