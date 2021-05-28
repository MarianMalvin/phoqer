import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { serverRedirect } from '../../../assets/helpers';
import routes from '../../../assets/routes';
import template from '../../../assets/template';
import { Theme } from '../../../assets/theme';
import LoginForm from '../../../components/common/auth/login-form';
import { modal } from '../../../components/common/modal';
import SmallModalWrp from '../../../components/common/modal/small-modal-wrp';
import AuthRedirect from '../../../components/context/auth/auth-redirect';
import Container from '../../../components/layout/container';
import Header from '../../../components/layout/header';
import Meta from '../../../components/layout/meta';
import useAuth from '../../../hooks/auth.hook';
import useTrans from '../../../hooks/trans.hook';
import { wrapper } from '../../../redux/store';

const ConfettiWrp = dynamic(() => import('../../../components/common/confetti'), { ssr: false });

const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        position: 'relative',
        height: '100vh',
        paddingTop: theme.rem(25),
        background: theme.palette.primary[0],
    },
    flex: {
        display: 'flex',
    },
    row: {
        width: '48%',
    },
    btn: {
        ...template(theme).btn,
        background: theme.palette.white,
        color: theme.palette.black[0],
        marginRight: theme.rem(1),
        ...theme.hover({
            border: theme.border(0.2, theme.palette.white), // rewrite default styles
        }),
    },
    title: {
        fontSize: theme.rem(2.4),
        fontWeight: theme.text.weight[3],
        color: theme.palette.trueWhite,
        marginBottom: theme.rem(2),
    },
    text: {
        marginBottom: theme.rem(4),
        fontSize: theme.rem(1.8),
        color: theme.palette.trueWhite,
    },
    logo: {
        position: 'absolute',
        bottom: theme.rem(2),
        right: theme.rem(2),
        height: '30%',
        width: '70%',

        '& svg': {
            width: '100%',
            height: '100%',
            fill: theme.palette.white,
            opacity: 0.2,
        },
    },
}));

