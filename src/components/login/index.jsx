import React, { useRef, useEffect, useState } from 'react'
import { Body, Conteiner, DivLoginForm, DivImagem, Form, Div, Button, DivButton, Img, DivImg, ImgCadastro, P, DivLink, PLink, Erro } from "./styles";
import Logo from "../../config/vecteezybackground-whiteben0821_generated.jpg"
import Imagem from '../../config/undraw_thought_process_re_om58.svg'
import Imglogin from '../../config/undraw_login_re_4vu2.svg'
import InputItemText from '../InputText';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const servicoLogin = axios.create({
    baseURL: 'http://localhost:8080/loja'
});



function Login() {

    let navigate = useNavigate();


    const [erro, setErro] = useState()

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
        console.log(login);
    }

    async function logarNoSistema(login) {
        try {
            const response = await servicoLogin.post("/login", login);
            if (response) {
                navigate("areaadmin")

            }

        } catch (e) {
            setErro(e.response.data.message)
        }
    }


    return (
        <Body background={Logo}>
            <Conteiner>
                <DivImagem>
                    <Div>
                        <Img src={Imagem} width="400" height="400" />
                    </Div>
                </DivImagem>
                <DivLoginForm>

                    <Form>
                        <Div>
                            <DivImg>
                                <ImgCadastro src={Imglogin} />
                            </DivImg>
                            <InputItemText width="80%" placeholder="Username" type="text" refInput={usernameRef} />
                            <InputItemText width="80%" placeholder="Password" type="password" refInput={passwordRef} />
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