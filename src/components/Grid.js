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

const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h1 {
        color: var(--medgray);

        @media(max-width:768px) {
            font-size: var(--fontBig);
        }
    }
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
`

export default Grid
