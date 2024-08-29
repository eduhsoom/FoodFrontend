import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;

    z-index: 2;

    .desktop{
        padding: 28px 120px;

        display: none;

        grid-template-columns: 210px 581px 216px 30px;

        align-items: center;
        justify-content: space-evenly;

        gap: 32px;
        
        background: ${({theme}) => theme.COLORS.DARK_700};

        .addCart{
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 3px;

            img{
                width: 26px;
                height: 22px;

                display: grid;
                place-content: center;

            }
        }
    }

    .mobile{
        padding: 32px 30px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background: ${({theme}) => theme.COLORS.DARK_700};

        transition: ease 0.3s;

    }

    .MenuOn{
        justify-content: flex-start;
        gap: 16px;
        padding: 34px 28px;
    }

    .hidden{
        display: none;
    }

    .show{
        display: flex;
    }

    @media (min-width: 1280px) {
        .mobile{
            display: none;
        }
        .desktop{
            display: grid;
        }
    }
`

export const IconButton = styled.button`
      font-size: 28px;
      background: none;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({theme}) => theme.COLORS.LIGHT_100};

      position: relative;

      span{
        background: ${({theme}) => theme.COLORS.TOMATO_100};
        border-radius: 50%;

        height: 20px;
        width: 20px;

        display: grid;
        place-content: center;

        font-family: 'Poppins';
        font-weight: 500;
        font-size: 14px;

        position: absolute;
        top: -5px;
        right: -5px;
      }

      
    @media (min-width: 1280px) {
        font-size: 22px;
    }
`

export const Logo = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;

        h1{
            font-size: 21px;
            font-weight: 700;
            line-height: 25px;

            display: flex;
            align-items: start;
            gap: 8px;

            span{
                font-family: 'Roboto';
                font-weight: 400;
                font-size: 12px;

                color: ${({theme}) => theme.COLORS.CAKE_200};
            }
        }

        img{
            height: 24px;
            width: 24px;
        }
    
`

export const Menu = styled.div`
    width: 100%;
    padding: 36px 28px;
    background: ${({theme}) => theme.COLORS.DARK_400};

    display: flex;
    flex-direction: column;
    gap: 36px;

    animation: slide-menu 0.3s backwards;

    ul{
        list-style: none;
    }

    li{
        font-family: 'poppins';
        font-size: 18px;
        font-weight: 300;

        padding: 10px;

        color: ${({theme}) => theme.COLORS.LIGHT_300};

        border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000}
    }

`
export const Search = styled.div`
    width: 100%;

    display: flex;
    align-items: center;

    background: ${({theme}) => theme.COLORS.DARK_900};

    border-radius: 5px;
    padding: 0 14px;

    svg{
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
    }
    input{
        background: none;
        border: none;
    }
    input:focus{
        border: none;
    }
    input::placeholder{
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
`