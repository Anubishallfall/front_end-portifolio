import axios from 'axios';

class Api {

    constructor(autorizacao = {}) {
        console.log("nova instancia Api")
        this.servico = axios.create({
            baseURL: process.env.REACT_APP_LINK_API,
            headers: { Authorization: `Bearer ${autorizacao.token}` }
        });

        this.servico.interceptors.request.use(function (config) {
            console.log(config.baseURL, config.url)
            return config;
        }, function (error) {
            // Faça algo com erro da solicitação
            return Promise.reject(error);
        });
    }

    getTicket = function (params) {
        return this.servico.post("/ticket", params);
    }

    getAuth = function (params) {
        return this.servico.post("/auth", params);
    }

    getConsultarSenha = function (params) {
        return this.servico.post("/ticket/consultabysenha", params);
    }

    getProximaSenha = function (status, tipo) {
        return this.servico.post("/ticket/proximo", {
            status: status,
            tipo: tipo
        });
    }

    getAtualizarSenha = function (statusDefinalizacao, exibirModalDeAtendimento) {
        return this.servico.post("/ticket/atualizar", {
            status: statusDefinalizacao,
            id: exibirModalDeAtendimento.id
        });
    }

    getSenhaPainel = function (status) {
        return this.servico.post("/ticket/status", status);
    }


    getCriarLoja = function (loja) {
        return this.servico.post("/loja", loja);
    }

    getAtendimentoPersonalizado = function (form) {
        return this.servico.post("/ticket/personalizado", form);
    }

}


export default Api;
