import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../config/theme';
import products from '../../../utils/products';
import Container from '../../common/Container';
import SectionTitle from '../../common/SectionTitle';
import Product from '../Product';

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.rem(15),
    padding: theme.rem(5, 0, 10),
    background: theme.palette.gray[0],
    fontSize: theme.rem(1.5),
    fontWeight: theme.text.weight[3],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: theme.fr(4),
    gridGap: theme.rem(10, 6),
    '@media (max-width: 1500px)': {
      gridTemplateColumns: theme.fr(3),
    },
    '@media (max-width: 1140px)': {
      gridTemplateColumns: theme.fr(2),
    },
  },
}));

const TopProducts = (): ReactElement => {
  const css = useStyles();
  return (
    <div className={css.root}>
      <Container>
        <SectionTitle link="Смотреть все" href="/products?type=popular">
          TOП Объявления
        </SectionTitle>

        <div className={css.grid}>
          {products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TopProducts;
