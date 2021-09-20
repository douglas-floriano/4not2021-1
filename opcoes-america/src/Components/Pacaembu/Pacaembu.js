import React from 'react'
import Title from '../Title/Title'
import PacaembuHeader from './PacaembuHeader'

import './Pacaembu.css'

export default function Pacaembu() {
    return (
        <>
            <PacaembuHeader />            
            <div className="pacaembu">
                <Title text="Pacaembu Construtora" />
                
            </div>
        </>
    )
}