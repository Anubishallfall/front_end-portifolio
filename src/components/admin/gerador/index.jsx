import React, { useState } from 'react'
import { Body, Conteiner, DivImagem, DivGerador, Img } from "./styles";
import FormularioGerador from '../../formulariogerador';
import Fundo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"

import Ticket from '../../ticket';

function Gerador() {
    const [ticket, setTicket] = useState();

    return (
        <Body background={Fundo} >
            <Conteiner>
                {ticket && <Ticket ticket={ticket} setTicket={setTicket} /> || <FormularioGerador setTicket={setTicket} />}
            </Conteiner>
        </Body>
    )
}

export default Gerador