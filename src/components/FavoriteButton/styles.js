import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;

    width: 22px;
    height: 24px;

    position: absolute;
    top: 16px;
    right: 16px;

    cursor: pointer;
    
    display: grid;
    place-content: center;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    .favorite{
        width: 22px;
        height: 24px;
    }
`