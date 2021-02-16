import Link from 'next/link';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import routes from '../../../../assets/routes';
import { Theme } from '../../../../assets/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    empty: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    emoji: {
        width: theme.rem(10),
        marginBottom: theme.rem(4),
    },
    emptyText: {
        marginBottom: theme.rem(2),
        fontSize: theme.rem(1.6),
        color: theme.palette.gray[3],
        textAlign: 'center',
    },
    link: {
        fontSize: theme.rem(1.6),
        color: theme.palette.primary[0],
        fontWeight: theme.text.weight[3],

        '&:hover': {
            fontWeight: theme.text.weight[3],
            textDecoration: 'underline',
        },
    },
}));

interface IProps {
    text?: string;
}

const EmptyOffers = ({ text }: IProps): ReactElement => {
    const css = useStyles();

    return (
        <div className={css.empty}>
            <img className={css.emoji} src="/emoji/thinking.png" alt="" />
            <p className={css.emptyText}>{text || 'Кажется здесь пусто. Создайте свое объявление, не тяните резину'}</p>

            <Link href={routes.new_offer(1)}>
                <a className={css.link}>Создать обьявление</a>
            </Link>
        </div>
    );
};

export default EmptyOffers;