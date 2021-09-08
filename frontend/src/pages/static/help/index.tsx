import React, { ReactElement } from 'react';

import Breadcrumbs from '../../../components/common/breadcrumbs';
import Construction from '../../../components/common/notifications/construction';
import Container from '../../../components/layout/container';
import PageLayout from '../../../components/layout/page-layout';
import Meta from '../../../components/meta';
import routes from '../../../utils/routes';

const Help = (): ReactElement => {
    return (
        <>
            <Meta title="Помощь и Обратная связь" />
            <PageLayout>
                <Container>
                    <Breadcrumbs end="Помощь и Обратная связь" data={[{ label: 'На главную страницу', link: routes.root }]} />
                    <Construction />
                </Container>
            </PageLayout>
        </>
    );
};

export default Help;