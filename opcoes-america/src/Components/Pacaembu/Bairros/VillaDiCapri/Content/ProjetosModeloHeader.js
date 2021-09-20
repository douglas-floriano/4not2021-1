import React from "react"
import { Link } from 'react-router-dom'

import '../../../../Header/Header.css'

export default function ProjetosModeloHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">- Menu</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri">- Voltar</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri/projetosModelo/apartamentos">Apartamentos</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri/projetosModelo/casas">Casas</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri/projetosModelo/lazer">Lazer</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri/projetosModelo/ediculas">Ediculas</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri/projetosModelo/sobrados">Sobrados</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}