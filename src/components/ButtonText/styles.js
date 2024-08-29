import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    
    background-color: transparent;

    font-size: 14px;
    line-height: 24px;
    font-family: 'Poppins';
    font-weight: 500;


    color: ${({theme}) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;


    @media (min-width: 1280px) {
        font-size: 24px;
        line-height: 140%;

        &.signIn{
            font-size: 14px;
            justify-content: center;
        }
    }
`

