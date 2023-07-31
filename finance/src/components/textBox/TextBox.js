import style from "../textBox/textBox.module.css"

export default function TextBox({title, paragraph, color}){
    return (
        <div className={color}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.paragraph}>{paragraph}</p>
        </div>

    )
}