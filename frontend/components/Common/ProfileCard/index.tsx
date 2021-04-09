import { faSlidersH } from '@fortawesome/free-solid-svg-icons/faSlidersH';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { formatTimestamp, onlineStatus } from '../../../assets/helpers';
import routes from '../../../assets/routes';
import template from '../../../assets/template';
import { Theme } from '../../../assets/theme';
import useAuth from '../../../hooks/auth.hook';
import LoginForm from '../Auth/LoginForm';
import { modal } from '../Modal';
import SmallModalWrp from '../Modal/SmallModalWrp';
import UserAvatar from '../UserAvatar';

const useStyles = createUseStyles((theme: Theme) => ({
    wrp: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.rem(2),
        borderRadius: theme.radius,
        background: theme.palette.gray[1],

        ...theme.media(450).max({
            flexDirection: 'column',
        }),
    },
    column: {
        flexDirection: 'column',
        '& > a': {
            width: '100%',
            marginBottom: theme.rem(2),
        },
        '& > div': {
            width: '100%',
        },
    },
    svg: {
        padding: theme.rem(3),
    },
    content: {
        width: 'calc(100% - 10rem)',

        ...theme.media(450).max({
            width: '100%',
            marginTop: theme.rem(2),
        }),
    },
    name: {
        color: theme.palette.black[0],
        fontSize: theme.rem(2),
        fontWeight: theme.text.weight[3],

        ...theme.hover({
            textDecoration: 'underline',
        }),

        ...theme.media(768).max({
            fontSize: theme.rem(2.2),
        }),
    },
    info: {
        marginBottom: theme.rem(2),
        color: theme.palette.gray[4],
        fontSize: theme.rem(1.4),

        ...theme.media(768).max({
            fontSize: theme.rem(1.5),
        }),
    },
    btn: {
        ...template(theme).btn,
        width: 'max-content',
        color: theme.palette.black[0],
        background: theme.palette.white,

        '& span': {
            marginLeft: theme.rem(1),
        },

        ...theme.media(500).max({
            border: theme.border(0.1, theme.palette.gray[2]),
        }),
    },
}));

interface IProps {
    id?: string | number;
    firstName?: string;
    lastName?: string;
    registerDate?: string;
    avatar?: string | null;
    userLocation?: string | null;
    className?: string;
    lastActivity?: string;
    column?: boolean;
}

const ProfileCard = ({
    id = 0,
    firstName = '_',
    lastName = '_',
    registerDate,
    lastActivity,
    avatar = null,
    userLocation = null,
    className,
    column = false,
}: IProps): ReactElement => {
    const css = useStyles();
    const auth = useAuth();
    const history = useRouter();

    const handleOpenChat = (): void => {
        if (!auth?.access_token) {
            modal.open(
                <SmallModalWrp>
                    <LoginForm />
                </SmallModalWrp>,
            );
            return;
        }

        alert('hi!');
    };

    const isAuthor = auth?.id === id;

    return (
        <div className={clsx(css.wrp, className, column && css.column)}>
            <Link href={routes.profile.public(id)}>
                <a>
                    <UserAvatar online={isAuthor} firstName={firstName} lastName={lastName} avatar={avatar} />
                </a>
            </Link>
            <div className={css.content}>
                <Link href={routes.profile.public(id)}>
                    <a className={css.name}>{firstName + ' ' + lastName}</a>
                </Link>
                <div className={css.info}>
                    <p>{onlineStatus({ initDate: lastActivity, locale: history.locale, isAuthor })}</p>
                </div>

                <div className={css.info}>
                    <p>Дата регистрации: {formatTimestamp(registerDate, history.locale)}</p>
                    <p>Локация: {userLocation || 'Не указано'}</p>
                </div>

                {!isAuthor ? (
                    <button className={css.btn} type="button" onClick={handleOpenChat}>
                        Написать автору
                    </button>
                ) : (
                    <Link href={routes.profile.private.settings()}>
                        <a className={css.btn}>
                            <FontAwesomeIcon icon={faSlidersH} />
                            <span>Настройки профиля</span>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;
