import TextBox from "../src/components/textBox/TextBox"
import style from "../styles/releases.module.css"

export default function Releases(){
    return (
        <div>
            <h1 className={style.title}>Qual será o tipo de lançamento?</h1>
            <div className={style.background}>
                <TextBox color={style.revenue} title="Receitas"></TextBox>
                <TextBox color={style.expese} title="Despesas"></TextBox>
            </div>
        </div>
    )
}