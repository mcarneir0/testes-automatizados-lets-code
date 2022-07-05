# language: pt

Funcionalidade: Iniciar corrida
    Eu como usuário do app Me Leva Ai
    Gostaria de iniciar uma corrida que foi solicitada anteriormente
    Para que eu possa chegar ao meu destino

Cenário: Usuário informa os dados da corrida
    Dado que o usuário tenha informado o telefone: '123456789', a senha: '123456', o ID da corrida: '62c450f5b9e6edc1362ff85b' e o status: 'iniciada'
    Quando o usuário clicar no botão iniciar corrida
    Então o sistema deve retornar o status da corrida: 'iniciada'
