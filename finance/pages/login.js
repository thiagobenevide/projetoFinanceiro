import loginStyle from "../styles/login.module.css"
import LoginCard from "../src/components/card/card.js"
import Input from "../src/components/input/input.js"
import Button from "../src/components/button/button.js"
import StyleCard from "../src/components/card/card.module.css"
import Link from "next/link"

export default function LoginPage(){
    return(
        <div className={loginStyle.background}>
            <LoginCard title="Entre em sua conta">
                    <form className={loginStyle.form}>
                    <Input type='email' placeholder="Seu e-mail principal"></Input>
                    <Input type='password' placeholder="Sua Senha"></Input>
                    <Button>Entrar</Button>
                    <Link className={StyleCard.link} href="/singin">Ainda não possui conta?</Link>
                    </form>
            </LoginCard>
        </div>
    )
}