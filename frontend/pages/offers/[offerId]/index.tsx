import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';
import DayPicker from 'react-day-picker';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { findCategory, findSubCategory } from '../../../assets/helpers';
import routes from '../../../assets/routes';
import { Theme } from '../../../assets/theme';
import Breadcrumbs from '../../../components/Common/Breadcrumbs';
import Meta from '../../../components/Common/Meta';
import { modal } from '../../../components/Common/Modal';
import FullPageModal from '../../../components/Common/Modal/FullPageModal';
import Container from '../../../components/Layout/Container';
import Main from '../../../components/Layout/Main';
import AsideElement from '../../../components/Pages/Offers/AsideElement';
import OfferHead from '../../../components/Pages/Offers/OfferHead';
import Price from '../../../components/Pages/Offers/Price';
import Requirements from '../../../components/Pages/Offers/Requirements';
import OfferSlider from '../../../components/Pages/Offers/Slider';
import useMedia from '../../../hooks/media.hook';
import { ICategories, IOfferCard, IState, IStore } from '../../../interfaces';
import { wrapper } from '../../../redux/store';
import types from '../../../redux/types';

const useStyles = createUseStyles((theme: Theme) => ({
    // top content
    banner: {
        display: 'block',
        height: theme.rem(60),
        borderRadius: theme.radius,
        objectFit: 'contain',
        background: theme.palette.gray[1],
        cursor: 'zoom-in',

        '@media (max-width: 768px)': {
            height: theme.rem(30),
        },
    },
    modal: {
        display: 'block',
        width: '100vw',
        height: '100vh',
        objectFit: 'contain',
    },

    // main
    flex: {
        display: 'flex',
        marginTop: theme.rem(6),
        fontSize: theme.rem(1.6),

        '@media (max-width: 768px)': {
            flexDirection: 'column',
            marginTop: theme.rem(2),
            fontSize: theme.rem(1.6),
        },
    },
    main: {
        width: 'calc(100% - 40rem)',
        marginRight: theme.rem(10),

        '@media (max-width: 1300px)': {
            marginRight: theme.rem(4),
        },

        '@media (max-width: 768px)': {
            width: '100%',
            marginBottom: theme.rem(6),
            marginRight: 0,
        },
    },
    subtitle: {
        margin: theme.rem(6, 0, 3),
        fontSize: theme.rem(2),
        fontWeight: theme.text.weight[3],

        '@media (max-width: 768px)': {
            margin: theme.rem(3, 0, 1),
            fontSize: theme.rem(2.5),
        },
    },
    calendar: {
        width: '100%',
        fontSize: theme.rem(1.8),

        '@media (max-width: 1210px)': {
            fontSize: theme.rem(1.5),
        },

        '@media (max-width: 1100px)': {
            width: '100%',
            fontSize: theme.rem(1.8),
        },

        '& .DayPicker-Months': {
            display: 'flex',
            justifyContent: 'space-between',
        },

        '& .DayPicker-Month': {
            width: '49%',
            margin: theme.rem(0, 0, 0, -1),

            '@media (max-width: 1100px)': {
                width: '100%',
                margin: theme.rem(0, 0, 0, -1),
            },
        },

        '& .DayPicker-NavButton': {
            top: theme.rem(-0.5),
            right: theme.em(0.7),
            width: theme.rem(3.5),
            height: theme.rem(3.5),
            backgroundSize: '22%',
            backgroundPosition: 'center',

            '&.DayPicker-NavButton--prev': {
                marginRight: theme.rem(3.5),
            },

            '@media (max-width: 1100px)': {
                right: theme.em(1.5),
            },
        },
    },
}));

const SingleOfferPage = (): ReactElement => {
    const css = useStyles();
    const priceMedia = useMedia(768);
    const calendarMedia = useMedia(1100);

    const offer = useSelector<IState, IOfferCard>(state => state.offers.single);
    const categories = useSelector<IState, ICategories[]>(state => state.categories);

    const catName = offer?.category
        ? findCategory(categories, offer?.category)
        : offer?.sub_category
        ? findSubCategory(categories, offer?.sub_category)
        : null;

    const desc = offer?.description ? offer.description.replace(/\n/g, '<br>') : '';
    const other = offer?.extra_requirements ? offer.extra_requirements.replace(/\n/g, '<br>') : '';

    const handleModal = (): void => {
        modal.open(
            <FullPageModal>
                <img className={css.modal} draggable={false} src={offer.cover_image} alt="" />
            </FullPageModal>,
        );
    };

    return (
        <>
            <Meta title={offer?.title} description={offer?.description.slice(0, 150)} icon={offer?.cover_image} />
            <Main>
                <Container>
                    {offer?.images.length > 1 ? (
                        <OfferSlider images={offer?.images} />
                    ) : offer?.images.length || offer?.cover_image ? (
                        <img className={css.banner} src={offer?.cover_image} alt="" onClick={handleModal} aria-hidden />
                    ) : null}
                    <Breadcrumbs
                        end={offer?.title}
                        data={[
                            { label: 'На главную страницу', link: routes.root },
                            {
                                label: catName ? `Предложения в раздере ${catName}` : 'Поиск вещей / услуг',
                                link: catName
                                    ? routes.offers.single(
                                          offer?.category ? `?category=${offer?.category}` : `?sub=${offer?.sub_category}`,
                                      )
                                    : routes.offers.list,
                            },
                        ]}
                    />

                    <div className={css.flex}>
                        <div className={css.main}>
                            <OfferHead />

                            {!priceMedia && <Price />}
                            <h2 className={css.subtitle}>Описание</h2>
                            <p dangerouslySetInnerHTML={{ __html: desc }} />

                            <h2 className={css.subtitle}>Требования</h2>
                            <Requirements />

                            {other && (
                                <>
                                    <h2 className={css.subtitle}>Дополнительно</h2>
                                    <p dangerouslySetInnerHTML={{ __html: other }} />
                                </>
                            )}

                            <h2 className={css.subtitle}>Наличие</h2>
                            <DayPicker
                                className={css.calendar}
                                fromMonth={new Date()}
                                pagedNavigation
                                fixedWeeks
                                numberOfMonths={calendarMedia ? 2 : 1}
                            />
                        </div>

                        <AsideElement />
                    </div>
                </Container>
            </Main>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, ...ctx }: GetServerSidePropsContext & { store: IStore }): Promise<void> => {
        if (!ctx.query?.offerId) return null;

        store.dispatch({ type: types.GET_CATEGORIES_START });
        store.dispatch({ type: types.GET_SINGLE_OFFER_START, payload: ctx.query?.offerId });
        store.dispatch(END);
        await store.sagaTask.toPromise();
    },
);

export default SingleOfferPage;
