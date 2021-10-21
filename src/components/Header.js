import React from 'react'
import styled from 'styled-components'
import MovieLogo from '../images/react-movie-logo.svg'
import TMDBLogo from '../images/tmdb_logo.svg'

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={MovieLogo} alt='movie-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
)

const Wrapper = styled.div`
    background: var(--darkGray);
    padding: 0 20px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

const LogoImg = styled.img`
    width: 200px;

    @media screen and (max-width: 500px) {
    width: 150px;
    }
`;

const TMDBLogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 500px) {
    width: 80px;
    }
`;

export default Header
