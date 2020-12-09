import Head from 'next/head';
import React, { ReactElement } from 'react';
import { END } from 'redux-saga';

import Search from '../components/Base/Search';
import About from '../components/Layout/About';
import AppWrp from '../components/Layout/AppWrp';
import Banner from '../components/Layout/Banner';
import Container from '../components/Layout/Container';
import Main from '../components/Layout/Main';
import Categories from '../components/Pages/Home/Categories';
import TopPopular from '../components/Pages/Offers/TopPopular';
import { IStore } from '../interfaces';
import { wrapper } from '../redux/store';
import types from '../redux/types';

const Index = (): ReactElement => (
    <AppWrp>
        <Head>
            <title>Fucking project</title>
        </Head>
        <Main>
            <Container>
                <Search />
                <Categories />
                <Banner />
                <TopPopular />
            </Container>

            <About />
        </Main>
    </AppWrp>
);

export const getStaticProps = wrapper.getStaticProps(
    async ({ store }: { store: IStore }): Promise<void> => {
        store.dispatch({ type: types.GET_CATEGORIES_START });
        store.dispatch({ type: types.GET_POPULAR_OFFERS_START });
        store.dispatch(END);
        await store.sagaTask.toPromise();
    },
);

export default Index;
