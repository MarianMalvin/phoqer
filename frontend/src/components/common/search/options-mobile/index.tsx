import React, { ReactElement } from 'react';

import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import useMedia from '../../../../hooks/media.hook';
import useTrans from '../../../../hooks/trans.hook';
import { ICategories, IDropValue, ISearch, IState } from '../../../../interfaces';
import { findCategory, findSubCategory, formatCatList } from '../../../../utils/helpers';
import { Theme } from '../../../../utils/theming/theme';
import DropDown from '../../drop-down';
import Region from '../../region';

const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',

        ...theme.media(1100).max({
            justifyContent: 'space-between',
            width: '100%',
        }),
    },
    region: {
        width: '49%',
        padding: 0,
        background: 'transparent',
        color: theme.palette.trueWhite,
        boxShadow: 'none',
        '& span': {
            color: theme.palette.trueWhite,
        },

        ...theme.hover({
            border: theme.border(0.2, 'transparent'),
        }),
        ...theme.focus({
            border: theme.border(0.2, 'transparent'),
        }),
    },
    drop: {
        width: '49%',
        borderRadius: theme.radius,
        '& p': {
            padding: 0,
            color: theme.palette.trueWhite + '!important',
            fontWeight: theme.text.weight[3],
        },
    },
}));

interface IProps {
    onChange: (value: IDropValue | null) => void;
}

const OptionsMobile = ({ onChange }: IProps): ReactElement => {
    const css = useStyles();
    const trans = useTrans();
    const tablet = useMedia(1100);

    const search = useSelector<IState, ISearch>(state => state.config.searchParams);
    const data = useSelector<IState, ICategories[]>(state => state.categories);
    const categories = formatCatList(data);

    const defaultValue = search.category
        ? findCategory(data, search.category)
        : search.sub_category
        ? findSubCategory(data, search.sub_category)
        : null;

    return (
        <div className={css.root}>
            <div className={css.drop}>
                <DropDown
                    data={categories}
                    defaultValue={defaultValue}
                    placeholder={trans('select_category')}
                    onChange={onChange}
                    height={tablet ? 6 : 5}
                    withSub
                    transparent
                />
            </div>
            <Region className={css.region} />
        </div>
    );
};

export default OptionsMobile;