import React, {Component, Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import ChartJsCircular from './Examples/Circular';
import ChartJsLinesBars from './Examples/LinesBars';

const tabsContent = [
    {
        title: 'Establecimientos',
        content: <ChartJsCircular/>
    },
    {
        title: 'Llegada de turistas',
        content: <ChartJsLinesBars/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class ChartJSExamples extends Component {
    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Resultado de la busqueda"
                    icon="pe-7s-search icon-gradient bg-amy-crisp"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}