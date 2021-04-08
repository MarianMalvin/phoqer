import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { Theme } from '../../../../assets/theme';
import ButtonClose from '../../ButtonClose';
import { modal } from '../index';

const useStyles = createUseStyles((theme: Theme) => ({
    inner: {
        position: 'relative',
        width: theme.rem(40),
        height: 'max-content',
        margin: theme.rem(8, 0),
        padding: theme.rem(2),
        paddingTop: theme.rem(5),
        borderRadius: theme.radius,
        background: theme.palette.white,
        color: theme.palette.black[0],
        border: theme.border(0.1, theme.palette.gray[1]),

        ...theme.media(500).max({
            width: '90%',
        }),
    },
    button: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
}));

interface IProps {
    children: JSX.Element[] | JSX.Element;
}

const SmallModalWrp = ({ children }: IProps): ReactElement => {
    const css = useStyles();
    return (
        <div className={css.inner}>
            <ButtonClose className={css.button} onClick={modal.close} />
            {children}
        </div>
    );
};

export default SmallModalWrp;
