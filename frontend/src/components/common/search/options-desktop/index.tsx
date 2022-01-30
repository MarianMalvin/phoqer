import React, { ReactElement } from 'react';

import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import useTrans from '../../../../hooks/trans.hook';
import { ICategories, IDropValue, ISearch, IState } from '../../../../interfaces';
import { findCategory, findSubCategory, formatCatList } from '../../../../utils/helpers';
import { Theme } from '../../../../utils/theming/theme';
import DropDown from '../../drop-down';

const useStyles = createUseStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        width: theme.rem(35),
    },
    categories: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        '& > div > button': {
            color: theme.palette.trueBlack,
        },
    },
    line: {
        display: 'block',
        height: theme.rem(3),
        width: theme.rem(0.1),
        marginRight: theme.rem(0.1),
        background: theme.palette.gray[2],
    },
}));

interface IProps {
    onChange: (value: IDropValue | null) => void;
}

const OptionsDesktop = ({ onChange }: IProps): ReactElement => {
    const css = useStyles();
    const trans = useTrans();

    const search = useSelector<IState, ISearch>(state => state.config.searchParams);
    const data = useSelector<IState, ICategories[]>(state => state.categories);
    const categories = formatCatList(data);

    const defaultValue = search.category
        ? findCategory(data, search.category)
        : search.sub_category
        ? findSubCategory(data, search.sub_category)
        : null;

    return (
        <div className={css.container}>
            <span className={css.line} />
            <div className={css.categories}>
                <DropDown
                    defaultValue={defaultValue}
                    data={categories}
                    placeholder={trans('select_category')}
                    onChange={onChange}
                    height={4.5}
                    withSub
                    transparent
                    toLeft
                />
            </div>
        </div>
    );
};

export default OptionsDesktop;
