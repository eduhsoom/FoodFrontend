import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
width: 100vw;

grid-template-rows: '100px 1fr';
grid-template-areas: 
"header"
"content"
;


overflow-x: hidden;

`

export const Content = styled.main`
    grid-area: content;

    margin-top: 100px;
    
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 24px;
`


export const Info = styled.div`
    width: 380px;
    height: 120px;

    margin: 30px 0 60px;

    background: ${({theme}) => theme.COLORS.GRADIENT_2};

    display: flex;
    align-items: center;

    gap: 30px;

    border-radius: 3px;

    margin-left: 24px;

    .ImageMobileDiv{
        position: relative;
        width: 191px;
        height: 141px;

        img{
            position: absolute;

            left: -30px;
            top: -18px;
        }
    }

    .ImageDesktopDiv{
        position: relative;
        width: 600px;
        height: 400px;

        display: none;

        img{
            position: absolute;

            left: -68px;
            top: -70px;
        }
    }
    
    .InfoText{
        font-family: 'Poppins';
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        
        h2{
            font-weight: 600;
            font-size: 18px;
        }
        p{
            font-weight: 400;
            font-size: 12px;
        }
    }

    @media (min-width: 1280px) {
        width: 1120px;
        height: 260px;

        margin: 164px 0 62px;

        gap: 0px;

        .ImageMobileDiv{
            display: none;
        }
        .ImageDesktopDiv{
            display: block;
        }

        .InfoText{
            h2{
                font-weight: 500;
                font-size: 40px;
            }
            p{
                font-size: 16px;
            }
    }
        
    }
`

export const Section = styled.section`
    width: calc(100vw - 24px);

    display: flex;
    flex-direction: column;
    text-align: left;

    gap: 24px;

    padding-left: 24px;

    h1{
        font-family: 'Poppins';
        font-weight: 500;
        font-size: 18px;

        color: ${({theme}) => theme.COLORS.LIGHT_300}
    }

    .cards{
        width: 100%;

        overflow-x: auto;
        display: flex;
        align-items: center;

        gap: 16px;
    }

    @media (min-width: 1280px) {
        width: 1122px;
        margin: 0 auto;

        h1{
            font-size: 32px;
        }
    }

`