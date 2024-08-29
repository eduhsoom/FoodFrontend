import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import GlobalStyle from './styles/globalStyle'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ToastContainer/>
    <Routes />
    </ThemeProvider>
  </AuthProvider>,
)
