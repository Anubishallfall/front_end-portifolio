import React from 'react'
import Load from '../../../config/loading.gif'
import { Img } from './styles'
function Loading({ width, height }) {
    return (
        <Img src={Load} width={width} height={height} />
    )
}

export default Loading