import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { modal } from '../index';

const useStyles = createUseStyles({
    inner: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
        background: '#323232',
        cursor: 'zoom-out',
    },
});

interface IProps {
    children: JSX.Element[] | JSX.Element;
}

const FullPageModal = ({ children }: IProps): ReactElement => {
    const css = useStyles();
    return (
        <div className={css.inner} onClick={modal.close} aria-hidden="true">
            {children}
        </div>
    );
};

export default FullPageModal;
