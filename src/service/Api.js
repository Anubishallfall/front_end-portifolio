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

}


export default Api;
