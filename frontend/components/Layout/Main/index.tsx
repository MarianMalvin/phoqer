import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../config/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    main: {
        margin: theme.rem(8, 0, 16),

        '@media (max-width: 900px)': {
            margin: theme.rem(3, 0, 6),
        },
    },
}));

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const Main = ({ children }: Props): ReactElement => {
    const css = useStyles();
    return <main className={css.main}>{children}</main>;
};

export default Main;