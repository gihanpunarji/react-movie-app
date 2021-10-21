import React from 'react'
import styled from 'styled-components'

function Thumb({ image, movieID, clikcable }) {
    return (
        <div>
            <Image src={image} alt='image' />
        </div>
    )
}

const Image = styled.img`
    width: 100%;
    max-width: 720px;
    object-fit: cover;
    border-radius: 20px;
    transition: all .3s;
    animation: animateThumb .5s;

    :hover {
        opacity: .8;
        transform: scale(1.03);
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`

export default Thumb
