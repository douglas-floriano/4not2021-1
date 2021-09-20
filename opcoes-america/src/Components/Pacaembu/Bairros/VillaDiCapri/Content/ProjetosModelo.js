import React from 'react'
import Title from '../../../../Title/Title'
import ProjetosModeloHeader from '../Content/ProjetosModeloHeader'

import './Content.css'

export default function ProjetosModelo() {
    return (
        <>
            <ProjetosModeloHeader />
            <Title text="Projetos Modelo" />
            <div className="projetosModelo">
            </div>
        </>
    )
}