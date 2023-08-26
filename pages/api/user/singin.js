import { singin } from "../../../services/user";

export default function handler(req, res){
    try{
        const newUser = singin(req.body)
        res.status(201).json(newUser)
    }catch (e){
        res.status(400).json(e.message)

    }
}