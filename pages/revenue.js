import Row from "../src/components/row/row"
import RowTitle from "../src/components/rowtitle/rowtittle"

export default function Revenue(){
    return (
        <div>
            <RowTitle
                type="Tipo de Receita"
            ></RowTitle>
            <Row 
            optionOne="fixe"
            optionTwo="variable"
            typeOne="Fixo"
            typeTwo="Variável"
            ></Row>
        </div>
    )
}