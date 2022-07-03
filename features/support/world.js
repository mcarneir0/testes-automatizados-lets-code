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
        this.model = ''
        this.licensePlate = ''
        this.status = ''

        //  Rides

        //  Auxiliares
        this.token = ''
        this.response = ''
    }

    //  Funções auxiliares
    setUser(name, telephone, email, password) {
        this.name = name
        this.telephone = telephone
        this.email = email
        this.password = password
    }

    async createUser(path) {
        const data = {
            name: this.name,
            telephone: this.telephone,
            email: this.email,
            password: this.password
        }

        const response = await api.post(path, data);
        this.response = response.data;
    }

    setLogin(telephone, password) {
        this.telephone = telephone
        this.password = password
    }

    async post(path, data, isAutenticated = false) {
        let response;
        if (isAutenticated) {
            const headers = {
                'x-access-token': this.token
            }
            response = await api.post(path, data, { headers: headers });
            this.response = response.data;
        }
        else {
            response = await api.post(path, data);
            if (response.data.token) {
                this.token = response.data.token;
            }
            this.response = response.data;
        }
    }

    setVehicle(model, licensePlate, status) {
        this.model = model
        this.licensePlate = licensePlate
        this.status = status
    }
}

setWorldConstructor(World);
