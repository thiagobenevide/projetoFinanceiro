import { login } from "../../../services/user";

export default function handler(req, res){
    try{
        const user = login(req.body)
        res.status(200).json(user)
    }catch (e){
        res.status(400).json(e.message)

    }
}