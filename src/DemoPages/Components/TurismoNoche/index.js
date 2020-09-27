import React, {Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../Layout/AppMain/PageTitle';

// Examples
import AdvancedReport from './Search/Advanced';
import BasicReport from './Search/Basic';

const tabsContent = [
    {
        title: 'Creacion avanzada',
        content: <AdvancedReport/>
    },
    {
        title: 'Creacion basica',
        content: <BasicReport/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class TurismoMain extends React.Component {

    render() {

        return (
            <Fragment>
                <PageTitle
                    heading="Creacion de reportes"
                    icon="pe-7s-note icon-gradient bg-happy-itmeo"
                />
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false} showInkBar={true} items={getTabs()}/>
            </Fragment>
        );
    }
}