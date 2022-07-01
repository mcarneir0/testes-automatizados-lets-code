//  Configurar todos os arquivos que irão sustentar os testes

//  Importando a classe construtura e Axios
const { setWorldConstructor } = require('cucumber');
const axios = require('axios');

//  Definindo a API de backend
const api = axios.create({
    baseURL: 'http://localhost:3333/api/',
});

//  Criando a classe World
class World {
    constructor() {
        //  User
        this.name = ''
        this.password = ''
        this.email = ''
        this.telephone = ''
        this.response = ''

        //  Vehicle
        //  Rides
    }

    //  Funções auxiliares
    setUser(name, password, email, telephone) {
        this.name = name
        this.password = password
        this.email = email
        this.telephone = telephone
    }

    async createUser(path) {
        const data = {
            name: this.name,
            password: this.password,
            email: this.email,
            telephone: this.telephone
        }

        const response = await api.post(path, data);
        this.response = response.data;
    }
}

setWorldConstructor(World);
