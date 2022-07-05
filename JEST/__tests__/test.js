//  Importando o index.js:
const index = require('../index');

//  Describe: é a descrição do teste que será executado
describe('Teste do index.js', () => {
    
    //  Aqui é onde os testes iniciam
    test('Deve retornar a soma de dois números', () => {
        const soma = index.soma(10, 5);
        expect(soma).toBe(15);
    });

    test('Deve retornar a subtração de dois números', () => {
        const subtracao = index.subtracao(10, 5);
        expect(subtracao).toBe(5);
    });

    test('Deve retornar a multiplicação de dois números', () => {
        const multiplicacao = index.multiplicacao(10, 5);
        expect(multiplicacao).toBe(50);
    });

    test('Deve retornar a divisão de dois números', () => {
        const divisao = index.divisao(10, 5);
        expect(divisao).toBe(2);
    });

    test('Deve retornar mensagem de erro ao dividir por zero', () => {
        const divisao = index.divisao(10, 0);
        expect(divisao).toBe('Não é possível dividir por 0');
    });
});
