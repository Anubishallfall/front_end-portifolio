import React, { useRef, useState } from 'react'
import { Body, Conteiner, Form, Div, Img, DivImagem, DivButton, Button, DivCirculo, DivFormCadastro, DivButtonVoltarLogin, PLogin, ImgVoltarLogin, DivVoltarParaLogin, DivButtonCadastrar, P, A } from "./styles";
import Logo from "../../config/undraw_access_account_re_8spm.svg"
import InputItemText from '../InputText';
import Icone from "../../config/undraw_online_ad_re_ol62.svg"
import axios from 'axios';
import CredenciasLoja from '../credenciais';
import Fundo from "../../config/vecteezybackground-whiteben0821_generated.jpg"
import { useNavigate } from "react-router-dom"

const servico = axios.create({
    baseURL: 'http://localhost:8080'
});


function Cadastro() {
    const [lojaExibicao, setLojaExibicao] = useState();
    let navigate = useNavigate();


    const nomeRef = useRef();
    const cpfCnpjRef = useRef();
    const foneRef = useRef();
    const ruaRef = useRef();
    const bairroRef = useRef();
    const cidadeRef = useRef();
    const ufRef = useRef();

    class Endereco {
        rua;
        bairro;
        cidade;
        uf;
        constructor(rua, bairro, cidade, uf) {
            this.rua = rua
            this.bairro = bairro
            this.cidade = cidade
            this.uf = uf
        }
    }

    class Loja {
        nome;
        fone;
        cpfCnpj;
        endereco;
        constructor(nome, fone, cpfCnpj, endereco) {
            this.nome = nome
            this.fone = fone
            this.cpfCnpj = cpfCnpj
            this.endereco = endereco
        }
    }

    function handleCadastrarLoja(e) {
        e.preventDefault()
        const endereco = new Endereco(ruaRef.current.value, bairroRef.current.value, cidadeRef.current.value, ufRef.current.value)
        const loja = new Loja(nomeRef.current.value, foneRef.current.value, cpfCnpjRef.current.value, endereco)
        cadastrarLoja(loja)
    }

    async function cadastrarLoja(loja) {
        console.log(loja)
        const { data } = await servico.post("/loja", loja);
        setLojaExibicao(data)

    }

    return (
        <Body background={Fundo}>
            <Conteiner>
                <DivFormCadastro>
                    {lojaExibicao && <CredenciasLoja loja={lojaExibicao} /> ||
                        <Form onSubmit={handleCadastrarLoja} >
                            <DivImagem>
                                <DivCirculo>
                                    <Img src={Icone} />
                                </DivCirculo>
                            </DivImagem>
                            <Div>
                                <InputItemText width="80%" placeholder="Nome da Loja" refInput={nomeRef} requiredValue={true} />
                                <InputItemText width="32%" placeholder="CNPJ/CPF" refInput={cpfCnpjRef} requiredValue={true} />
                                <InputItemText width="46%" placeholder="Fone:" refInput={foneRef} requiredValue={true} />
                                <InputItemText width="50%" placeholder="Rua" refInput={ruaRef} requiredValue={true} />
                                <InputItemText width="28%" placeholder="Bairro" refInput={bairroRef} requiredValue={true} />
                                <InputItemText width="50%" placeholder="Cidade" refInput={cidadeRef} requiredValue={true} />
                                <InputItemText width="28%" placeholder="UF" refInput={ufRef} requiredValue={true} />

                            </Div>
                            <DivButton>
                                <DivVoltarParaLogin>
                                    <P>
                                        Tem uma conta?

                                    </P>
                                    <PLogin onClick={() => navigate(-1)} >Conecte-se</PLogin>
                                </DivVoltarParaLogin>
                                <DivButtonCadastrar>
                                    <Button type="submit" >Cadastrar</Button>
                                </DivButtonCadastrar>
                            </DivButton>
                        </Form>
                    }
                </DivFormCadastro>
                <DivButtonVoltarLogin>
                    <ImgVoltarLogin src={Logo} />
                </DivButtonVoltarLogin>

            </Conteiner>
        </Body>
    )
}

export default Cadastro