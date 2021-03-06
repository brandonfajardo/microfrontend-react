import React from 'react'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName }  from '@material-ui/core'


export default () => {
    const generateClassName = createGenerateClassName({
        productionPrefix: 'co'
    })

    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <Header />
            <MarketingApp />
        </StylesProvider>
    </BrowserRouter>
    )
}