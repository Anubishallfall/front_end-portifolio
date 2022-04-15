import React, { useState, useEffect, useContext } from 'react'
import { Body, DivTicketDaVez, DivTicketAtendidos, TicketDaVez, TicketAtendido, H1Principal, Img, H1, H3 } from "./styles";
import TokenContext from "../../context/index"
import Fundo from "../../config/vecteezybackground-whiteben0821_generated.jpg"
import { AutorizacaoContexto } from '../../context/Autorizacao';
import axios from 'axios';


const servico = axios.create({
    baseURL: 'http://localhost:8080'
});


function Painel() {
    const { autorizacao } = useContext(AutorizacaoContexto)


    useEffect(() => {
        setInterval(() => {
            buscarTicketEmAtendimento();
        }, 5000);
    }, [])


    const [ticketEmAtendimento, setTicketEmAtendimento] = useState([]);
    const ticketEmAtendimentoParaExibicaoPricipal = ticketEmAtendimento.slice(-1)
    const ticketEmAtendimentoParaExibicaoSecundaria = ticketEmAtendimento.slice(-3)

    class Status {
        status;
        constructor(status) {
            this.status = status
        }
    }


    async function buscarTicketEmAtendimento() {
        const status = new Status("EM_ATENDIMENTO")
        const { data } = await servico.post("/ticket/status", status, { headers: { Authorization: `Bearer   ${autorizacao.token} ` } });
        setTicketEmAtendimento(data)
        console.log(ticketEmAtendimentoParaExibicaoSecundaria)
        console.log(data)
    }




    return (
        <Body background={Fundo} >
            <DivTicketDaVez>

                {ticketEmAtendimentoParaExibicaoPricipal.map((ticket, index) =>
                    <TicketDaVez key={index}>
                        <Img />
                        <H1Principal>{ticket.senha}</H1Principal>
                        <H3>Tipo: {ticket.tipo}</H3>
                    </TicketDaVez>)}

            </DivTicketDaVez>
            <DivTicketAtendidos>
                {ticketEmAtendimentoParaExibicaoSecundaria.map((ticket, index) =>
                    <TicketAtendido key={index}>
                        <H1>{ticket.senha}</H1>
                        <H3>Tipo: {ticket.tipo}</H3>
                    </TicketAtendido>)
                }

            </DivTicketAtendidos>
        </Body>
    )
}

export default Painel