import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

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
                            <Col md="3">
                                <Card className="main-card mb-12">
                                    <CardHeader>
                                        <h3>Parametros</h3>
                                    </CardHeader>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4">
                                <Card className="main-card mb-12">
                                        <CardBody>
                                            <CardTitle>Selecciona los parametros para crear el reporte</CardTitle>
                                            <Row>
                                            <Col md="12">
                                                    <FormGroup>
                                                        
                                                        <Label for="añoSelect">Año</Label>
                                                        <CustomInput type="select" id="añoSelect"
                                                                    name="añoSelect">
                                                                    <option value="None">Selecciona</option>
                                                                    <option>2020</option>
                                                                    <option>2019</option>
                                                                    <option>2018</option>
                                                                    <option>2017</option>
                                                                    <option>2016</option>
                                                                    <option>2015</option>
                                                        </CustomInput>
                                                        
                                                
                                                        <Label for="mesSelect">Mes</Label>
                                                        <CustomInput type="select" id="mesSelect"
                                                                    name="mesSelect">
                                                                    <option value="None">Selecciona</option>
                                                                    <option>Enero</option>
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
                                                
                                                
                                                    
                                                        <Label for="categoriaSelect">Categoria</Label>
                                                        <CustomInput type="select" id="categoriaSelect"
                                                                    name="customSelect">
                                                                    <option value="None">Selecciona</option>
                                                                    <option>Estatal</option>
                                                                    <option>5 Estrellas</option>
                                                                    <option>4 Estrellas</option>
                                                                    <option>3 Estrellas</option>
                                                                    <option>2 Estrellas</option>
                                                                    <option>1 Estrellas</option>
                                                        </CustomInput>
                                                        <Button className="mb-2 mr-2" color="success">
                                                        <Link to="/tables/regular-tables-2">Click</Link>
                                                        </Button>
                                                        
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