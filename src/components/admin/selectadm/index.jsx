import React from 'react'
import { Body, Container, Div, DivOptions, Img, H3, DivH3, HeaderTitulo, DivTitulo, Titulo, SubTitulo, DivSubTitulo, A } from "./styles";
import Fundo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"
import Atendente from "../../../config/undraw_work_time_re_hdyv.svg"
import Gerador from "../../../config/undraw_election_day_w842.svg"
import PainelImg from "../../../config/undraw_control_panel_re_y3ar.svg"
import { useNavigate } from "react-router-dom";
function SelectAdm() {
    let navigate = useNavigate();

    function handleToGerador() {
        navigate("gerador", { replace: true });

    }

    return (
        <Body background={Fundo}>
            <HeaderTitulo>
                <DivTitulo>
                    <Titulo>Bem-Vindo</Titulo>
                    <DivSubTitulo>
                        <SubTitulo>Escolha um Workspace</SubTitulo>
                    </DivSubTitulo>
                </DivTitulo>
            </HeaderTitulo>

            <Container>
                <Div>
                    <DivOptions onClick={() => navigate("gerador", { replace: true })}>
                        <DivH3>
                            <H3>Gerador</H3>
                        </DivH3>
                        <Img src={Gerador} width="250" heigth="250" />
                    </DivOptions>
                </Div>
                <Div>
                    <DivOptions onClick={() => navigate("painel", { replace: true })}>
                        <DivH3>
                            <H3>Painel</H3>
                        </DivH3>
                        <Img src={PainelImg} width="250" heigth="250" />
                    </DivOptions>
                </Div>
                <Div>
                    <DivOptions onClick={() => navigate("atendente")}>

                        <DivH3>
                            <H3>Atendente</H3>
                        </DivH3>

                        <Img src={Atendente} width="250" heigth="250" />
                    </DivOptions>
                </Div>
            </Container>
        </Body>
    )
}

export default SelectAdm
