import React from 'react'
import Title from '../../../../../Title/Title'
import ProjetosModeloHeader from '../ProjetosModeloHeader'

import './Projects.css'

export default function Apartamentos() {
    return (
        <>  
            <ProjetosModeloHeader />
            <Title text="Apartamentos" />
            <div className="apartamentos"> 
            </div>
        </>
    )
}