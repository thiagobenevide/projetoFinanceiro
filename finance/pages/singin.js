import { useState } from "react";

import stylesingin from "../styles/singin.module.css"
import LoginCard from "../src/components/card/card.js";
import Input from "../src/components/input/input.js"
import Button from "../src/components/button/button.js"
import StyleCard from "../src/components/card/card.module.css"
import Link from "next/link"


export default function SingIn(){
    const[formData, setFormData]= useState({
        name: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState('')

    const handleFormEdit = (event, name)=>{
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    /*Conectando a API */
    const handleForm = async (event)=>{
        try{
            event.preventDefault()
            const response = await fetch(`/api/user/singin`,{
                method: 'POST',
                body: JSON.stringify(formData)
            })
            const json = await response.json()
            if(response.status !== 201) throw new Error(json)

        }catch(e){
            setError(e.message)
        }
    }


    return(
        <div className={stylesingin.background}>
            <LoginCard title="Crie sua Conta">
                <form onSubmit={handleForm} className={stylesingin.form}>
                    <Input type='text' placeholder="Digite o seu nome" required value={formData.name} onChange={(e)=>{handleFormEdit(e,'name')}}></Input>
                    <Input type='email' placeholder="Seu e-mail principal" required value={formData.email} onChange={(e)=>{handleFormEdit(e,'email')}}></Input>
                    <Input type='password' placeholder="Sua Senha" required value={formData.password} onChange={(e)=>{handleFormEdit(e,'password')}}></Input>
                    <Button>Entrar</Button>
                    {error && <p>{error}</p>}        
                    <Link href="/login" className={StyleCard.link}>Já possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}