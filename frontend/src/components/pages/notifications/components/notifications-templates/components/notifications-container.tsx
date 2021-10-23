import React, { ReactElement } from 'react';

import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/faTrashAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';

import { INotification } from '../../../../../../interfaces';
import { formatTimestamp } from '../../../../../../utils/helpers';
import routes from '../../../../../../utils/routes';
import UserAvatar from '../../../../../common/user-avatar';
import notificationsStyles from '../styles';

const useStyles = createUseStyles(notificationsStyles);

interface IProps {
    value: INotification;
    children: ReactElement;
    footer?: ReactElement;
}
const NotificationsContainer = ({ children, value, footer }: IProps): ReactElement => {
    const css = useStyles();
    return (
        <div className={clsx(css.root, value.viewed && css.isNew)}>
            <div className={css.header}>
                <Link href={routes.profile.public(value.recipient_id)}>
                    <a className={css.user}>
                        <UserAvatar
                            width={4}
                            height={4}
                            firstName={value.recipient_first_name}
                            lastName={value.recipient_last_name}
                        />
                        <div className={css.name}>
                            <p>
                                {value.recipient_first_name} {value.recipient_last_name}
                            </p>
                            <p className={css.date}>{formatTimestamp(value.pub_date)}</p>
                        </div>
                    </a>
                </Link>
                <button type="button">
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
            {children}
            {footer && <div className={css.footer}>{footer}</div>}
        </div>
    );
};

export default NotificationsContainer;