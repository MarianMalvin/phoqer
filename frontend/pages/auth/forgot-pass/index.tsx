import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';

import { serverRedirect } from '../../../assets/helpers';
import trans from '../../../assets/trans';
import ForgotPassForm from '../../../components/common/auth/forgot-pass-form';
import AuthRedirect from '../../../components/context/auth/auth-redirect';
import Meta from '../../../components/layout/meta';
import AuthContainer from '../../../components/pages/auth/auth-container';
import { wrapper } from '../../../redux/store';

const ForgotPass = (): ReactElement => {
    return (
        <>
            <AuthRedirect reverse />
            <Meta title={trans('reset_password')} h1={trans('reset_password')} />
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
