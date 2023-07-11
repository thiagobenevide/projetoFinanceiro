class paginaEntrar{
    constructor(){

    }

    validarEntrada(email, senha){
        if(email.length >= 3 && senha >= 3){
            return 'Entrada validada'
        }else{
            return 'Campos com poucos caracteres!'
        }
    }

}

export {paginaEntrar}