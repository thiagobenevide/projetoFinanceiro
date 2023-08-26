import style from "../header/header.module.css"

export default function Header({title}){
    return (
        <div className={style.header}>
            <h1 className={style.title}>{title}</h1>
        </div>
    )
}