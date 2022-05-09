import React from 'react'
import InputItemText from '../InputText';
import Icone from "../../../config/undraw_certificate_re_yadi.svg";
import { Container, DivTicket, DivButton, Img, Senha, Nome, Button, ButtonClose, HeaderCard, Body } from "./styles";
function ModalPersonalizado({ setExibirModalDeAtendimentoPersonalizado }) {
    return (
        <Container>
            <HeaderCard>
                <ButtonClose onClick={() => setExibirModalDeAtendimentoPersonalizado(false)}>X</ButtonClose>
            </HeaderCard>
            <Body>
                <Img src={Icone} width="150" height="150" />
                <InputItemText width="60%" placeholder="Senha" trequiredValue={true} />
                <DivButton>
                    <Button >Atender</Button>
                </DivButton>
            </Body>
        </Container>
    )
}

export default ModalPersonalizado