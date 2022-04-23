import React, { useState, useContext } from 'react'
import { Container, DivTicket, DivButton, Img, Senha, Nome, Button, ButtonClose } from "./styles";
import Icone from "../../../config/undraw_certificate_re_yadi.svg";
import { AutorizacaoContexto } from '../../../context/Autorizacao';
import axios from 'axios';


const servico = axios.create({
    baseURL: process.env.REACT_APP_LINK_API
});






function ModalDeAtendimento({ setExibirModalDeAtendimento, exibirModalDeAtendimento, proximoEmAtendimento, tipo }) {


    const { autorizacao } = useContext(AutorizacaoContexto)


    async function finalizarAtendimento(statusDefinalizacao, exibirModalDeAtendimento) {

        const { data } = await servico.post("/ticket/atualizar", {
            status: statusDefinalizacao,
            id: exibirModalDeAtendimento.id
        }, { headers: { Authorization: ` Bearer   ${autorizacao.token} ` } });
    }


    async function handleAtendido() {
        proximoEmAtendimento("AGUARDANDO_ATENDIMENTO", tipo)
        finalizarAtendimento("ATENDIDO", exibirModalDeAtendimento)
    }

    function handleAusente() {
        proximoEmAtendimento("AGUARDANDO_ATENDIMENTO", tipo)
        finalizarAtendimento("AUSENTE", exibirModalDeAtendimento)

    }

    function closeAtendimento() {
        finalizarAtendimento("ATENDIDO", exibirModalDeAtendimento)
        setExibirModalDeAtendimento(null)
    }



    return (
        <Container>
            <ButtonClose onClick={closeAtendimento}>X</ButtonClose>
            <DivTicket>
                <Img src={Icone} width=" 11.48" height=" 11.48" />
                <Senha>{exibirModalDeAtendimento.senha}</Senha>
                <Nome>{exibirModalDeAtendimento.nomeCompleto}</Nome>
            </DivTicket>
            <DivButton>
                <Button onClick={handleAusente}>Ausente</Button>
                <Button onClick={handleAtendido}>Atendido</Button>
            </DivButton>
        </Container>
    )
}

export default ModalDeAtendimento