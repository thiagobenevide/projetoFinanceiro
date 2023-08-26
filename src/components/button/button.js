import styleButton from "../button/button.module.css"

export default function Button({children, ...props}){
    return(
        <button className={styleButton.button} {...props}>{children}</button>
    )
}