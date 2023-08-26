import Container from "../src/components/container/Container.js"
import Header from "../src/components/header/header.js"
import TextBox from "../src/components/textBox/TextBox.js"
import Style from "../styles/index.module.css"
import Link from "next/link.js"

export default function Home() {
  return (
    <div className={Style.background}>
      <Header title="BOL$O EM ORDEM"></Header>
      <Container>
        <div className={Style.block01}>
          <Link href="/releases" className={Style.link}>
            <TextBox color={Style.launch} title="Lançamentos" paragraph="Digite suas receitas e despesas diárias, semanais e mensais"></TextBox>
          </Link>
          <TextBox color={Style.box} title="Caixinha" paragraph="Crie caixas para organizar suas econômias ou investimentos"></TextBox>
        </div>
        <div className={Style.block02}>
          <TextBox color={Style.report} title="Relatórios" paragraph="Analise suas despesas e receitas no período necessário"></TextBox>
        </div>
        <div className={Style.block03}>
          <Link href="/login" className={Style.link}>
            <TextBox color={Style.login} title="Entrar" paragraph="Clicando aqui você poderá acessar a plataforma"></TextBox>
          </Link>
          <Link href="/singin" className={Style.link}>
            <TextBox color={Style.singin} title="Cadastrar-se" paragraph="Ainda não possui uma conta? Clique aqui e cadastre-se é 100% gratuito"></TextBox>
          </Link>
        </div>
      </Container>
    </div>
  )
}
