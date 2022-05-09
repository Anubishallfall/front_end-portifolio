import React, { useRef, useState, useContext } from 'react'
import InputItemText from '../InputText';
import Icone from "../../../config/undraw_certificate_re_yadi.svg";
import { Container, DivButton, Img, Button, ButtonClose, HeaderCard, Body, Perro, DivInput } from "./styles";
import { AutorizacaoContexto } from '../../../context/Autorizacao';
import AtendimentoPersonalizado from '../atendimento';
import Loading from '../load';
function ModalPersonalizado({ setExibirModalDeAtendimentoPersonalizado }) {
    const [exibirAtendimento, setExibirAtendimento] = useState();
    const [erro, setErro] = useState();
    const [loading, setLoading] = useState();




    const { api } = useContext(AutorizacaoContexto);
    const senhaRef = useRef();
    class Form {
        senha;
        constructor(senha) {
            this.senha = senha
        }
    }
    function handleAtender() {
        setLoading(true);
        Atender();

    }


    async function Atender() {
        try {
            const form = new Form(senhaRef.current.value);
            const { data } = await api.getAtendimentoPersonalizado(form);
            setExibirAtendimento(data);
            setLoading(false)

        } catch (e) {
            setErro("Senha inexistente");
            setLoading(false);
        }
    }




    return (<>
        {exibirAtendimento && <AtendimentoPersonalizado exibirAtendimento={exibirAtendimento} setExibirAtendimento={setExibirAtendimento} />
            ||


            <Container>
                <HeaderCard>
                    <ButtonClose onClick={() => setExibirModalDeAtendimentoPersonalizado(false)}>X</ButtonClose>
                </HeaderCard>
                <Body>
                    <Img src={Icone} width="150" height="150" />
                    <DivInput>
                        <InputItemText width="100%" placeholder="Senha" trequiredValue={true} refInput={senhaRef} requiredValue={true} />
                    </DivInput>
                    <Perro>{erro}</Perro>
                    <DivButton>
                        {loading && <Loading width="100" height="100" />
                            ||
                            <Button onClick={handleAtender}>Atender</Button>
                        }
                    </DivButton>
                </Body>
            </Container>

        }

    </>
    )
}

export default ModalPersonalizado