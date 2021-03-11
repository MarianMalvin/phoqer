import { Params } from 'next/dist/next-server/server/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import React, { FormEvent, ReactElement, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../../../assets/routes';
import { Theme } from '../../../assets/theme';
import { IDropList, IState } from '../../../interfaces';
import { IOffers } from '../../../redux/config/offers/interfaces';
import types from '../../../redux/types';
import Checkboxes from '../../Common/Checkboxes';
import Period from './Period';
import PriceFilter from './Price';
import Sort from './Sort';
import Status from './Status';

const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        margin: theme.rem(4, 0),
    },
    form: {
        margin: theme.rem(2, 0, 4),
    },
    formInner: {
        display: 'grid',
        gridTemplateColumns: theme.fr(4),
        gridGap: theme.rem(3, 2),

        '@media (max-width: 1380px)': {
            gridTemplateColumns: theme.fr(3),
        },

        '@media (max-width: 1100px)': {
            gridTemplateColumns: theme.fr(2),
            gridGap: theme.rem(3, 2),
        },

        '@media (max-width: 768px)': {
            gridTemplateColumns: theme.fr(1),
            gridGap: theme.rem(2),
        },
    },
    list: {
        display: 'grid',
        gridTemplateColumns: theme.fr(2),
        gridGap: theme.rem(1.5, 6),
        marginTop: theme.rem(3),

        '@media (max-width: 550px)': {
            gridTemplateColumns: theme.fr(1),
        },
    },
    link: {
        fontSize: theme.rem(1.4),
        color: theme.palette.black[0],

        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.primary[0],
        },

        '@media (max-width: 768px)': {
            fontSize: theme.rem(1.6),
        },
    },
    wrp: {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: theme.rem(2),
    },
    title: {
        fontSize: theme.rem(2),
        fontWeight: theme.text.weight[4],
        color: theme.palette.black[0],
    },
    close: {
        marginLeft: theme.rem(2.5),
        fontSize: theme.rem(1.6),
        color: theme.palette.primary[0],
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    btn: {
        height: theme.rem(6),
        marginTop: theme.rem(3),
        padding: theme.rem(1.5, 3),
        fontSize: theme.rem(1.4),
        borderRadius: theme.radius,
        background: theme.palette.primary[0],
        color: theme.palette.trueWhite,

        '@media (max-width: 500px)': {
            fontSize: theme.rem(1.8),
        },
    },
}));

const POPULAR: string[] = [
    'Задний винт Владика',
    'Заднее сальто Владика 3',
    'Кто такой Влад Василенко?',
    'Задний винт Владика скачать без смс и регистрации',
    'Владислав! Бейби донт хьорт ми, донт хьорт ми, но мор!',
    'Заднее сальто Владика 2',
];

interface ICheckbox {
    [key: string]: boolean;
}

const Filters = (): ReactElement => {
    const css = useStyles();
    const history = useRouter();
    const dispatch = useDispatch();

    const config = useSelector<IState, IOffers>(state => state.config.offers);

    // filters value
    const [period, setPeriod] = useState<IDropList | null>(null);
    const [status, setStatus] = useState<IDropList | null>(null);
    const [ordering, setOrdering] = useState<IDropList | null>(null);
    const [price, setPrice] = useState<[number, number]>([0, 200_000]);
    const [checkboxes, setCheckboxes] = useState<ICheckbox>({
        top: false,
        deposit: false,
        deliverable: false,
    });

    const handleCloseFilters = () => {
        dispatch({ type: types.OFFERS_HIDE_FILTERS });
    };
    const handleCloseSearch = () => {
        dispatch({ type: types.OFFERS_HIDE_POPULAR_SEARCH });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        // format query string object
        const query: Params = {
            // add main search query
            ...history.query,
            // price
            min_price: price[0],
            max_price: price[1],
            // status
            status: status?.slug ? status.slug.toUpperCase() : null,
            // ordering
            ordering: ordering?.slug ? ordering.slug : null,
            // period
            period: period?.slug ? period.slug : null,
            // checkboxes
            top: checkboxes.top || null,
            no_deposit: checkboxes.deposit || null,
            is_deliverable: checkboxes.deliverable || null,
        };

        // SUBMIT
        history.push(
            {
                pathname: routes.offers.list,
                query: queryString.stringify(query, {
                    skipNull: true,
                }),
            },
            undefined,
            { shallow: true },
        );
        window.scrollTo({ top: document.getElementById('products')?.offsetTop || 0, behavior: 'smooth' });
        dispatch({ type: types.SEARCH_OFFERS_START, payload: query });
    };

    return (
        <>
            <div className={css.root}>
                <div className={css.wrp}>
                    <h2 className={css.title}>Фильтры</h2>
                    <button type="button" className={css.close} onClick={handleCloseFilters}>
                        {config.filters ? 'Скрыть' : 'Показать'}
                    </button>
                </div>
                <hr />

                {config.filters && (
                    <form action="#" method="post" className={css.form} onSubmit={handleSubmit}>
                        <div className={css.formInner}>
                            <PriceFilter data={price} initValue={[0, 200_000]} onChange={setPrice} />
                            <Period value={period} onChange={setPeriod} />
                            <Sort value={ordering} onChange={setOrdering} />
                            <Status value={status} onChange={setStatus} />
                        </div>

                        <Checkboxes
                            values={checkboxes}
                            labels={['Только ТОП объявления', 'Без залога', 'C доставкой']}
                            onChange={setCheckboxes}
                        />

                        <button className={css.btn} type="submit">
                            Применить фильтры
                        </button>
                    </form>
                )}
            </div>

            <div className={css.root}>
                <div className={css.wrp}>
                    <h2 className={css.title}>Популярные запросы</h2>
                    <button type="button" className={css.close} onClick={handleCloseSearch}>
                        {config.popularSearch ? 'Скрыть' : 'Показать'}
                    </button>
                </div>
                <hr />
                {config.popularSearch ? (
                    <ul className={css.list}>
                        {POPULAR.map(query => (
                            <li key={query}>
                                <Link href={routes.offers.single(`?q=${query}`)}>
                                    <a className={css.link}>{query}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </>
    );
};

export default Filters;
