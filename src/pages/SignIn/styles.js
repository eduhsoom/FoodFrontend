import styled from "styled-components";


export const Container = styled.form`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1280px) {
        flex-direction: row;
        gap: 300px;
    }
`

export const Logo = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;


    .Logo{
        display: flex;
        align-items: center;
        gap: 10px;

        margin-bottom: 73px;

        h1{
            font-size: 36px;
            font-weight: 700;
            line-height: 44px;
        }
    }

    .SVG{
        display: none;
    }

@media (min-width: 1280px) {
       .SVG {
        display: block;
       }
    }

`

export const Form = styled.div`
    max-width: 320px;
    width: 100%;
    border-radius: 16px;
    
    display: flex;
    flex-direction: column;

    gap: 32px;

    animation: slide-bot 0.3s backwards;

    h1{
        display: none;
    }
    @media (min-width: 1280px) {
        max-width: 450px;
        width: 100%;
        padding: 64px;
        background: ${({theme}) => theme.COLORS.DARK_700};

        h1{
            display: block;
            font-size: 32px;
            text-align: center;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-family: 'Poppins';
            font-weight: 500;
        }
    }
`
