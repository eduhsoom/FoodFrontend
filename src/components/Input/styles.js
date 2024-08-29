import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    position: relative;

    label{
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        position: absolute;
        left: 10px;
        top: -10px;
        background-color: ${({theme}) => theme.COLORS.DARK_700};
    }
    .label{
        background-color: ${({theme}) => theme.COLORS.DARK_400};
    }

    input{
        height: 48px;
        width: 100%;

        border: 3px solid ${({theme}) => theme.COLORS.DARK_900};
        background: none;
        padding: 0 14px;
        border-radius: 8px;

        display: flex;
        align-items: center;

        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    input::placeholder{
        color: ${({theme}) => theme.COLORS.LIGHT_500}
    }

    input:focus{
        border: 1px solid ${({theme}) => theme.COLORS.LIGHT_400};
    }
`