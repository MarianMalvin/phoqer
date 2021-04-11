import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../../assets/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    '@keyframes loader': {
        '0%': { background: theme.palette.gray[1] },
        '50%': { background: theme.palette.gray[2] },
        '100%': { background: theme.palette.gray[1] },
    },
    wrp: {
        display: 'grid',
        gridTemplateColumns: theme.fr(7),
        gridGap: theme.rem(4, 3),
        ...theme.media(1200).max({
            gridTemplateColumns: theme.fr(5),
        }),
        ...theme.media(1000).max({
            gridTemplateColumns: theme.fr(4),
        }),
        ...theme.media(780).max({
            gridTemplateColumns: theme.fr(3),
        }),
        ...theme.media(550).max({
            gridTemplateColumns: theme.fr(2),
            gridGap: theme.rem(2, 1.5),
        }),
    },
    cat: {
        width: '100%',
        height: theme.rem(14),
        borderRadius: theme.radius,
        animation: '$loader 1s ease infinite',
    },
}));

const CategoriesLoader = (): ReactElement => {
    const css = useStyles();
    return (
        <div className={css.wrp}>
            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />

            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />
            <div className={css.cat} />
        </div>
    );
};

export default CategoriesLoader;