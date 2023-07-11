import { usuario } from "../model/usuario.js";

class paginaCadastroController{
    usuario = null
    constructor(){
        
    }

    criarUsuario(nome, sobrenome, email, senha){
        if(
           
            nome.length>=3 && 
            sobrenome.length>=3 && 
            email.length>=3 && 
            senha.length>=3
        ){
            this.usuario = new usuario(nome, sobrenome, email, senha)
            return 'Cadastro realizado com sucesso!'

        }else{
            return 'Os campos do cadastro estão incorretos!'
        }
    }
}

export {paginaCadastroController}
