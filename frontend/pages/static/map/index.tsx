import React, { ReactElement } from 'react';

import routes from '../../../assets/routes';
import Breadcrumbs from '../../../components/common/breadcrumbs';
import Construction from '../../../components/common/construction';
import Container from '../../../components/layout/container';
import PageLayout from '../../../components/layout/page-layout';
import Meta from '../../../components/meta';

const SiteMap = (): ReactElement => {
    return (
        <>
            <Meta title="Карта сайта" />
            <PageLayout>
                <Container>
                    <Breadcrumbs end="Карта сайта" data={[{ label: 'На главную страницу', link: routes.root }]} />
                    <Construction />
                </Container>
            </PageLayout>
        </>
    );
};

export default SiteMap;
