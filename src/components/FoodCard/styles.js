import styled from "styled-components";

export const Container = styled.div`
    min-width: 230px;
    width: 230px;
    
    padding: 24px;

    background: ${({theme}) => theme.COLORS.DARK_200};

    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    gap: 12px;
    
    align-items: center;
    place-content: center;

    position: relative;


    img{
        width: 88px;
        height: 88px;
    }

    a{
        width: 100%;

        font-family: 'Poppins';
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-align: center;

        text-decoration: none;
        
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        display: none;

        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        text-align: center;

        color: ${({theme}) => theme.COLORS.LIGHT_400};

    }

    h2{
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        text-align: center;

        color: ${({theme}) => theme.COLORS.CAKE_200};
    }

    .controls{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
    }
    .quantity{
        display: flex;
        align-items: center;
        gap: 18px;

        font-family: 'Roboto';
        font-size: 16px;
        line-height: 100%;

        color: ${({theme})=> theme.COLORS.LIGHT_300};

        button{
            background: none;
            border: none;

            display: grid;
            place-content: center;

            color: ${({theme})=> theme.COLORS.LIGHT_300};
            font-size: 20px;

            padding: 0;
        }
    }

    button{
        padding: 4px 0;
    }


    @media (min-width: 1280px) {
        min-width: 304px;
        width: 304px;
        height: 462px;

        img{
            width: 176px;
            height: 176px;
        }

        a{
            font-size: 24px;
        }

        p{
            display: block;
        }

        h2{
            font-size: 32px;
        }
        
        .controls{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 16px;

            button{
                padding: 12px 24px;
            }
        }

        .quantity{
            gap: 16px;

            font-size: 20px;
            
            button{
                padding: 0;
            }
        }

    }

`

