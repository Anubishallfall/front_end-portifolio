import React, { useState } from 'react'
import { Body, Conteiner, DivImagem, DivGerador, Img } from "./styles";
import FormularioGerador from '../formulariogerador';
import Fundo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"
import Loading from "../load/index"
import Ticket from '../ticket';

function Gerador() {
    const [ticket, setTicket] = useState();
    const [loading, setLoading] = useState(false);

    return (
        <Body background={Fundo} >
            <Conteiner>
                {ticket && <Ticket ticket={ticket} setTicket={setTicket} setLoading={setLoading} /> ||
                    <>
                        {loading && <Loading width=" 19.14" height=" 19.14" />
                            ||

                            <FormularioGerador setTicket={setTicket} setLoading={setLoading} />
                        }
                    </>


                }
            </Conteiner>
        </Body>
    )
}

export default Gerador