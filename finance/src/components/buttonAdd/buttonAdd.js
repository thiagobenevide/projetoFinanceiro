import style from "../buttonAdd/buttonAdd.module.css"

export default function ButtonAdd(){
    return (
        <div>
            <button className={style.button} type="submit">+</button>
        </div>
    )
}