import React from 'react'
import { Link } from 'react-router-dom'

import '../../../Header/Header.css'

export default function VillaDiCapriHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">- Menu</Link></li>
                        <li><Link to="/pacaembu">- Voltar</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri/corretores">Corretores</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri/financiamento">Financiamento</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri/projetosModelo">Projetos Modelo</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri/investimento">Investimento</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}