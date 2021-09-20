import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Header from '../Header/Header'
import Home from '../Home/Home'
import America from '../America/america'
import Projeto from '../Projeto/Projeto'
import Pacaembu from '../Pacaembu/Pacaembu'
import Perplan from '../Perplan/Perplan'
import Mrv from '../Mrv/Mrv'
import PqUniversitario from '../Pacaembu/Bairros/PqUniversitario/PqUniversitario'
import QuintaDOeste from '../Pacaembu/Bairros/QuintaDOeste/QuintaDOeste'
import VillaDiCapri from '../Pacaembu/Bairros/VillaDiCapri/VillaDiCapri'
import VittaResidencial from '../Pacaembu/Bairros/VittaResidencial/VittaResidencial'
import VivaReal from '../Pacaembu/Bairros/VivaReal/VivaReal'
import Corretores from '../Pacaembu/Bairros/VillaDiCapri/Content/Corretores'
import Financiamento from '../Pacaembu/Bairros/VillaDiCapri/Content/Financiamento'
import Investimento from '../Pacaembu/Bairros/VillaDiCapri/Content/Investimento'
import ProjetosModelo from '../Pacaembu/Bairros/VillaDiCapri/Content/ProjetosModelo'
import Apartamentos from '../Pacaembu/Bairros/VillaDiCapri/Content/Projects/Apartamentos'
import Casas from '../Pacaembu/Bairros/VillaDiCapri/Content/Projects/Casas'
import Ediculas from '../Pacaembu/Bairros/VillaDiCapri/Content/Projects/Ediculas'
import Lazer from '../Pacaembu/Bairros/VillaDiCapri/Content/Projects/Lazer'
import Sobrados from '../Pacaembu/Bairros/VillaDiCapri/Content/Projects/Sobrados'

function App() {
  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Home />}></Route>
          <Route exact path="/america" render={(props) => <America />}></Route>
          <Route exact path="/projeto" render={(props) => <Projeto />}></Route>
          <Route exact path="/pacaembu" render={(props) => <Pacaembu />}></Route>
          <Route exact path="/perplan" render={(props) => <Perplan />}></Route>
          <Route exact path="/mrv" render={(props) => <Mrv />}></Route>
          <Route exact path="/pacaembu/pqUniversitario" render={(props) => <PqUniversitario />}></Route>
          <Route exact path="/pacaembu/quintaDOeste" render={(props) => <QuintaDOeste />}></Route>
          <Route exact path="/pacaembu/villaDiCapri" render={(props) => <VillaDiCapri />}></Route>
          <Route exact path="/pacaembu/vittaResidencial" render={(props) => <VittaResidencial />}></Route>
          <Route exact path="/pacaembu/vivaReal" render={(props) => <VivaReal />}></Route>
          <Route exact path="/pacaembu/villaDiCapri/corretores" render={(props) => <Corretores />}></Route>
          <Route exact path="/pacaembu/villaDiCapri/financiamento" render={(props) => <Financiamento />}></Route>
          <Route exact path="/pacaembu/villaDiCapri/investimento" render={(props) => <Investimento />}></Route>
          <Route exact path="/pacaembu/villaDiCapri/projetosModelo" render={(props) => <ProjetosModelo />}></Route>
          <Route exact path="/pacaembu/villaDiCapri/projetosModelo/apartamentos" render={(props) => <Apartamentos />}></Route>
          <Route exact path="/pacaembu/villaDiCapri/projetosModelo/casas" render={(props) => <Casas />}></Route>
          <Route exact path="/pacaembu/villaDiCapri/projetosModelo/ediculas" render={(props) => <Ediculas />}></Route>
          <Route exact path="/pacaembu/villaDiCapri/projetosModelo/lazer" render={(props) => <Lazer />}></Route>
          <Route exact path="/pacaembu/villaDiCapri/projetosModelo/sobrados" render={(props) => <Sobrados />}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
