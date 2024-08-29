import  styled  from 'styled-components';

export const Container = styled.div`
    grid-area: footer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100vw;

    padding: 30px 27px;

    background-color: ${({theme}) => theme.COLORS.DARK_600};

    margin-top: 30px;

    span{
        font-family: 'Poppins';
        font-size: 12px;
        line-height: 16px;
    }
`


export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;

    color: ${({theme}) => theme.COLORS.LIGHT_700};
   
    img {
        width: 18px;
        height: 18px;     
    }
    
    h2{
        font-size: 15px;
    }
`
