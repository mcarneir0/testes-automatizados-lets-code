//  Armazenar todos os passos dos testes que serão criados

//  Importando as funções do cucumber e chai
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('que o usuario tenha informado nome: {string}, telefone: {string}, email: {string} e senha:{string}', function (name, password, email, telephone) {
    return this.setUser(name, password, email, telephone);
});

When('ele clicar no botão cadastrar', async function () {
    return await this.createUser('/user');
});

Then('os dados deverão ser inseridos na base e o retorno deverá ser um json com a informação do usuário que foi cadastrado', function () {
    expect(this.response.name).to.equal(this.name);
    expect(this.response.email).to.equal(this.email);
    expect(this.response.telephone).to.equal(this.telephone);
});
