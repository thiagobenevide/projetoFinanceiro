import styleLoginCard from "../card/card.module.css"

export default function LoginCard({title,children}){
    return(
        <div className={styleLoginCard.card}>
            <h1 className={styleLoginCard.title}>{title}</h1>
            {children}
        </div>
    )
}