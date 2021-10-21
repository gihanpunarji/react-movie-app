import React from 'react'
import styled from 'styled-components'


const HeroImg = ({image, title, text}) => (
    <Warpper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Warpper>
)

const Warpper = styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 41%,
        rgba(0, 0, 0, 0.65) 100%
    ),
    var(--darkGrey);
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 400px;
    box-sizing: border-box;
    position: relative;
    animation: animateHeroImage 1s;

    @keyframes animateHeroImage {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`
const Content = styled.div`
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;

`
const Text = styled.div`
    @media (max-width: 720px) {
        max-width: 100%;
    }
        z-index: 100;
        max-width: 700px;
        position: absolute;
        top: 40px;
        margin-right: 20px;
        min-height: 100px;
        color: var(--white);

    h1 {
        font-size: var(--fontSuperBig);

        @media (max-width: 720px) {
        font-size: var(--fontBig);
        }
    }

    p {
        font-size: var(--fontMed);
    
        @media (max-width: 720px) {
        font-size: var(--fontSmall);
        }
    }

    @media (max-width: 720px) {
        max-width: 100%;
    }
`

export default HeroImg
