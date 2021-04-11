import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../assets/theme';
import useMedia from '../../../hooks/media.hook';
import Container from '../../common/container';
import Logo from '../../common/logo';
import Socials from '../../common/socials';
import Warning from '../../common/warning';
import SiteMap from './site-map';

const useStyles = createUseStyles((theme: Theme) => ({
    footer: {
        padding: theme.rem(8, 0),
        background: theme.palette.gray[1],
        color: theme.palette.black[0],
    },
    wrp: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.rem(4),

        ...theme.media(768).max({
            display: 'block',
            textAlign: 'center',
        }),
    },
}));

const Footer = (): ReactElement => {
    const css = useStyles();
    const mobile = useMedia(768);
    return (
        <footer className={css.footer}>
            <Warning />
            <Container>
                <Logo center={!mobile} />
                <div className={css.wrp}>
                    <SiteMap />
                    <Socials center={!mobile} />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;