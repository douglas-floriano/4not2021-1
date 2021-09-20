import React from 'react'
import Title from '../../../Title/Title'
import AmericaSulHeader from '../AmericaSul/americasulHeader'

import './americasul.css'

export default function AmericaSul() {
    return (
        <>
            <AmericaSulHeader />           
            <Title text="América do Sul" />
            <div className="americasul">
            </div>
        </>
    )
}