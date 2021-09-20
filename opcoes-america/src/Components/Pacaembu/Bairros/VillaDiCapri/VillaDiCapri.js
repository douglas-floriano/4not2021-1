import React from 'react'
import Title from '../../../Title/Title'
import VillaDiCapriHeader from '../VillaDiCapri/VillaDiCapriHeader'

import './VillaDiCapri.css'

export default function VillaDiCapri() {
    return (
        <>
            <VillaDiCapriHeader />           
            <Title text="Villa Di Capri" />
            <div className="villaDiCapri">
            </div>
        </>
    )
}