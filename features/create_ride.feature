#language: pt

Funcionalidade: Criar uma nova corrida na aplicação
    Eu como usuário do app Me Leva Ai
    Gostaria de criar uma nova corrida na aplicação
    Para que eu possa solicitar uma corrida

Cenário: Usuário informa os dados da corrida
    Dado que o usuário tenha informado o telefone: '123456789', a senha: '123456' a placa do veículo: 'XPT-0022', o local de origem: 'Rua 1' e o local de destino: 'Rua 2'
    Quando o usuário clicar em Solicitar corrida
    Então os dados deverão ser inseridos na base e o retorno deverá ser um json com as informações da corrida
