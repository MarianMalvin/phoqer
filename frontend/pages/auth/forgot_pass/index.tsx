import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';

import ForgotPassForm from '../../../components/Common/Auth/ForgotPassForm';
import Meta from '../../../components/Common/Meta';
import AuthRedirect from '../../../components/HOC/Auth/AuthRedirect';
import serverRedirect from '../../../components/HOC/ServerRedirect';
import AuthContainer from '../../../components/Layout/AuthContainer';
import useTrans from '../../../hooks/trans.hook';
import { wrapper } from '../../../redux/store';

const ForgotPass = (): ReactElement => {
    const T = useTrans();
    return (
        <>
            <AuthRedirect reverse />
            <Meta title={T.reset_password} h1={T.reset_password} />
            <AuthContainer>
                <ForgotPassForm />
            </AuthContainer>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((ctx): void => {
    serverRedirect((ctx as unknown) as GetServerSidePropsContext, null, true);
});

export default ForgotPass;
