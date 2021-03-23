import { createUseStyles } from 'react-jss';

import { Theme } from '../../../../assets/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        fontSize: theme.rem(1.4),
        '@media (max-width: 768px)': {
            fontSize: theme.rem(1.6),
        },
    },
    title: {
        marginBottom: theme.rem(1),
        fontSize: 'inherit',
        fontWeight: theme.text.weight[2],
        color: theme.palette.black[0],
    },
}));

export default useStyles;
