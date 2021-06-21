import React, { ReactElement } from 'react';

import Breadcrumbs from '../../../components/common/breadcrumbs';
import Construction from '../../../components/common/construction';
import Container from '../../../components/layout/container';
import PageLayout from '../../../components/layout/page-layout';
import Meta from '../../../components/meta';
import routes from '../../../utils/routes';

const Rules = (): ReactElement => {
    return (
        <>
            <Meta title="Условия использования" />
            <PageLayout>
                <Container>
                    <Breadcrumbs end="Условия использования" data={[{ label: 'На главную страницу', link: routes.root }]} />
                    <Construction />
                </Container>
            </PageLayout>
        </>
    );
};

export default Rules;
