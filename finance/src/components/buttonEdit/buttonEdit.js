export default function ButtonAdd({content,style }){
    return (
        <div>
            <button className={style} type="submit">{content}</button>
        </div>
    )
}