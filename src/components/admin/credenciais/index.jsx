import React from 'react'
import { Container, Div, H2, Img, Button, DivButton } from "./styles";
import Icone from "../../../config/Orion_check-validate-circle.svg"
import { useNavigate } from "react-router-dom";
function CredenciasLoja({ loja }) {
    let navigate = useNavigate();
    return (
        <Container>
            <Div><Img src={Icone} /></Div>
            <H2>Loja cadastrada com sucesso!</H2>
            <DivButton>
                <Button onClick={() => navigate(-1)}>
                    Ir para login
                </Button>
            </DivButton>
        </Container>
    )
}

export default CredenciasLoja