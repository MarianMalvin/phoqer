import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import useTheme from '../../../../hooks/theme.hook';
import useTrans from '../../../../hooks/trans.hook';
import { Themes } from '../../../../interfaces';
import palette from '../../../../theming/palette';
import template from '../../../../theming/template';
import { Theme } from '../../../../theming/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    box: {
        margin: theme.rem(1, 0),
        fontSize: theme.rem(1.4),
        textTransform: 'capitalize',
    },
    title: {
        margin: theme.rem(2, 0, 0),
        fontSize: theme.rem(1.4),
        fontWeight: theme.text.weight[3],
    },
    subtitle: {
        margin: theme.rem(1, 0, 0.5),
        fontSize: theme.rem(1.4),
        fontWeight: theme.text.weight[2],
    },
    grid: {
        display: 'flex',
    },
    item: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: theme.rem(5),
        height: theme.rem(5),
        marginRight: theme.rem(1),
        padding: theme.rem(0.4, 0.3),
        background: theme.palette.trueWhite,
        borderRadius: theme.radius,
        cursor: 'pointer',
        ...template(theme).outline,
        border: theme.border(0.2, theme.palette.gray[1]),

        '& > span': {
            display: 'block',
            width: '46%',
            height: theme.rem(1),
            borderRadius: theme.rem(0.25),
        },

        '& > span:nth-last-of-type(1)': {
            width: '100%',
            height: theme.rem(2),
        },
    },
    black: {
        background: theme.palette.trueBlack,
    },
    active: {
        border: theme.border(0.2, theme.palette.primary[0]),
    },
}));

interface IProps {
    element: Themes;
}

const allThemes: Themes[] = [
    'green',
    'red',
    'blue',
    'aqua',
    'violet',
    'black-aqua',
    'black-blue',
    'black-violet',
    'black-orange',
    'black-green',
];
type Colors = { [key: string]: { primary: string; secondary: string } };

const colors: Colors = allThemes.reduce<Colors>((acc, item) => {
    acc[item] = { primary: palette[item].primary[0], secondary: item.includes('black') ? '#454545' : '#e0e0e8' };
    return acc;
}, {});

const ThemesItem = ({ element }: IProps): ReactElement => {
    const css = useStyles();
    const [theme, setTheme] = useTheme();

    const handleClick = (): void => {
        setTheme(element);
    };

    return (
        <li
            className={clsx(css.item, theme === element && css.active, element.includes('black') && css.black)}
            key={element}
            onClick={handleClick}
            aria-hidden="true"
        >
            <span style={{ background: colors[element].primary || colors.green.primary }} />
            <span style={{ background: colors[element].secondary || colors.green.secondary }} />
        </li>
    );
};

const white: Themes[] = ['green', 'red', 'blue', 'aqua', 'violet'];
const black: Themes[] = ['black-green', 'black-blue', 'black-violet', 'black-aqua', 'black-orange'];

const ThemesList = (): ReactElement => {
    const css = useStyles();
    const trans = useTrans();

    return (
        <>
            <h3 className={css.title}>{trans('toggle_color_theme')}</h3>
            <div className={css.box}>
                <h4 className={css.subtitle}>{trans('white_theme')}</h4>
                <ul className={css.grid}>
                    {white.map(element => (
                        <ThemesItem element={element} key={element} />
                    ))}
                </ul>
            </div>
            <div className={css.box}>
                <h4 className={css.subtitle}>{trans('dark_theme')}</h4>
                <ul className={css.grid}>
                    {black.map(element => (
                        <ThemesItem element={element} key={element} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ThemesList;
