import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'

import Header from '../Header/Header'
import Home from '../Home/home'
import America from '../America/america'
import Asia from '../Asia/asia'
import Oceania from '../Oceania/oceania'
import Antartica from '../Antartica/antartica'
import Europa from '../Europa/europa'
import Patagonia from '../America/Regioes/AmericaSul/Content/patagonia'
import Cordilheira from '../America/Regioes/AmericaSul/Content/cordilheiradosandes'
import Cartagena from '../America/Regioes/AmericaSul/Content/cartagenacolombia'
import Vulcao from '../America/Regioes/AmericaSul/Content/vulcaoquilotoa'
import Pantanal from '../America/Regioes/AmericaSul/Content/pantanal'
import AmericaNorte from '../America/Regioes/AmericaNorte/americanorte'
import AmericaCentral from '../America/Regioes/AmericaCentral/americacentral'
import Equador from '../America/Regioes/Equador/equador'
import AmericaSul from '../America/Regioes/AmericaSul/americasul'
import Inferiores from '../America/Regioes/Inferiores/inferiores'
import Hidrografia from '../America/Regioes/AmericaSul/Content/Projects/hidrografia'
import Clima from '../America/Regioes/AmericaSul/Content/Projects/clima'
import Fauna from '../America/Regioes/AmericaSul/Content/Projects/fauna'
import Flora from '../America/Regioes/AmericaSul/Content/Projects/flora'
import Desmatamento from '../America/Regioes/AmericaSul/Content/Projects/desmatamento'


function App() {
  return (
    <>
      <Header />

      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Home />}></Route>
          <Route exact path="/america" render={(props) => <America />}></Route>
          <Route exact path="/asia" render={(props) => <Asia />}></Route>
          <Route exact path="/oceania" render={(props) => <Oceania />}></Route>
          <Route exact path="/antartica" render={(props) => <Antartica />}></Route>
          <Route exact path="/europa" render={(props) => <Europa />}></Route>
          <Route exact path="/america/americanorte" render={(props) => <AmericaNorte />}></Route>
          <Route exact path="/america/americacentral" render={(props) => <AmericaCentral />}></Route>
          <Route exact path="/america/equador" render={(props) => <Equador />}></Route>
          <Route exact path="america/inferiores" render={(props) => <Inferiores />}></Route>
          <Route exact path="/america/americasul" render={(props) => <AmericaSul />}></Route>
          <Route exact path="/america/americasul/patagonia" render={(props) => <Patagonia />}></Route>
          <Route exact path="/america/americasul/cordilheiradosandes" render={(props) => <Cordilheira />}></Route>
          <Route exact path="/america/americasul/cartagenacolombia" render={(props) => <Cartagena />}></Route>
          <Route exact path="/america/americasul/vulcaoquilotoa" render={(props) => <Vulcao />}></Route>
          <Route exact path="/america/americasul/pantanal" render={(props) => <Pantanal />}></Route>
          <Route exact path="/america/americasul/pantanal/hidrografia" render={(props) => <Hidrografia />}></Route>
          <Route exact path="/america/americasul/pantanal/clima" render={(props) => <Clima />}></Route>
          <Route exact path="/america/americasul/pantanal/fauna" render={(props) => <Fauna />}></Route>
          <Route exact path="/america/americasul/pantanal/flora" render={(props) => <Flora />}></Route>
          <Route exact path="/america/americasul/pantanal/desmatamento" render={(props) => <Desmatamento />}></Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
