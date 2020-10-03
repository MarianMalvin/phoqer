import React, { ReactElement } from 'react';
import { END } from 'redux-saga';

import { IStore } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';

const Search = (): ReactElement => {
  return <div>Hello frome search page</div>;
};

export const getStaticProps = wrapper.getStaticProps(
  async ({ store }: { store: IStore }): Promise<void> => {
    store.dispatch({ type: types.GET_CATEGORIES_START });
    store.dispatch(END);
    await store.sagaTask.toPromise();
  },
);

export default Search;
