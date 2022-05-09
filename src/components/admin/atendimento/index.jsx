import React, { useState, useContext } from 'react'
import { Container, DivTicket, DivButton, Img, Senha, Nome, Button, ButtonClose, HeaderCard, Body } from "./styles";
import Icone from "../../../config/undraw_certificate_re_yadi.svg";
import { AutorizacaoContexto } from '../../../context/Autorizacao';

function AtendimentoPersonalizado({ setExibirAtendimento, exibirAtendimento }) {


    const { api } = useContext(AutorizacaoContexto)




    async function finalizarAtendimento(statusDefinalizacao, exibirAtendimento) {

        const { data } = await api.getAtualizarSenha(statusDefinalizacao, exibirAtendimento);
    }

    async function handleAtendido() {
        finalizarAtendimento("ATENDIDO", exibirAtendimento)
        setExibirAtendimento(null)
    }

    async function handleAusente() {
        finalizarAtendimento("AUSENTE", exibirAtendimento)
        setExibirAtendimento(null)
    }

    async function closeAtendimento() {
        finalizarAtendimento("ATENDIDO", exibirAtendimento)
        setExibirAtendimento(null)
    }



    return (
        <Container>
            <HeaderCard>
                <ButtonClose onClick={closeAtendimento}>X</ButtonClose>
            </HeaderCard>
            <Body>
                <DivTicket>
                    <Img src={Icone} width="150" height="150" />
                    <Senha>{exibirAtendimento.senha}</Senha>
                    <Nome>{exibirAtendimento.nomeCompleto}</Nome>
                </DivTicket>
                <DivButton>
                    <Button onClick={handleAusente}>Ausente</Button>
                    <Button onClick={handleAtendido}>Atendido</Button>
                </DivButton>
            </Body>
        </Container>
    )
}

export default AtendimentoPersonalizado