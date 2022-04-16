import React, { useRef, useContext } from 'react'
import { Form, Div, Button, DivButton, DivImg, ImgCadastro, ConteinerInput, DivInput, Label, InputRadio, H2 } from "./styles";
import InputItemText from '../InputText/index'
import Icone from "../../../config/undraw_photocopy_re_gln4.svg"
import axios from 'axios';
import { AutorizacaoContexto } from '../../../context/Autorizacao';


const servico = axios.create({
    baseURL: 'http://localhost:8080'
});


function FormularioGerador({ setTicket }) {

    const { autorizacao } = useContext(AutorizacaoContexto)

    const nomeRef = useRef();
    const tipoRef = useRef();

    class Giche {
        nomeCompleto;
        tipo;
        status;
        loja
        constructor(nomeCompleto, tipo, status, loja) {
            this.nomeCompleto = nomeCompleto;
            this.tipo = tipo;
            this.status = status;
            this.loja = loja;
        }
    }

    class Loja {
        id;
        constructor(id) {
            this.id = id
        }
    }


    var tipo = "";
    function handleGerarSenha(e) {
        e.preventDefault();
        const loja = new Loja(1)
        const giche = new Giche(nomeRef.current.value, tipo, "AGUARDANDO_ATENDIMENTO", loja)
        gerarGiche(giche)
    }

    async function gerarGiche(giche) {
        const { data } = await servico.post("/ticket", giche, { headers: { Authorization: `Bearer ${autorizacao.token}` } });
        setTicket(data)

        console.log(data)
    }

    return (
        <Form onSubmit={handleGerarSenha}>
            <Div>
                <DivImg>
                    <ImgCadastro src={Icone} />
                </DivImg>
                <H2>Gere sua senha aqui</H2>
                <InputItemText type="text" width="80%" placeholder="Nome Completo" refInput={nomeRef} requiredValue={true} />
                <ConteinerInput>
                    <DivInput>
                        <Label>Padrão</Label>
                        <InputRadio name='tipo' type="radio" onChange={e => tipo = e.target.value} value="PADRAO" required />
                    </DivInput>
                    <DivInput>
                        <Label>Preferêncial</Label>
                        <InputRadio name='tipo' type="radio" onChange={e => tipo = e.target.value} value="PREFERENCIAL" required />
                    </DivInput>
                </ConteinerInput>
                <DivButton>
                    <Button type='submit'>Gerar</Button>
                </DivButton>
            </Div>
        </Form>
    )
}

export default FormularioGerador