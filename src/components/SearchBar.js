import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import searchIcon from '../images/search-icon.svg'

const SearchBar = ({ setSearchTerm })  => {

    const [state, setState] = useState('')
    const initial = useRef(true)

    useEffect(() => {

        if(initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state)
        }, 500)
        return ()=> clearTimeout(timer)
    },[setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <ImageDiv>
                    <img src={searchIcon} alt='search_icon' />
                </ImageDiv>
                <InputDiv>
                <input type="text"
                    placeholder='Search Movie'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state} /></InputDiv>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGray);
    padding: 0 20px;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    height: 55px;
    width: 100%;
    max-width: var(--maxWidth);
    background: var(--midGray);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        height: 40px;
        width: 40px;
        margin-left: 15px;

        @media (max-width: 720px) {
            height: 35px;
            width: 35px;
        }
    } 

    input {
        margin-left: 10px;
        width: 800px;
        font-size: 28px;
        border: 0;
        height: 40px;
        color: white;
        background: transparent;
        outline: none;

        @media (max-width: 720px) {
            font-size: 18px;
        }
    }

    input:focus {
        color: white;
    }
`

const ImageDiv = styled.div`

`

const InputDiv = styled.div`

`

export default SearchBar
