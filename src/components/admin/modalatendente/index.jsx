import React, { useState, useContext } from 'react'
import { Container, DivTicket, DivButton, Img, Senha, Nome, Button, ButtonClose } from "./styles";
import Icone from "../../../config/undraw_certificate_re_yadi.svg";
import { AutorizacaoContexto } from '../../../context/Autorizacao';

function ModalDeAtendimento({ setExibirModalDeAtendimento, exibirModalDeAtendimento, proximoEmAtendimento, tipo }) {


    const { api } = useContext(AutorizacaoContexto)


    async function finalizarAtendimento(statusDefinalizacao, exibirModalDeAtendimento) {

        const { data } = await api.getAtualizarSenha(statusDefinalizacao, exibirModalDeAtendimento);
    }

    async function handleAtendido() {
        finalizarAtendimento("ATENDIDO", exibirModalDeAtendimento)
        proximoEmAtendimento("AGUARDANDO_ATENDIMENTO", tipo)

    }

    async function handleAusente() {
        proximoEmAtendimento("AGUARDANDO_ATENDIMENTO", tipo)
        finalizarAtendimento("AUSENTE", exibirModalDeAtendimento)

    }

    async function closeAtendimento() {
        finalizarAtendimento("ATENDIDO", exibirModalDeAtendimento)
        setExibirModalDeAtendimento(null)
    }



    return (
        <Container>
            <ButtonClose onClick={closeAtendimento}>X</ButtonClose>
            <DivTicket>
                <Img src={Icone} width="150" height="150" />
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