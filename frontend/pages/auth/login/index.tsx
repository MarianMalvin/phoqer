import React, { ReactElement } from 'react';

import LoginForm from '../../../components/Common/Auth/LoginForm';
import Meta from '../../../components/Common/Meta';
import AuthRedirect from '../../../components/HOC/Auth/AuthRedirect';
import serverRedirect from '../../../components/HOC/ServerRedirect';
import AuthContainer from '../../../components/Pages/Auth/AuthContainer';
import useTrans from '../../../hooks/trans.hook';
import { wrapper } from '../../../redux/store';

const Login = (): ReactElement => {
    const T = useTrans();
    return (
        <>
            <AuthRedirect reverse />
            <Meta title={T.login} h1={T.login} />
            <AuthContainer>
                <LoginForm />
            </AuthContainer>
        </>
    );
};

export const getInitialProps = wrapper.getServerSideProps(serverRedirect(null, null, true));

export default Login;
