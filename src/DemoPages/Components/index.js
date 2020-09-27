import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// COMPONENTS

import DensidadMain from './Densidad/';
import DerramaMain from './Derrama/';
import EstablecimientosMain from './Establecimientos/';
import HabitacionesMain from './Habitaciones/';
import TuristasMain from './Turistas/';
import OcupacionMain from './Ocupacion/';
import TurismoNocheMain from './TurismoNoche/';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Components = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    {/* Components */}

                    {/* Tabs */}

                    <Route path={`${match.url}/densidad`} component={DensidadMain}/>
                    <Route path={`${match.url}/derrama`} component={DerramaMain}/>
                    <Route path={`${match.url}/establecimientos`} component={EstablecimientosMain}/>
                    <Route path={`${match.url}/habitaciones`} component={HabitacionesMain}/>
                    <Route path={`${match.url}/turistas`} component={TuristasMain}/>
                    <Route path={`${match.url}/ocupacion`} component={OcupacionMain}/>
                    <Route path={`${match.url}/turismoNoche`} component={TurismoNocheMain}/>


                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Components;