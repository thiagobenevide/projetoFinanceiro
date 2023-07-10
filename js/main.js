console.log("Entrando na função principal")

const {Poll} = require('pg')

const poll = new Poll({
    host: 'containers-us-west-8.railway.app',
    database: 'railway',
    user: 'root',
    password: '1UKWn9z3EkHHTBV0tlEw',
    port: 7716,
    ssl:{
        rejectUnauthorized: false
    }
})


poll.query('SELECT * FROM usuarios', (error, results)=>
{
    if(error){
        console.error("Erro ao executar a consulta: ", error)
    }
    else{
        console.log("Resultados da consulta: ", results.rows)
    }
})

