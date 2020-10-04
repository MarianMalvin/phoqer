import Link from 'next/link';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { Theme } from '../../config/theme';
import { ICategories, IState } from '../../interfaces';
import SectionTitle from '../common/SectionTitle';

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    margin: theme.rem(10, 0, 6),
  },
  wrp: {
    display: 'grid',
    gridTemplateColumns: theme.fr(7),
    gridGap: theme.rem(3),
  },
  cat: {
    marginBottom: theme.rem(2),
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  img: {
    height: theme.rem(14),
    borderRadius: theme.radius,
    objectFit: 'cover',
  },
  text: {
    marginTop: theme.rem(1.5),
    fontSize: theme.rem(1.2),
  },
}));

const Categories = (): ReactElement => {
  const css = useStyles();
  const categories = useSelector<IState, ICategories[]>(
    state => state.categories,
  );
  return (
    <div className={css.root}>
      <SectionTitle>Арендуйте здесь и сейчас</SectionTitle>
      <div className={css.wrp}>
        {categories?.map(({ name, image }) => (
          <Link key={name} href="/search?category=">
            <div className={css.cat}>
              <img className={css.img} src={image} alt={name} />
              <p className={css.text}>{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;