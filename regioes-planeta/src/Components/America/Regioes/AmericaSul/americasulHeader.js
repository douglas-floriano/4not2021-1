import React from 'react'
import { Link } from 'react-router-dom'

import '../../../Header/Header.css'

export default function AmericaSulHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/america">Voltar</Link></li>
                        <li><Link to="/america/americasul/patagonia">Patagonia</Link></li>
                        <li><Link to="/america/americasul/cordilheiradosandes">Cardilheira dos Andes</Link></li>
                        <li><Link to="/america/americasul/cartagenacolombia">Cartagena-Colômbia</Link></li>
                        <li><Link to="/america/americasul/pantanal">Pantanal</Link></li>
                        <li><Link to="/america/americasul/vulcaoquilotoa">Vulcão Quilotoa-Equador</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}