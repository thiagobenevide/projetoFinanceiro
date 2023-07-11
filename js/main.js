import { paginaCadastroController } from "./controller/paginaCadastroController.js"

import { paginaEntrar } from "./controller/paginaEntrar.js"

/*Pagina de Cadastro*/ 
var botaoCadastro = document.querySelector('#button-user-register')

botaoCadastro.addEventListener('click', ()=>{
    let nome = document.querySelector('#user-name').value
    let sobrenome = document.querySelector('#firsh-name').value
    let email = document.querySelector('#user-email').value
    let senha = document.querySelector('#user-password').value
    let pagCadastroController = new paginaCadastroController()
    window.alert(pagCadastroController.criarUsuario(nome, sobrenome, email, senha))
})

/*Pagina Entrar*/

var botaoEntrar =  document.querySelector('#button-login')
botaoEntrar.addEventListener('click', ()=>{
    let email = document.querySelector('#login-email') 
    let senha = document.querySelector('login-password')
    let pagEntrar = new paginaEntrar()
    windows.alert(pagEntrar.validarEntrada(email, senha))

})


