import React, { useState, useContext } from 'react'
import { Body, Conteiner, Content, Img, DivOptions, DivH3, H3, DivHeader, H1, DivTitulo, Erro } from "./styles";
import ImagemPadrao from "../../../config/undraw_teacher_re_sico.svg"
import ImagemPreferencial from '../../../config/undraw_meet_the_team_re_4h08.svg'
import Fundo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"
import Personalizado from "../../../config/undraw_personalization_re_grty.svg"
import ModalDeAtendimento from '../modalatendente';
import { AutorizacaoContexto } from '../../../context/Autorizacao';
import ModalPersonalizado from '../modalpersonalizado';

function Atendente() {

    const { api } = useContext(AutorizacaoContexto);

    const [exibirModalDeAtendimento, setExibirModalDeAtendimento] = useState()
    const [exibirModalDeAtendimentoPersonalizado, setExibirModalDeAtendimentoPersonalizado] = useState(false)
    const [tipo, setTipo] = useState()
    const [erro, setErro] = useState()


    async function proximoEmAtendimento(status, tipo) {
        try {
            const { data } = await api.getProximaSenha(status, tipo)
            setExibirModalDeAtendimento(data)
            setErro(null)
        } catch (e) {
            setErro("Não há tickets no momento, tente outro tipo!")
            setExibirModalDeAtendimento(null)
        }
    }


    function handlePadrao() {
        setTipo("PADRAO")
        proximoEmAtendimento("AGUARDANDO_ATENDIMENTO", "PADRAO")

    }
    function handlePersonalizado() {
        setExibirModalDeAtendimentoPersonalizado(true)

    }




    function handlePreferencial() {
        setTipo("PREFERENCIAL")
        proximoEmAtendimento("AGUARDANDO_ATENDIMENTO", "PREFERENCIAL")

    }


    return (

        <Body background={Fundo}>
            {!exibirModalDeAtendimentoPersonalizado &&
                <>
                    {!exibirModalDeAtendimento &&
                        <DivHeader>
                            <DivTitulo>
                                <H1>Escolha um tipo de atendimento</H1>
                                {erro && <Erro>{erro}</Erro>}
                            </DivTitulo>
                        </DivHeader>}
                </>

            }
            <Conteiner>
                {!exibirModalDeAtendimentoPersonalizado &&
                    <>
                        {!exibirModalDeAtendimento && <>
                            <Content>
                                <DivOptions onClick={handlePadrao}>
                                    <DivH3>
                                        <H3>Padrão</H3>
                                    </DivH3>
                                    <Img src={ImagemPadrao} width="200" height="200" />
                                </DivOptions>
                            </Content>
                            <Content>
                                <DivOptions onClick={handlePreferencial}>
                                    <DivH3 >
                                        <H3>Preferêncial</H3>
                                    </DivH3>
                                    <Img src={ImagemPreferencial} width="200" height="200" />
                                </DivOptions>
                            </Content>
                            <Content>
                                <DivOptions onClick={handlePersonalizado}>
                                    <DivH3 >
                                        <H3>Personalizado</H3>
                                    </DivH3>
                                    <Img src={Personalizado} width="200" height="200" />
                                </DivOptions>
                            </Content>
                        </>
                            ||
                            <ModalDeAtendimento setExibirModalDeAtendimento={setExibirModalDeAtendimento} exibirModalDeAtendimento={exibirModalDeAtendimento} proximoEmAtendimento={proximoEmAtendimento} tipo={tipo} />
                        }
                    </>
                    ||
                    <ModalPersonalizado setExibirModalDeAtendimentoPersonalizado={setExibirModalDeAtendimentoPersonalizado} />

                }
            </Conteiner>
        </Body>

    )
}

export default Atendente