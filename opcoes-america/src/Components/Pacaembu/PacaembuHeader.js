import React from 'react'
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function PacaembuHeader() {
    return (
        <>
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">- Voltar</Link></li>
                        <li><Link to="/pacaembu/pqUniversitario">Parque Universitário</Link></li>
                        <li><Link to="/pacaembu/villaDiCapri">Villa Di Capri</Link></li>
                        <li><Link to="/pacaembu/vittaResidencial">Vitta Residencial</Link></li>
                        <li><Link to="/pacaembu/quintaDOeste">Quinta D'Oeste</Link></li>
                        <li><Link to="/pacaembu/vivaReal">Viva Real</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}