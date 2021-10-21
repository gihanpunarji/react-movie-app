import React from 'react'
import styled from 'styled-components'

function Grid({ header, children }) {
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>{children}</Content>
        </Wrapper>
    )
}

const Wrapper = styled.div``

const Content = styled.div``

export default Grid
