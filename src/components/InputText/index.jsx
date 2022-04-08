import { InputDiv, InputLabel, InputText } from "./styles";
import React, { useRef } from 'react'


export default function InputItemText({ label, placeholder, type = 'text', width, refInput, requiredValue = false, background }) {
    return (
        <InputDiv width={width}>
            <InputLabel>{label}</InputLabel>
            <InputText type={type} placeholder={placeholder} ref={refInput} required={requiredValue} background={background} />
        </InputDiv>
    )
}