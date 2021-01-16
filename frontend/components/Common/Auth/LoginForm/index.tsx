import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';

import router from '../../../../assets/router';
import { Theme } from '../../../../assets/theme';
import { Login } from '../../../../interfaces';
import types from '../../../../redux/types';

const useStyles = createUseStyles((theme: Theme) => ({
    title: {
        fontSize: theme.rem(1.8),
        fontWeight: theme.text.weight[3],
        textAlign: 'center',
    },
    wrp: {
        position: 'relative',
        margin: theme.rem(2, 0),
    },
    input: {
        display: 'block',
        width: '100%',
        height: theme.rem(5),
        paddingLeft: theme.rem(4),
        paddingRight: theme.rem(5),
        background: theme.palette.gray[1],
        border: 'none',
        borderRadius: theme.radius,
        fontSize: theme.rem(1.4),
        lineHeight: 1,
        outline: 'none',
    },
    icon: {
        position: 'absolute',
        top: '52%',
        left: theme.rem(1.5),
        transform: 'translateY(-50%)',
        fontSize: theme.rem(1.2),
        color: theme.palette.gray[4],
    },
    eye: {
        position: 'absolute',
        top: '52%',
        right: 0,
        height: '100%',
        width: theme.rem(5),
        transform: 'translateY(-50%)',
        fontSize: theme.rem(1.2),
        color: theme.palette.gray[4],
    },
    link: {
        display: 'block',
        textAlign: 'center',
        fontSize: theme.rem(1.4),
        color: theme.palette.primary[0],
    },
    btn: {
        display: 'block',
        minWidth: theme.rem(20),
        margin: '3rem auto 2rem',
        padding: theme.rem(1.5, 2),
        fontWeight: theme.text.weight[4],
        textAlign: 'center',
        fontSize: theme.rem(1.4),
        borderRadius: theme.radius,
        background: theme.palette.primary[0],
        color: theme.palette.white,
    },
    text: {
        marginBottom: theme.rem(2),
        fontSize: theme.rem(1.4),
        fontWeight: theme.text.weight[2],
        textAlign: 'center',
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socials: {
        height: theme.rem(6),
        width: theme.rem(6),
        margin: theme.rem(1),
        padding: theme.rem(1),
        borderRadius: '50%',
    },
    facebook: {
        background: theme.palette.soft[4],
        fill: theme.palette.black,
    },
    google: {
        background: theme.palette.soft[0],
        fill: theme.palette.black,
    },
    svg: {
        height: theme.rem(2),
        width: theme.rem(1.5),
        fill: 'inherrit',
    },
}));

const LoginForm = (): ReactElement => {
    const css = useStyles();
    const dispatch = useDispatch();

    const [unhidden, setUnhidden] = useState(true);
    const [payload, setPayload] = useState<Login>({ password: '', email: '' });

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setPayload({ ...payload, [event.target.name]: event.target.value });
    };

    const handleClick = () => {
        setUnhidden(!unhidden);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch({ type: types.LOGIN_START, payload });
    };

    return (
        <form action="#" method="post" onSubmit={handleSubmit}>
            <h2 className={css.title}>Бобро пожаловать, засранец.</h2>

            <div className={css.wrp}>
                <div className={css.icon}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <input type="email" onChange={handleChange} name="email" className={css.input} />
            </div>

            <div className={css.wrp}>
                <div className={css.icon}>
                    <FontAwesomeIcon icon={faKey} />
                </div>
                <button className={css.eye} onClick={handleClick} type="button">
                    {unhidden ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </button>
                <input type={unhidden ? 'password' : 'text'} name="password" onChange={handleChange} className={css.input} />
            </div>

            <Link href={router.auth.forgot_pass}>
                <a className={css.link}>Забыли пароль?</a>
            </Link>

            <button className={css.btn} type="submit">
                ВОЙТИ
            </button>

            <p className={css.text}>
                или
                <br />
                залогинтесь с
            </p>

            <ul className={css.list}>
                <li>
                    <button className={`${css.socials} ${css.facebook}`} type="button" onClick={handleSubmit}>
                        <svg
                            className={css.svg}
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                        >
                            <path d="M288,176v-64c0-17.664,14.336-32,32-32h32V0h-64c-53.024,0-96,42.976-96,96v80h-64v80h64v256h96V256h64l32-80H288z" />
                        </svg>
                    </button>
                </li>
                <li>
                    <button className={`${css.socials} ${css.google}`} type="button" onClick={handleSubmit}>
                        <svg
                            className={css.svg}
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 510 510"
                            xmlSpace="preserve"
                        >
                            <path d="M286.875,229.5v63.75h150.45c-15.3,89.25-86.7,153-175.95,153c-104.55,0-191.25-86.7-191.25-191.25    s86.7-191.25,191.25-191.25c53.55,0,99.45,22.95,132.6,58.65l45.9-45.9c-45.9-45.9-107.1-76.5-178.5-76.5    c-140.25,0-255,114.75-255,255s114.75,255,255,255s242.25-114.75,242.25-255v-25.5H286.875z" />
                        </svg>
                    </button>
                </li>
            </ul>
        </form>
    );
};

export default LoginForm;
