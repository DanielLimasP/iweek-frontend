import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import {
    TabContent, TabPane, Nav, NavItem, NavLink,
    Row, Col, CardHeader, CardFooter,
    Card, CardBody, CardTitle,
    Button, ButtonGroup, CustomInput, Form, FormGroup, Label
} from 'reactstrap';

export default class AdvacedReport extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            activeTab: '1',
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-12">
                                    <CardHeader>
                                        <h3>Parametros</h3>
                                    </CardHeader>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Selecciona los parametros para crear el reporte</CardTitle>
                                            <Row>
                                            <Col md="4">
                                                    <FormGroup>
                                                        <Label for="exampleCustomSelect">Año</Label>
                                                        <CustomInput type="select" id="exampleCustomSelect"
                                                                    name="customSelect">
                                                                    <option value="">2020</option>
                                                                    <option>2019</option>
                                                                    <option>2018</option>
                                                                    <option>2017</option>
                                                                    <option>2016</option>
                                                                    <option>2015</option>
                                                        </CustomInput>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label for="exampleCustomSelect">Mes</Label>
                                                        <CustomInput type="select" id="exampleCustomSelect"
                                                                    name="customSelect">
                                                                    <option value="">Enero</option>
                                                                    <option>Febrero</option>
                                                                    <option>Marzo</option>
                                                                    <option>Abril</option>
                                                                    <option>Mayo</option>
                                                                    <option>Junio</option>
                                                                    <option>Julio</option>
                                                                    <option>Agosto</option>
                                                                    <option>Septiembre</option>
                                                                    <option>Octubre</option>
                                                                    <option>Noviembre</option>
                                                                    <option>Diciembre</option>
                                                        </CustomInput>
                                                    </FormGroup>
                                                </Col>
                                                <Col md="4">
                                                    <FormGroup>
                                                        <Label for="exampleCustomSelect">Categoria</Label>
                                                        <CustomInput type="select" id="exampleCustomSelect"
                                                                    name="customSelect">
                                                                    <option value="">Estatal</option>
                                                                    <option>5 Estrellas</option>
                                                                    <option>4 Estrellas</option>
                                                                    <option>3 Estrellas</option>
                                                                    <option>2 Estrellas</option>
                                                                    <option>1 Estrellas</option>
                                                        </CustomInput>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}