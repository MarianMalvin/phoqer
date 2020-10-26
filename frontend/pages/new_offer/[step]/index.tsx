import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { END } from 'redux-saga';

import AppWrp from '../../../components/common/AppWrp';
import AuthWrap from '../../../components/common/AuthWrap';
import Container from '../../../components/common/Container';
import Main from '../../../components/common/Main';
import StepOne from '../../../components/NewOffer/StepOne';
import Stepper from '../../../components/NewOffer/Stepper';
import StepThree from '../../../components/NewOffer/StepThree';
import StepTwo from '../../../components/NewOffer/StepTwo';
import Success from '../../../components/NewOffer/Success';
import { Theme } from '../../../config/theme';
import { IStore } from '../../../interfaces';
import { wrapper } from '../../../redux/store';
import types from '../../../redux/types';

const useStyles = createUseStyles((theme: Theme) => ({
  title: {
    maxWidth: theme.rem(80),
    margin: '0 auto 5rem',
    textAlign: 'center',
    fontSize: theme.rem(3),
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    background: theme.palette.grad[2],
  },
  red: {
    color: theme.palette.red[0],
  },
  text: {
    maxWidth: theme.rem(80),
    margin: '3rem auto 5rem',
    color: theme.palette.gray[3],
    fontSize: theme.rem(1.3),
  },
}));

const STEPS = {
  1: <StepOne />,
  2: <StepTwo />,
  3: <StepThree />,
  4: <Success />,
};

const STEPS_TITLE = ['О товаре', 'Описание', 'Фото'];

const NewOffer = (): ReactElement => {
  const { query } = useRouter();

  const css = useStyles();
  const [index, setIndex] = useState<number>(1);
  useEffect(() => {
    if (query.step) {
      setIndex(typeof query.step === 'string' ? +query.step : +query.step[0]);
    }
  }, [query.step]);

  return (
    <AuthWrap>
      <AppWrp>
        <Head>
          <title>New product | Fucking project</title>
        </Head>
        <Main>
          <Container>
            <h1 className={css.title}>#Делитесь с другими и зарабатывайте</h1>

            {index < 4 && <Stepper title={STEPS_TITLE} current={+index} />}

            {query.step !== undefined && (STEPS[index] || STEPS[1])}

            {index < 3 && (
              <p className={css.text}>
                <span className={css.red}>*</span> Обязательное поле
              </p>
            )}
          </Container>
        </Main>
      </AppWrp>
    </AuthWrap>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  async ({ store }: { store: IStore }): Promise<void> => {
    store.dispatch({ type: types.GET_CATEGORIES_START });
    store.dispatch(END);
    await store.sagaTask.toPromise();
  },
);

interface Value {
  paths: Array<string | { params: { [key: string]: string } }>;
  fallback: boolean;
}

export const getStaticPaths = async (): Promise<Value> => ({
  paths: ['/new_offer/:step'],
  fallback: true,
});

export default NewOffer;
