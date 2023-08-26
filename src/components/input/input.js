import styleInput from "../input/input.module.css"

export default function Input(props){
    return(
        <input className={styleInput.input} {...props}/>
    )
}