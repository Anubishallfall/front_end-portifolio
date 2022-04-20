import React, { useRef, useState } from 'react'
import { Body, Conteiner, Form, Div, Button, DivButton, DivImg, ImgCadastro, H2, Header, ButtonNavRight, OptionDiv, HeaderContentRigth, Img, Erro, Footer, P, TextoLogo, DivLogo } from "./styles";
import InputItemText from '../../admin/InputText';
import Icone from "../../../config/undraw_web_search_re_efla.svg"
import Fundo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import IconeFind from "../../../config/gerenciador de atend/find-1440_8882c961-ec7d-4eba-b39d-a503d1d433d4.png"
import Ticket from '../../admin/ticket';
import Logo from '../../../config/Orion_entrance.svg'


const servico = axios.create({
    baseURL: 'http://localhost:8080'
});



function Consultador() {

    const [senhaConsultada, setSenhaConsultada] = useState();
    const [erro, setErro] = useState();
    let navigate = useNavigate();




    const senhaRef = useRef();

    class Senha {
        senha;
        constructor(senha) {
            this.senha = senha
        }
    }

    function handleConsultar(e) {
        e.preventDefault();
        const senha = new Senha(senhaRef.current.value);
        consultarGiche(senha);

    }
    async function consultarGiche(senha) {
        try {
            const { data } = await servico.post("/ticket/consultabysenha", senha);
            setSenhaConsultada(data)


        } catch (e) {
            setErro(e.response.data.message)
        }

    }



















    return (
        <Body background={Fundo} >
            <Header>
                <DivLogo>
                    <TextoLogo>Tictak</TextoLogo>
                    <Img src={Logo} width="3.82" height="3.82" />
                </DivLogo>
                <HeaderContentRigth>
                    <OptionDiv>
                        <ButtonNavRight onClick={() => navigate("admin")} >Administração</ButtonNavRight>
                    </OptionDiv>
                </HeaderContentRigth>
            </Header>
            <Conteiner>
                {senhaConsultada && <Ticket ticket={senhaConsultada} setTicket={setSenhaConsultada} /> ||
                    <Form onSubmit={handleConsultar}>
                        <Div>
                            <DivImg>
                                <Img src={Icone} width="15.31" height="15.31" />
                            </DivImg>
                            <H2>Consulte sua senha aqui</H2>
                            <InputItemText type="text" width="80%" placeholder="Sua Senha" refInput={senhaRef} requiredValue={true} background={IconeFind} />
                            <DivButton>
                                <Button type="submit">Consultar</Button>
                            </DivButton>
                            {erro && <Erro>{erro}</Erro>}

                        </Div>

                    </Form>
                }

            </Conteiner>
            <Footer>
                <P> © 2022 Tictak Maneger -
                    creator by Mauro Peixoto</P>
            </Footer>
        </Body>
    )
}

export default Consultador