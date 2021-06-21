import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { ITabs } from '../../../../../interfaces';
import config from '../../../../../utils/config';
import { Theme } from '../../../../../utils/theming/theme';
import NavTabs from '../../index';
import { item, nav } from '../profile-nav.styles';

const useStyles = createUseStyles((theme: Theme) => ({
    item: item(theme),
    ...nav(theme),
    nav: {
        maxWidth: '100vw',
        marginTop: theme.rem(2),

        '& ul': {
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            marginBottom: theme.rem(0.6),

            ...theme.media(1060).max({
                marginBottom: theme.rem(2),
            }),
        },

        '& li': {
            width: '100%',

            ...theme.media(1060).max({
                width: 'auto',
            }),
        },
    },
}));

const ProfilePrivateNav = (): ReactElement => {
    const css = useStyles();
    const profileTabs: ITabs[] = config.userProfileLinks({ messages: 5, reviews: 4 });
    return <NavTabs tabs={profileTabs} classNameWrp={css.nav} className={css.item} activeClass={css.active} />;
};

export default ProfilePrivateNav;
