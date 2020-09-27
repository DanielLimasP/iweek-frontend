import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LineExample from '../line';
import LineExample2 from '../line2';
import LineExample3 from '../line3';
import LineExample4 from '../line4';
import LineExample5 from '../line5';
import LineExample6 from '../line6';
import BarExample from '../bar';
import HorizontalBarExample from '../horizontalBar';
import MixExample from '../mix';

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

export default class ChartJsLinesBars extends React.Component {
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
                    <Row>
                        <Col lg="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Nuevo Casas Grandes. Llegada de Turistas 2019.</CardTitle>
                                    <LineExample/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Madera. Llegada de turistas 2019</CardTitle>
                                    <LineExample2/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row><Row>
                        <Col lg="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Bocoyna. Llegada de Turistas 2019.</CardTitle>
                                    <LineExample3/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Ocampo. Llegada de turistas 2019</CardTitle>
                                    <LineExample4/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Urique. Llegada de Turistas 2019.</CardTitle>
                                    <LineExample5/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>Guachochi. Llegada de turistas 2019</CardTitle>
                                    <LineExample6/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
