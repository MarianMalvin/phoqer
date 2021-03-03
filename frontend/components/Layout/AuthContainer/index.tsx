import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../assets/theme';
import Container from '../Container';
import Main from '../TagMain';

const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '@media (max-width: 1000px)': {
            flexDirection: 'column',
        },
    },
    form: {
        width: theme.rem(40),
        marginLeft: theme.rem(4),

        '@media (max-width: 1000px)': {
            margin: 0,
        },

        '@media (max-width: 420px)': {
            width: '100%',
        },
    },
    img: {
        height: '70vh',
        width: theme.rem(70),
        marginRight: theme.rem(4),
        borderRadius: theme.radius,
        objectFit: 'cover',

        '@media (max-width: 1350px)': {
            width: '60%',
        },

        '@media (max-width: 1000px)': {
            width: '100%',
            height: '20vh',
            margin: theme.rem(0, 0, 6),
        },

        '@media (max-width: 420px)': {
            margin: theme.rem(0, 0, 3),
        },
    },
}));

interface IProps {
    children: JSX.Element | JSX.Element[];
}

const AuthContainer = ({ children }: IProps): ReactElement => {
    const css = useStyles();

    return (
        <Main>
            <Container>
                <div className={css.root}>
                    <img className={css.img} src="/login.jpg" alt="" />
                    <div className={css.form}>{children}</div>
                </div>
            </Container>
        </Main>
    );
};

export default AuthContainer;