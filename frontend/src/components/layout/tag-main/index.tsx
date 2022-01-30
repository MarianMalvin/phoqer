import React, { ReactElement } from 'react';

import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../utils/theming/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    main: {
        minHeight: '50vh',
        background: theme.palette.white,
    },
    padding: {
        padding: theme.rem(6, 0),
    },
}));

interface Props {
    children: JSX.Element[] | JSX.Element;
    padding?: boolean;
}

const Main = ({ children, padding }: Props): ReactElement => {
    const css = useStyles();
    return <main className={clsx(css.main, padding && css.padding)}>{children}</main>;
};

export default Main;
