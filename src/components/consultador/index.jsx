import React, { useRef, useState } from 'react'
import { Body, Conteiner, Form, Div, Button, DivButton, DivImg, ImgCadastro, H2, Header, ButtonNavRight, OptionDiv, HeaderContentRigth, Img, Erro } from "./styles";
import InputItemText from '../InputText';
import Icone from "../../config/undraw_web_search_re_efla.svg"
import Fundo from "../../config/vecteezybackground-whiteben0821_generated.jpg"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import IconeFind from "../../config/GerenciadorDeAtend/find-7048_f123a9e4-3892-4d58-9702-279857bba76a.png"
import Ticket from '../ticket';


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
            console.log(senha);
            const { data } = await servico.post("/ticket/consultabysenha", senha);
            console.log(data);
            setSenhaConsultada(data)


        } catch (e) {
            setErro(e.response.data.message)
        }

    }



















    return (
        <Body background={Fundo} >
            <Header>
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
                                <ImgCadastro src={Icone} width="200" height="200" />
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
        </Body>
    )
}

export default Consultador