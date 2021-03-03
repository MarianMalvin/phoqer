import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MouseEvent, ReactElement, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { CSSTransition } from 'react-transition-group';

import { Theme } from '../../../assets/theme';

const useStyles = createUseStyles((theme: Theme) => ({
    backdrop: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10000,
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        background: theme.palette.modal,
        color: theme.palette.black[0],
        transition: theme.transitions[0],
        cursor: 'pointer',

        '&.enter .inner': {
            transform: 'translateX(-100%)',
        },
        '&.enter-done .inner': {
            transform: 'translateX(0%)',
        },

        '&.exit .inner': {
            transform: 'translateX(-100%)',
        },
        '&.exit-done .inner': {
            transform: 'translateX(0%)',
        },

        '& .inner': {
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'translateX(0%)',
            height: '100%',
            width: '100%',
            maxWidth: theme.rem(40),
            padding: theme.rem(5, 2, 2),
            background: theme.palette.white,
            borderRight: theme.border(0.1, theme.palette.gray[1]),
            transition: theme.transitions[0],
            overflow: 'auto',
            cursor: 'auto',
        },
    },
    button: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 10,
        padding: theme.rem(1.2, 1.8),
        fontSize: theme.rem(1.6),
        color: theme.palette.black[0],

        '& svg': {
            height: theme.rem(1.2),
            width: theme.rem(1.2),
        },
    },
}));

interface IProps {
    open: boolean;
    onToggle: (value: boolean) => void;
    children: ReactElement | ReactElement[];
}
const Root = ({ children, open, onToggle }: IProps) => {
    const css = useStyles();

    const handleToggle = (event: MouseEvent<HTMLDivElement>): void => {
        if (event.target === event.currentTarget) onToggle(!open);
    };

    return (
        <CSSTransition timeout={300} unmountOnExit in={open}>
            <div className={css.backdrop} onClick={handleToggle} aria-hidden role="button">
                {children}
            </div>
        </CSSTransition>
    );
};

const Drawer = ({ children, open, onToggle }: IProps): ReactElement | null => {
    const css = useStyles();

    const handleToggle = (): void => {
        onToggle(!open);
    };

    useEffect(() => {
        const close = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') onToggle(false);
        };

        window.addEventListener('keydown', close);
        return () => {
            window.addEventListener('keydown', close);
        };
    }, []);

    return (
        <Root onToggle={onToggle} open={open}>
            <div className="inner">
                <button type="button" className={css.button} onClick={handleToggle}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                {children}
            </div>
        </Root>
    );
};

export default Drawer;