const Confirmation = (): ReactElement => {
    const css = useStyles();
    const auth = useAuth();
    const trans = useTrans();

    const handleLogin = (): void => {
        if (!auth?.access_token) {
            modal.open(
                <SmallModalWrp>
                    <LoginForm />
                </SmallModalWrp>,
            );
            return;
        }
    };

    return (
        <>
            <AuthRedirect reverse />
            <Meta title={'Спасибо за регистрацию!'} />
            <Header />
            <ConfettiWrp />
            <div className={css.root}>
                <Container>
                    <div className={css.flex}>
                        <div className={css.row}>
                            <h2 className={css.title}>{trans('confirmation')}</h2>
                            <p className={css.text}>
                                Лол кек чебурек Лол кек чебурек. Лол кек чебурек Лол кек чебурек Лол кек чебурекЛол кек чебурек
                            </p>

                            <div className={css.flex}>
                                <Link href={routes.root}>
                                    <a className={css.btn}>{trans('to_home')}</a>
                                </Link>
                                <button className={css.btn} onClick={handleLogin}>
                                    {trans('login')}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={css.logo}>
                        <svg viewBox="0 0 148 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3676 8.6C14.3516 8.6 16.069 8.93067 17.5196 9.592C18.9916 10.2533 20.1223 11.192 20.9116 12.408C21.701 13.624 22.0956 15.064 22.0956 16.728C22.0956 18.3707 21.701 19.8107 20.9116 21.048C20.1223 22.264 18.9916 23.2027 17.5196 23.864C16.069 24.504 14.3516 24.824 12.3676 24.824H7.85563V31H2.67163V8.6H12.3676ZM12.0796 20.6C13.637 20.6 14.821 20.2693 15.6316 19.608C16.4423 18.9253 16.8476 17.9653 16.8476 16.728C16.8476 15.4693 16.4423 14.5093 15.6316 13.848C14.821 13.1653 13.637 12.824 12.0796 12.824H7.85563V20.6H12.0796ZM46.3406 8.6V31H41.1566V21.816H30.9806V31H25.7966V8.6H30.9806V17.432H41.1566V8.6H46.3406ZM62.4884 31.384C60.163 31.384 58.0617 30.8827 56.1844 29.88C54.3284 28.8773 52.867 27.5013 51.8004 25.752C50.755 23.9813 50.2324 21.9973 50.2324 19.8C50.2324 17.6027 50.755 15.6293 51.8004 13.88C52.867 12.1093 54.3284 10.7227 56.1844 9.72C58.0617 8.71733 60.163 8.216 62.4884 8.216C64.8137 8.216 66.9044 8.71733 68.7604 9.72C70.6164 10.7227 72.0777 12.1093 73.1444 13.88C74.211 15.6293 74.7444 17.6027 74.7444 19.8C74.7444 21.9973 74.211 23.9813 73.1444 25.752C72.0777 27.5013 70.6164 28.8773 68.7604 29.88C66.9044 30.8827 64.8137 31.384 62.4884 31.384ZM62.4884 26.968C63.811 26.968 65.0057 26.6693 66.0724 26.072C67.139 25.4533 67.971 24.6 68.5684 23.512C69.187 22.424 69.4964 21.1867 69.4964 19.8C69.4964 18.4133 69.187 17.176 68.5684 16.088C67.971 15 67.139 14.1573 66.0724 13.56C65.0057 12.9413 63.811 12.632 62.4884 12.632C61.1657 12.632 59.971 12.9413 58.9044 13.56C57.8377 14.1573 56.995 15 56.3764 16.088C55.779 17.176 55.4804 18.4133 55.4804 19.8C55.4804 21.1867 55.779 22.424 56.3764 23.512C56.995 24.6 57.8377 25.4533 58.9044 26.072C59.971 26.6693 61.1657 26.968 62.4884 26.968ZM102.864 33.4C102.139 34.296 101.254 34.9787 100.208 35.448C99.1844 35.9173 98.0537 36.152 96.8164 36.152C95.1524 36.152 93.6484 35.7893 92.3044 35.064C90.9604 34.36 89.4244 33.1013 87.6964 31.288C85.6697 31.032 83.8564 30.3813 82.2564 29.336C80.6777 28.2907 79.4404 26.9467 78.5444 25.304C77.6697 23.64 77.2324 21.8053 77.2324 19.8C77.2324 17.6027 77.755 15.6293 78.8004 13.88C79.867 12.1093 81.3284 10.7227 83.1844 9.72C85.0617 8.71733 87.163 8.216 89.4884 8.216C91.8137 8.216 93.9044 8.71733 95.7604 9.72C97.6164 10.7227 99.0777 12.1093 100.144 13.88C101.211 15.6293 101.744 17.6027 101.744 19.8C101.744 22.4027 101.008 24.6853 99.5364 26.648C98.0857 28.6107 96.155 29.976 93.7444 30.744C94.2777 31.2987 94.7897 31.6933 95.2804 31.928C95.7924 32.184 96.3364 32.312 96.9124 32.312C98.299 32.312 99.515 31.7573 100.56 30.648L102.864 33.4ZM82.4804 19.8C82.4804 21.1867 82.779 22.424 83.3764 23.512C83.995 24.6 84.8377 25.4533 85.9044 26.072C86.971 26.6693 88.1657 26.968 89.4884 26.968C90.811 26.968 92.0057 26.6693 93.0724 26.072C94.139 25.4533 94.971 24.6 95.5684 23.512C96.187 22.424 96.4964 21.1867 96.4964 19.8C96.4964 18.4133 96.187 17.176 95.5684 16.088C94.971 15 94.139 14.1573 93.0724 13.56C92.0057 12.9413 90.811 12.632 89.4884 12.632C88.1657 12.632 86.971 12.9413 85.9044 13.56C84.8377 14.1573 83.995 15 83.3764 16.088C82.779 17.176 82.4804 18.4133 82.4804 19.8ZM122.984 26.84V31H105.64V8.6H122.568V12.76H110.792V17.624H121.192V21.656H110.792V26.84H122.984ZM141.381 31L137.061 24.76H136.805H132.293V31H127.109V8.6H136.805C138.789 8.6 140.506 8.93067 141.957 9.592C143.429 10.2533 144.56 11.192 145.349 12.408C146.138 13.624 146.533 15.064 146.533 16.728C146.533 18.392 146.128 19.832 145.317 21.048C144.528 22.2427 143.397 23.16 141.925 23.8L146.949 31H141.381ZM141.285 16.728C141.285 15.4693 140.88 14.5093 140.069 13.848C139.258 13.1653 138.074 12.824 136.517 12.824H132.293V20.632H136.517C138.074 20.632 139.258 20.2907 140.069 19.608C140.88 18.9253 141.285 17.9653 141.285 16.728Z" />
                        </svg>
                    </div>
                </Container>
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((ctx): void => {
    serverRedirect(ctx as unknown as GetServerSidePropsContext, null, true);
});

export default Confirmation;
