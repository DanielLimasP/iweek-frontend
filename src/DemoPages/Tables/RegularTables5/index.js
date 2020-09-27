import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import TableExample from './Examples/Table';
import TableBordered from './Examples/TableBordered';
import TableBorderless from './Examples/TableBorderless';
import TableDark from './Examples/TableDark';
import TableHover from './Examples/TableHover';
import TableResponsive from './Examples/TableResponsive';
import TableSizing from './Examples/TableSizing';
import TableStriped from './Examples/TableStriped';
import CustomTable from './Custom/dynamicTable.js';




const RegularTables = (props) => {
    return (
        <Fragment>
            <PageTitle
                heading="Tables "
                subheading="Tables are the backbone of almost all web applications."
                icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
            />
            <ReactCSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row>
                    <Col lg="12">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Ocupación - Coyame del Sotol - Desierto - 2020</CardTitle>
                                <CustomTable></CustomTable>
                                
                            </CardBody>
                        </Card>
                    </Col>
                   
                </Row>
            </ReactCSSTransitionGroup>
        </Fragment>
    );
};

export default RegularTables;
