# language: pt

Funcionalidade: Finalizar corrida
    Eu como usuário do app Me Leva Ai
    Gostaria de finalizar uma corrida que foi iniciada anteriormente
    Para que o motorista fique disponível para outra corrida

Cenário: Usuário informa os dados da corrida
    Dado que o usuário tenha informado o telefone: '123456789', a senha: '123456', o ID da corrida: '62c450f5b9e6edc1362ff85b' e o status: 'finalizada'
    Quando o usuário clicar no botão iniciar corrida
    Então o sistema deve retornar o status da corrida: 'finalizada'
