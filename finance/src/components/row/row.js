import style from "../row/row.module.css"
import Input from "../input/input"
import ButtonEdit from "../buttonEdit/buttonEdit"

export default function Row({typeOne,optionOne, typeTwo, optionTwo}){
    return (
        <div className={style.row}>
            <select>
                <option value={optionOne}>{typeOne}</option>
                <option value={optionTwo}>{typeTwo}</option>
            </select>
            <Input type="date" placeholder="Data"></Input>
            <Input type="text" placeholder="Serviço"></Input>
            <Input type="text" placeholder="Descrição"></Input>
            <Input type="number" step="0.01" name="quantity" min="0.01" placeholder="Valor"></Input>
            <div className={style.buttons}>
                <ButtonEdit style={style.buttonAdd} content="+"></ButtonEdit>
                <ButtonEdit style={style.buttonRemove} content="-"></ButtonEdit>
            </div>
        </div>
    )
}