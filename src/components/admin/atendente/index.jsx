import React, { useState, useContext } from 'react'
import { Body, Conteiner, Content, Img, DivOptions, DivH3, H3, DivHeader, H1, DivTitulo, Erro } from "./styles";
import ImagemPadrao from "../../../config/undraw_teacher_re_sico.svg"
import ImagemPreferencial from '../../../config/undraw_meet_the_team_re_4h08.svg'
import Fundo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"
import ModalDeAtendimento from '../modalatendente';
import { AutorizacaoContexto } from '../../../context/Autorizacao';
import axios from 'axios';


const servico = axios.create({
    baseURL: 'http://localhost:8080'
});




function Atendente() {

    const { autorizacao } = useContext(AutorizacaoContexto)

    const [exibirModalDeAtendimento, setExibirModalDeAtendimento] = useState()
    const [tipo, setTipo] = useState()
    const [erro, setErro] = useState()


    async function proximoEmAtendimento(status, tipo) {
        try {

            console.log(status, tipo)
            const { data } = await servico.post("/ticket/proximo", {
                status: status,
                tipo: tipo
            }, { headers: { Authorization: ` Bearer   ${autorizacao.token} ` } });
            setExibirModalDeAtendimento(data)
            console.log(data)
            setErro(null)


        } catch (e) {
            setErro(e.response.data.message)
            setExibirModalDeAtendimento(null)
        }
    }


    function handlePadrao() {
        setTipo("PADRAO")
        proximoEmAtendimento("AGUARDANDO_ATENDIMENTO", "PADRAO")

    }



    function handlePreferencial() {
        setTipo("PREFERENCIAL")
        proximoEmAtendimento("AGUARDANDO_ATENDIMENTO", "PREFERENCIAL")

    }


















    return (

        <Body background={Fundo}>
            {!exibirModalDeAtendimento &&
                <DivHeader>
                    <DivTitulo>
                        <H1>Escolha um tipo de atendimento</H1>
                        {erro && <Erro>{erro}</Erro>}
                    </DivTitulo>
                </DivHeader>}
            <Conteiner>
                {!exibirModalDeAtendimento && <>
                    <Content>
                        <DivOptions onClick={handlePadrao}>
                            <DivH3>
                                <H3>Padrão</H3>
                            </DivH3>
                            <Img src={ImagemPadrao} width="250" height="250" />
                        </DivOptions>
                    </Content>
                    <Content>
                        <DivOptions onClick={handlePreferencial}>
                            <DivH3 >
                                <H3>Prefêncial</H3>
                            </DivH3>
                            <Img src={ImagemPreferencial} width="250" height="250" />
                        </DivOptions>
                    </Content>
                </>
                    ||
                    <ModalDeAtendimento setExibirModalDeAtendimento={setExibirModalDeAtendimento} exibirModalDeAtendimento={exibirModalDeAtendimento} proximoEmAtendimento={proximoEmAtendimento} tipo={tipo} />
                }
            </Conteiner>
        </Body>

    )
}

export default Atendente