import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { Theme } from '../../../config/theme';
import { ICategories, IState } from '../../../interfaces';
import * as helpers from '../../../utils/helpers';
import DropDown from '../../common/DropDown';
import DropDownMobile from '../../common/DropDownMobile';

const useStyles = createUseStyles((theme: Theme) => ({
  title: {
    marginBottom: theme.rem(1),
    fontSize: theme.rem(1.6),
    fontWeight: theme.text.weight[2],
  },
}));

const Categories = (): ReactElement => {
  const css = useStyles();

  const { query } = useRouter();
  const { category, sub_category } = query;

  const [categoryName, setCategoryName] = useState<string | null>(null);
  const [subCategoryName, setSubCategoryName] = useState<string | null>(null);

  const data = useSelector<IState, ICategories[]>(state => state.categories);
  const categories = helpers.formateCatList(data);

  useEffect(() => {
    if (category) {
      setCategoryName(
        helpers.findCategory(
          data,
          typeof category === 'string' ? category : category[0],
        ),
      );
    }
  }, [category]);

  useEffect(() => {
    if (sub_category) {
      setSubCategoryName(
        helpers.findSubCategory(
          data,
          typeof sub_category === 'string' ? sub_category : sub_category[0],
        ),
      );
    }
  }, [sub_category]);

  return categories?.length ? (
    <div>
      <h4 className={css.title}>Категория</h4>
      <BrowserView>
        <DropDown
          value={categories}
          onSubmit={console.log}
          defaultValue={categoryName || subCategoryName}
          toRight
        />
      </BrowserView>

      <MobileView>
        <DropDownMobile
          value={categories}
          onSubmit={console.log}
          defaultValue={categoryName || subCategoryName}
          toRight
        />
      </MobileView>
    </div>
  ) : null;
};

export default Categories;