import styled from "styled-components";


export const Container = styled.div`
    height: 46px;
    width: 100%;
    max-width: 581px;

    display: flex;
    align-items: center;
    gap: 16px;

    background: ${({theme}) => theme.COLORS.DARK_900};
    padding: 15px 30px;

    border-radius: 5px;

    svg{
        width: 20px;
        height: 20px;

        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    input{
        background: none;
        color: ${({theme}) => theme.COLORS.LIGHT_400};

        width: 100%;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }
`