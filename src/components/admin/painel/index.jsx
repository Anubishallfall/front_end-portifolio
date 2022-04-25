import React, { useState, useEffect, useContext } from 'react'
import { Body, DivTicketDaVez, DivTicketAtendidos, TicketDaVez, TicketAtendido, H1Principal, Img, H1, H3 } from "./styles";
import Fundo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"
import { AutorizacaoContexto } from '../../../context/Autorizacao';
import Loading from '../load/index'

function Painel() {
    const { api } = useContext(AutorizacaoContexto)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setInterval(() => {
            buscarTicketEmAtendimento();
        }, 2000);
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
        const status = new Status("EM_ATENDIMENTO");
        const { data } = await api.getSenhaPainel(status);
        setLoading(false);
        setTicketEmAtendimento(data);
    }




    return (
        <Body background={Fundo} >

            {!loading &&
                <>
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
                </>
                ||

                <Loading />

            }
        </Body>
    )
}

export default Painel