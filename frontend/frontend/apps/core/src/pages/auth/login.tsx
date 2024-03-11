import { FC } from 'react';

import { AuthLayout } from '@app/components/Layout';
import { Meta } from '@app/components/Meta';
import dynamic from 'next/dynamic';

const AuthApp = dynamic(() => import('phoqer-auth').then(module => module.AuthApp), { ssr: false });

const ProtectedPage = dynamic(() => import('@app/components/Layout').then(module => module.ProtectedPage), { ssr: false });

const Login: FC = () => {
    return (
        <ProtectedPage>
            <AuthLayout>
                <Meta title="Phoqer - Log In to your account" />
                <AuthApp />
            </AuthLayout>
        </ProtectedPage>
    );
};

export default Login;
