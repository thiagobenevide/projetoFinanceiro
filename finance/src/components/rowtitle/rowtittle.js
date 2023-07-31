import style from "../rowtitle/rowtittle.module.css"

export default function RowTitle({type}){
    return (
        <div className={style.background}>
            <h3>{type}</h3>
            <h3>Data</h3>
            <h3>Empresa/Serviço</h3>
            <h3>Descrição</h3>
            <h3>Valor R$</h3>
            <h3>Status</h3>
        </div>
    )
}