import React, { useRef, useState, useContext } from 'react'
import {
    Body,
    Header,
    ContainerLogo,
    Logo,
    TextoLogo,
    Conteiner,
    Form,
    ContainerForm,
    ButtonSubmit,
    DivButton,
    DivImg,
    ImgCadastro,
    H2,
    ButtonNavRight,
    Erro,
    Footer,
    P
} from "./styles";
import InputItemText from '../../admin/InputText';
import Icone from "../../../config/undraw_web_search_re_efla.svg"
import Fundo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"
import { useNavigate } from "react-router-dom";
import IconeFind from "../../../config/gerenciador de atend/find-1440_8882c961-ec7d-4eba-b39d-a503d1d433d4.png"
import Ticket from '../../admin/ticket';
import IconLogo from '../../../config/Orion_entrance.svg'
import { AutorizacaoContexto } from '../../../context/Autorizacao';
import Loading from '../../admin/load/index'


function Consultador() {

    const { api } = useContext(AutorizacaoContexto)
    const [senhaConsultada, setSenhaConsultada] = useState();
    const [erro, setErro] = useState();
    const [loading, setLoading] = useState(false);
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
            setLoading(true);
            const { data } = await api.getConsultarSenha(senha);
            setSenhaConsultada(data)


        } catch (e) {
            setLoading(false);
            setErro("Senha inválida");
        }

    }

    return (
        <Body background={Fundo} >
            <Header>
                <ContainerLogo>
                    <TextoLogo>Tictak</TextoLogo>
                    <Logo src={IconLogo} width="50" height="50" />
                </ContainerLogo>
                <ButtonNavRight onClick={() => navigate("admin")} >Administração</ButtonNavRight>
            </Header>
            <Conteiner>
                {senhaConsultada && <Ticket ticket={senhaConsultada} setTicket={setSenhaConsultada} setLoading={setLoading} /> ||
                    <>
                        {
                            loading && <Loading width=" 19.14" height=" 19.14" />
                            ||
                            <Form onSubmit={handleConsultar}>
                                <ContainerForm>
                                    <DivImg>
                                        <ImgCadastro src={Icone} />
                                    </DivImg>
                                    <H2>Consulte sua senha</H2>
                                    <InputItemText type="text" placeholder="Sua Senha" refInput={senhaRef} requiredValue={true} background={IconeFind} />
                                    {erro && <Erro>{erro}</Erro>}
                                    <DivButton>
                                        <ButtonSubmit type="submit">Consultar</ButtonSubmit>
                                    </DivButton>
                                </ContainerForm>
                            </Form>
                        }
                    </>
                }

            </Conteiner>
            <Footer>
                <P> © 2022 Tictak Manager -
                    creator by Mauro Peixoto</P>
            </Footer>
        </Body>
    )
}

export default Consultador








