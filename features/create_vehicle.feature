# language: pt

Funcionalidade: Cadastrar veículo
    Eu como usuário do app me leva ai
    Gostaria de cadastrar um veículo no sistema
    Para que eu possa utilizá-lo em corridas

Cenário: Cadastrar veículo na base de dados
    Dado que eu esteja autenticado com o telefone: '123456789' e a senha: '123456' informo o modelo: 'Cruze' e a placa: 'XPT-0022' e o status: 'available'
    Quando eu fizer uma requisição para cadastrar o veículo
    Então o retorno deverá ser um json com as informações do veículo que foram inseridas na base
