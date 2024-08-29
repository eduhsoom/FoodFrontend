import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    *::-webkit-scrollbar{
        width: 10px;
    }
    *::-webkit-scrollbar-thumb{
        background-color: ${({theme}) => theme.COLORS.DARK_1000};
        border-radius: 20px;
    }

    body{
        background: ${({theme}) => theme.COLORS.DARK_400};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    
        -webkit-font-smoothing: antialiased;

        overflow-x: hidden;
    }

    body, input, button, textarea {
        font-family: 'Roboto', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }

    button, input{
        border: none;
    }

    textarea:focus, input:focus, select:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }

  @keyframes slide-bot {
  0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

  @keyframes slide-top {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes slide-menu {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-400px);
    transform: translateX(-400px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

`