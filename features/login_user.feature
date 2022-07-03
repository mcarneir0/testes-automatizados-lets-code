# language: pt

Funcionalidade: Realizar o login do usuário.
    Como um usuário da aplicação me leva ai
    Gostaria de me autenticar no sistema
    Para ter acesso as funcionalidades disponíveis no app.

Cenário: Login do usuário
    Dado que eu insira o telefone: '123456789' e a senha: '123456'
    Quando eu fizer uma requisição de login
    Então o retorno deverá ser um json, com as informações do usuário e um token para autenticação
