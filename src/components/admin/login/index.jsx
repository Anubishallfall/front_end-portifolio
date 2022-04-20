import React, { useRef, useContext, useState } from 'react'
import { Body, Conteiner, DivLoginForm, DivImagem, Form, Div, Button, DivButton, Img, DivImg, ImgCadastro, P, DivLink, PLink, Erro } from "./styles";
import Logo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"
import Imagem from '../../../config/undraw_thought_process_re_om58.svg'
import Imglogin from '../../../config/undraw_login_re_4vu2.svg'
import InputItemText from '../InputText';
import IconeEmail from "../../../config/inosneDeEmailAndStor/mail-4709_73fb6dab-8b77-4d84-b7bc-2fd8503fda46.png"
import IconePassword from "../../../config/gerenciador de atend/lock-1445_ffd7cbd1-91e3-49be-8554-b2cd93c30dfc.png"
import { useNavigate } from "react-router-dom";



import { AutorizacaoContexto } from '../../../context/Autorizacao';



function Login() {
    const { logIn } = useContext(AutorizacaoContexto)

    const [erro, setErro] = useState()

    let navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();

    class Login {
        username;
        password;
        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
    }

    function handleLogar(e) {
        e.preventDefault();
        const login = new Login(usernameRef.current.value, passwordRef.current.value);
        logarNoSistema(login);
    }

    async function logarNoSistema(login) {
        try {
            await logIn(login);
            navigate("workspaces")
        } catch (e) {
            setErro(e.response.data.message)
        }
    }


    return (
        <Body background={Logo}>
            <Conteiner>
                <DivImagem>
                    <Div>
                        <Img src={Imagem} width="30.62" height="30.62" />
                    </Div>
                </DivImagem>
                <DivLoginForm>

                    <Form>
                        <Div>
                            <DivImg>
                                <ImgCadastro src={Imglogin} />
                            </DivImg>
                            <InputItemText width="80%" placeholder="E-mail" type="text" refInput={usernameRef} background={IconeEmail} requiredValue={true} />
                            <InputItemText width="80%" placeholder="Password" type="password" refInput={passwordRef} background={IconePassword} requiredValue={true} />
                            <Erro>{erro}</Erro>
                            <DivButton>
                                <Button onClick={handleLogar}>Login</Button>
                            </DivButton>
                            <DivLink>
                                <P>Não tem uma conta?</P>
                                <PLink onClick={() => navigate("cadastro")} >Cadastre-se</PLink>
                            </DivLink>
                        </Div>
                    </Form>

                </DivLoginForm>
            </Conteiner>
        </Body>
    )
}

export default Login