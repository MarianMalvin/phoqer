import React, { ReactElement } from 'react';

import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

import useTrans from '../../../../../hooks/trans.hook';
import { IOfferCard } from '../../../../../interfaces';
import { declOfNum, moneyFormat } from '../../../../../utils/helpers';
import { Theme } from '../../../../../utils/theming/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    req: {
        '& li': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: theme.rem(2, 0),
        },
    },
    dots: {
        flexGrow: 2,
        margin: theme.rem(0, 2),
        borderBottom: '0.1rem dashed #aaa',
    },
    emoji: {
        '& li': {
            display: 'flex',
            alignItems: 'center',
            margin: theme.rem(2, 0),
        },
        '& img': {
            height: theme.rem(3),
            width: theme.rem(3),
            marginRight: theme.rem(2),
        },
    },
    gray: {
        filter: 'grayscale(100%)',
        color: theme.palette.gray[3],
        textDecoration: 'line-through',
    },
    value: {
        whiteSpace: 'nowrap',
    },
}));

interface IProps {
    offer: IOfferCard;
}

const Requirements = ({ offer }: IProps): ReactElement => {
    const css = useStyles();
    const trans = useTrans();

    return (
        <>
            <ul className={css.req}>
                <li>
                    <span>{trans('deposit')}:</span>
                    <span className={css.dots} />
                    <span className={css.value}>
                        {offer?.deposit_val ? `${moneyFormat(offer?.deposit_val)} ${trans('uah')}` : trans('not_indicated')}
                    </span>
                </li>
                <li>
                    <span>{trans('minimum_rental_period')}:</span>
                    <span className={css.dots} />
                    <span className={css.value}>
                        {offer?.min_rent_period
                            ? `${moneyFormat(offer?.min_rent_period)} ${trans(
                                  declOfNum(offer?.min_rent_period, ['day', 'day_2', 'day_3']),
                              )}`
                            : trans('not_indicated')}
                    </span>
                </li>
                <li>
                    <span>{trans('maximum_rental_period')}:</span>
                    <span className={css.dots} />
                    <span className={css.value}>
                        {offer?.max_rent_period
                            ? `${moneyFormat(offer?.max_rent_period)} ${trans(
                                  declOfNum(offer?.max_rent_period, ['day', 'day_2', 'day_3']),
                              )}`
                            : trans('not_indicated')}
                    </span>
                </li>
            </ul>
            <ul className={css.emoji}>
                <li className={clsx(!offer?.is_deliverable && css.gray)}>
                    <img src="/icons/delivery.png" alt="" />
                    <span>{trans(offer?.is_deliverable ? 'owner_delivers_good' : 'owner_not_deliver_goods')}</span>
                </li>
                <li className={clsx(!offer?.doc_needed && css.gray)}>
                    <img src="/icons/documents.png" alt="" />
                    <span>{trans(offer?.doc_needed ? 'client_provide_documents' : 'client_dont_provide_documents')}</span>
                </li>
            </ul>
        </>
    );
};

export default Requirements;
