import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    grid-template-rows: '100px 1fr';
    grid-template-areas: 
    "header"
    "content"
    ;

`

export const Content = styled.main`
    grid-area: content;

    margin-top: 100px;

    width: 100%;
    height: 100%;
    
    padding: 11px 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    .page{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img{
        height: 264px;
        width: 264px;
    }

    .infos{
        width: 316px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap:24px;

        h1{
            font-family: 'Poppins';
            font-weight: 500;
            font-size: 27px;
            line-height: 140%;

            color: ${({theme}) => theme.COLORS.LIGHT_300};

            margin-top: 16px;
        }

        p{
            font-family: 'Poppins';
            font-weight: 400;
            font-size: 16px;
            line-height: 140%;

            text-align: center;

            color: ${({theme}) => theme.COLORS.LIGHT_300};
        }

        .ingredients{
            width: 100%;

            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 24px;

            padding: 0 16px;

            span{
                font-family: 'Poppins';
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;
                
                color: ${({theme}) => theme.COLORS.LIGHT_100};

                padding: 4px 8px;
                
                background: ${({theme}) => theme.COLORS.DARK_1000};

                border-radius: 5px;
            }
        }
    }

    .controls{
        display: flex;
        align-items: center;
        gap: 15px;
        width: 316px;

        margin-top: 48px;

        >div{
            display: flex;
            align-items: center;
            gap: 16px;

            button{
                background: none;
                border: none;

                display: grid;
                place-content: center;

                color: ${({theme})=> theme.COLORS.LIGHT_300};
                font-size: 30px;
            }

            span{
                font-weight: 700;
                font-size: 22px;
                line-height: 160%;


                color: ${({theme})=> theme.COLORS.LIGHT_300};
            }
        }
    }
    
    .addCart{
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 3px;
        img{
            width: 20px;
            height: 20px;

            display: grid;
            place-content: center;

            margin-top: 2px;
        }
    }

    @media (min-width: 1280px) {
        padding: 24px 123px;

        .page{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            gap: 47px;

            height: 80%;
        }

        img{
            width: 389px;
            height: 389px;
        }

        .infos{
            width: 690px;

            display: flex;
            flex-direction: column;
            align-items: flex-start;

            h1{
                font-size: 40px;
            }

            p{
                font-size: 24px;
                text-align: justify;
            }
            .ingredients{
                width: 100%;
                
                align-items: flex-start;
                justify-content: flex-start;
                gap: 12px;

                padding: 0;
            }
        }

    }

    
`