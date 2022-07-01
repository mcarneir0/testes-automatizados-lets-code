# language: pt
Funcionalidade: Cadastrar usuario na aplicação
  Eu como interessado no app Me Leva Ai
  Gostaria de realizar um cadastro de usuario
  Para que eu possar acessar os serviços do me Leva ai

  Cenário: Usuário informa os dados para cadastro
    Dado que o usuario tenha informado nome: 'Teste Cucumber', telefone: '123456789', email: 'teste@bdd.com' e senha:'123456'
    Quando ele clicar no botão cadastrar
    Então os dados deverão ser inseridos na base e o retorno deverá ser um json com a informação do usuário que foi cadastrado
