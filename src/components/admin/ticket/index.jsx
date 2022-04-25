import React from 'react'
import { Container, SenhaValor, Div, SenhaTitulo, P, Img, DivDados, Button } from "./styles";
import Icone from "../../../config/undraw_personal_info_re_ur1n (1).svg"
function Ticket({ ticket, setTicket, setLoading }) {


    function handleCloseTicket() {
        setLoading(false);
        setTicket(null);
    }


    return (
        <Container>
            <Div><Img src={Icone} /></Div>
            <Div>
                <SenhaTitulo>Senha:</SenhaTitulo>
                <SenhaValor>{ticket.senha}</SenhaValor>
            </Div>
            <DivDados>
                <P>Nome:{ticket.nomeCompleto}</P>
            </DivDados>
            <DivDados>
                <P>Tipo:{ticket.tipo}</P>
            </DivDados>
            <DivDados>
                <P>Status:{ticket.status.descricao}</P>
            </DivDados>
            <Button onClick={handleCloseTicket}>X</Button>
        </Container>
    )
}

export default Ticket