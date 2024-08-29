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

    padding: 11px 32px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: 1280px){
        padding: 11px 123px;
        height: 100%;
    }
`

export const Form = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;

    .col-3{
        width: 100%;

        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
    }
    .col-2{
        width: 100%;

        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
    }

    .inputWrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 16px;

        > span, label{
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;

            color: ${({theme}) => theme.COLORS.LIGHT_400};
        }

        input{
            width: 100%;
            height: 48px;

            background: ${({theme}) => theme.COLORS.DARK_900};

            border-radius: 5px;
            padding: 14px 16px;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;

            color: ${({theme}) => theme.COLORS.LIGHT_100};

            border: 0;
            outline: 0;

        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0; 
            }

    }
    .food{
        > label {
            height: 48px;
            width: 100%;

            display: flex;
            align-items: center;
            justify-content: start;

            cursor: pointer;

            background: ${({theme}) => theme.COLORS.DARK_800};

            border-radius: 5px;
            padding: 12px 32px;

            svg {
                width: 24px;
                height: 24px;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                margin-right: 8px;
            }

            span {
                font-family: 'Poppins';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 24px;

                white-space: nowrap;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }

            input {
                display: none;
            }
    }
    }

    .select {
        select{
            width: 100%;
            height: 48px;

            cursor: pointer;

            background: ${({theme}) => theme.COLORS.DARK_900};

            border-radius: 5px;
            padding: 14px 16px;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;

            white-space: nowrap;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            outline: 0;
            border: 0;
        }
    }

    .textarea{
        textarea{
            width: 100%;
            height: 200px;

            background: ${({theme}) => theme.COLORS.DARK_900};

            border-radius: 5px;
            padding: 15px;

            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;

            color: ${({ theme }) => theme.COLORS.LIGHT_100};

            outline: 0;
            border: 0;

            resize: none
        }
    }

    @media (min-width: 1280px) {
        height: 100%;

        .col-3{
            display: grid;
            grid-template-columns: 260px 1fr 400px;
            align-items: center;
            gap: 32px;
        }

        .col-2{
            display: grid;
            grid-template-columns: 1fr 251px;
            align-items: center;
            gap: 32px;
        }

        .push{
            width: 100%;
            display: grid;
            grid-template-columns: 172px;
            justify-content: flex-end;
        }
    }
`

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;

    > label{
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;

            color: ${({theme}) => theme.COLORS.LIGHT_400};

            
    }

    > div {
        width: 100%;
        height: 48px;

        display: flex;
        align-items: center;
        gap: 24px;
        border-radius: 10px;

        background-color: ${({theme})=> theme.COLORS.DARK_800};

        overflow-x: auto;
    }

`