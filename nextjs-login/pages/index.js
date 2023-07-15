import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.body}>
        <header className={styles.header}>
            <h1 className={styles.h1}>BOL$O EM ORDEM</h1>
        </header>
        <main className={styles.main}>
            <div className={styles.block01}>
                <div className={styles.block01Div1}>
                    <h2 className={styles.h2}>Lançamentos</h2>
                    <p className={styles.p}>Digite suas receitas e despesas diárias, semanais e mensais</p>
                </div>
                <div className={styles.block01Div2}>
                    <h2 className={styles.h2}>Caixinha</h2>
                    <p className={styles.p}>Crie caixas para organizar suas ecônomias ou investimentos</p>
                </div>
            </div>
            <div className={styles.block02}>
                <div className={styles.block02Div1}>
                    <h2 className={styles.h2}>Relatórios</h2>
                    <p className={styles.p}>Analise as suas informações de despesas e receitas no período que quiser</p>
                </div>
            </div>
            <div className={styles.block03}>
                <div className={styles.block03Div1}> 
                    <h2 className={styles.h2}> Entrar</h2>
                    <p className={styles.p}>Clicando aqui você poderá acessar a plataforma e utilizar todas as funcionalidades</p>
                </div>
    
                <div className={styles.block03Div2}>
                    <h2 className={styles.h2}>Cadastrar-se</h2>
                    <p className={styles.p}>Ainda não tem uma conta? Clique aqui e cadastre-se é 100% gratuito</p>
                </div>
            </div>
        </main>
    </div>
  
  )
}
