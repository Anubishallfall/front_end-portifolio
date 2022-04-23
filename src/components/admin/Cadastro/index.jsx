import React, { useRef, useState, useContext } from 'react'
import { Body, Conteiner, Form, Div, Img, DivImagem, DivButton, Button, DivCirculo, DivFormCadastro, DivButtonVoltarLogin, PLogin, ImgVoltarLogin, DivVoltarParaLogin, DivButtonCadastrar, P, A } from "./styles";
import Logo from "../../../config/undraw_access_account_re_8spm.svg"
import InputItemText from '../InputText';
import Icone from "../../../config/undraw_online_ad_re_ol62.svg"
import IconeCpf from "../../../config/gerenciador de atend/user-2707_07733802-cc7c-4109-b9b9-45688bc61a44.png"
import IconeEmail from "../../../config/inosneDeEmailAndStor/mail-4709_73fb6dab-8b77-4d84-b7bc-2fd8503fda46.png"
import IconePassword from "../../../config/gerenciador de atend/lock-1445_ffd7cbd1-91e3-49be-8554-b2cd93c30dfc.png"
import IconeFone from "../../../config/gerenciador de atend/calls-4648_57996ff0-34a3-4225-8ea3-3f70ffda4820.png"
import IconeRua from "../../../config/gerenciador de atend/house-5937_390f3070-7410-4208-9c74-28b770dc9fa1.png"
import IconeLocalizaco from "../../../config/gerenciador de atend/marker-location-645_a9f93d76-2309-4d81-b24d-6aa6611dff3c.png"
import IconeBairro from "../../../config/iconesUteis/geo-fence-672_14a26df4-413c-4c76-86cb-4bd1bed5b205.png"
import IconeState from "../../../config/iconesUteis/flag-2824_f7195632-ac04-469a-9ce4-33a26fc8992e.png"
import IconeStore from "../../../config/inosneDeEmailAndStor/secure-shopping-2189_def91454-a825-41f2-ac15-8c6232a42b27.png"
import CredenciasLoja from '../credenciais';
import Fundo from "../../../config/vecteezybackground-whiteben0821_generated.jpg"
import { useNavigate } from "react-router-dom"
import { AutorizacaoContexto } from '../../../context/Autorizacao';


function Cadastro() {


    const { api } = useContext(AutorizacaoContexto)

    const [lojaExibicao, setLojaExibicao] = useState();
    let navigate = useNavigate();


    const nomeRef = useRef();
    const cpfCnpjRef = useRef();
    const foneRef = useRef();
    const ruaRef = useRef();
    const bairroRef = useRef();
    const cidadeRef = useRef();
    const ufRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();



    class Usuario {
        username;
        password;

        constructor(username, password) {
            this.username = username
            this.password = password
        }
    }

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
        usuario;
        constructor(nome, fone, cpfCnpj, endereco, usuario) {
            this.nome = nome
            this.fone = fone
            this.cpfCnpj = cpfCnpj
            this.endereco = endereco
            this.usuario = usuario
        }
    }

    function handleCadastrarLoja(e) {
        e.preventDefault()
        const usuario = new Usuario(usernameRef.current.value, passwordRef.current.value)
        const endereco = new Endereco(ruaRef.current.value, bairroRef.current.value, cidadeRef.current.value, ufRef.current.value)
        const loja = new Loja(nomeRef.current.value, foneRef.current.value, cpfCnpjRef.current.value, endereco, usuario)
        cadastrarLoja(loja)
    }

    async function cadastrarLoja(loja) {
        const { data } = await api.getCriarLoja(loja);
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
                                <InputItemText width="80%" placeholder="Nome da Loja" refInput={nomeRef} requiredValue={true} background={IconeStore} />
                                <InputItemText width="80%" placeholder="Email" type='email' refInput={usernameRef} requiredValue={true} background={IconeEmail} />
                                <InputItemText width="80%" placeholder="Password" type='password' refInput={passwordRef} requiredValue={true} background={IconePassword} />
                                <InputItemText width="32%" placeholder="CNPJ/CPF" refInput={cpfCnpjRef} requiredValue={true} background={IconeCpf} />
                                <InputItemText width="46%" placeholder="Fone:" refInput={foneRef} requiredValue={true} background={IconeFone} />
                                <InputItemText width="50%" placeholder="Rua" refInput={ruaRef} requiredValue={true} background={IconeRua} />
                                <InputItemText width="28%" placeholder="Bairro" refInput={bairroRef} requiredValue={true} background={IconeBairro} />
                                <InputItemText width="50%" placeholder="Cidade" refInput={cidadeRef} requiredValue={true} background={IconeLocalizaco} />
                                <InputItemText width="28%" placeholder="UF" refInput={ufRef} requiredValue={true} background={IconeState} />

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