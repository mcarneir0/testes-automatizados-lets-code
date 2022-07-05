const soma = (a,b) => {
    return a+b
}

const subtracao = (a,b) => {
    return a-b
}

const multiplicacao = (a,b) => {
    return a*b
}

const divisao = (a,b) => {
    if( b === 0 ) return 'Não é possível dividir por 0'
    return a/b
}

module.exports = {
    soma, subtracao, multiplicacao, divisao
}