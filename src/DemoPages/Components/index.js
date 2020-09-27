import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// COMPONENTS

import DensidadMain from './Densidad/';

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


                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Components;