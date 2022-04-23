import axios from 'axios';

class Api {

    constructor(autorizacao = {}) {
        this.servico = axios.create({
            baseURL: process.env.REACT_APP_LINK_API,
            headers: { Authorization: `Bearer ${autorizacao.token}` }
        });
    }

    getTicket = function (params) {
        return this.servico.post("/ticket", params);
    }

    getAuth = function (params) {
        return this.servico.post("/auth", params);
    }
}


export default Api;