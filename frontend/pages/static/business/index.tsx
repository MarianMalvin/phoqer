import React, { ReactElement } from 'react';

import routes from '../../../assets/routes';
import Breadcrumbs from '../../../components/common/breadcrumbs';
import Construction from '../../../components/common/construction';
import Container from '../../../components/layout/container';
import PageLayout from '../../../components/layout/page-layout';
import Meta from '../../../components/meta';

const Advertising = (): ReactElement => {
    return (
        <>
            <Meta title="Реклама на сайте" />
            <PageLayout>
                <Container>
                    <Breadcrumbs end="Реклама на сайте" data={[{ label: 'На главную страницу', link: routes.root }]} />
                    <Construction />
                </Container>
            </PageLayout>
        </>
    );
};

export default Advertising;
