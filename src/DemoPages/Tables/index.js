import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// Tables

import RegularTables from './RegularTables';
import RegularTables2 from './RegularTables2';
import RegularTables3 from './RegularTables3';
import RegularTables4 from './RegularTables4';
import RegularTables5 from './RegularTables5';
import RegularTables6 from './RegularTables6';

// Layout

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Tables = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">

                    {/* Tables */}

                    <Route path={`${match.url}/regular-tables`} component={RegularTables}/>
                    <Route path={`${match.url}/regular-tables-2`} component={RegularTables2}/>
                    <Route path={`${match.url}/regular-tables-3`} component={RegularTables3}/>
                    <Route path={`${match.url}/regular-tables-4`} component={RegularTables4}/>
                    <Route path={`${match.url}/regular-tables-5`} component={RegularTables5}/>
                    <Route path={`${match.url}/regular-tables-6`} component={RegularTables6}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Tables;