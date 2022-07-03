//  Armazenar todos os passos dos testes que serão criados

//  Importando as funções do cucumber e chai
const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

//  Criar usuário
Given('que o usuario tenha informado nome: {string}, telefone: {string}, email: {string} e senha:{string}', function (name, telephone, email, password) {
    return this.setUser(name, telephone, email, password);
});

When('ele clicar no botão cadastrar', async function () {
    return await this.createUser('/user');
});

Then('os dados deverão ser inseridos na base e o retorno deverá ser um json com a informação do usuário que foi cadastrado', function () {
    expect(this.response.name).to.equal(this.name);
    expect(this.response.email).to.equal(this.email);
    expect(this.response.telephone).to.equal(this.telephone);
});

//  Login do usuário
Given('que eu insira o telefone: {string} e a senha: {string}', function (telephone, password) {
    return this.setLogin(telephone, password);
  });

When('eu fizer uma requisição de login', async function () {
    const data = {
        telephone: this.telephone,
        password: this.password
    }
    return await this.post('/user/login', data);
});

Then('o retorno deverá ser um json, com as informações do usuário e um token para autenticação', function () { 
    expect(this.response.auth).to.equal(true);
    expect(this.response).to.have.property('token');
    expect(this.response.userName).to.equal('Teste Cucumber');
    expect(this.response.userPhone).to.equal('123456789');
});

//  Cadastro de veículo
Given('que eu esteja autenticado com o telefone: {string} e a senha: {string} informo o modelo: {string} e a placa: {string} e o status: {string}', async function (telephone, password, model, licensePlate, status) {
    //  Fazer login na aplicação
    this.setLogin(telephone, password);
    const data = {
        telephone: this.telephone,
        password: this.password
    }
    await this.post('/user/login', data);

    //  Cadastrar veículo
    return this.setVehicle(model, licensePlate, status);
});

When('eu fizer uma requisição para cadastrar o veículo', async function () {
    const data = {
        model: this.model,
        licensePlate: this.licensePlate,
        status: this.status
    }
    return await this.post('/vehicle', data, true);
});

Then('o retorno deverá ser um json com as informações do veículo que foram inseridas na base', function () {   
    expect(this.response.model).to.equal('Cruze');
    expect(this.response.licensePlate).to.equal('XPT-0022');
    expect(this.response.status).to.equal('available');
});
