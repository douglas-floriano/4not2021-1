import React from 'react'
import Title from '../Title/Title'
import AmericaHeader from './americaHeader'


import './america.css'

export default function America() {
    return (
        <>
            <AmericaHeader />
            <div className="america">
                <Title text="Região América" />

            </div>
        </>
    )
}