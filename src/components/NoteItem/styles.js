import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

    background: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.LIGHT_600 };
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    border: ${({theme, isNew}) => isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : 'none'};
    border-radius: 8px;

    padding: 8px 16px;


    input{
        height: 19px;
        width: min-content;

        color: ${({theme}) => theme.COLORS.LIGHT_100};

        background: transparent;
        border: none;
        outline: none;

        font-family: 'Roboto';
        font-weight: 400;

        font-size: 16px;
        line-height: 100%;

        &::placeholder{
            color: ${({theme}) => theme.COLORS.LIGHT_500};
        }
    }

    > button {
        border: none;
        background: none;

        color: ${({theme}) => theme.COLORS.LIGHT_100 };

        display: flex;
        align-items: center;
        justify-content: center;

        svg{
            width: 12px;
            height: 12px;
        }
    }

`