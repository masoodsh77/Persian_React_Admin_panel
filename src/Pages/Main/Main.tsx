import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Header, Menu, Slider } from '../../Components'

function Main(props:RouteComponentProps) {
    return (
        <>
            <Header/>
            <Menu/>
            <Slider/>
        </>
    )
}

export default Main
