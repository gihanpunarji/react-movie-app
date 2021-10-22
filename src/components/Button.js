import React from 'react'
import styled from 'styled-components'

function Button({ text, callbak }) {
    return (
        <Wrapper type='button' onClick={callbak} >
            {text}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 25px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 18px;
    width: 150px;
    border-radius: 20px;
    cursor: pointer;
    color: var(--white);
    background-color: var(--midGray);
    transition: all .25s;

    :hover {
        opacity: .8;
    }
`

export default Button
