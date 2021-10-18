import React, { ReactElement, useEffect } from 'react';

import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';

import { IState, NotificationsState } from '../../../interfaces';
import types from '../../../redux/types';
import NotificationsSkeleton from '../../common/loaders/skeletons/notifications';
import EmptyOffers from '../../common/offers/empty-offers';

import NotificationsContainer from './components/notifications-container';
import NotificationsItem from './components/notifications-item';

const useStyles = createUseStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

const Notifications = (): ReactElement => {
    const css = useStyles();
    const dispatch = useDispatch();
    const { loading, data: notificationsData } = useSelector<IState, NotificationsState>(state => state.notifications);

    useEffect(() => {
        dispatch({ type: types.GET_NOTIFICATIONS_START, payload: 1 });
    }, [dispatch]);

    return (
        <NotificationsContainer>
            {loading ? (
                <NotificationsSkeleton amount={4} />
            ) : notificationsData.data.length ? (
                <div className={css.root}>
                    {notificationsData.data.map(item => (
                        <NotificationsItem key={item.id} value={item} />
                    ))}
                </div>
            ) : (
                <EmptyOffers />
            )}
        </NotificationsContainer>
    );
};

export default Notifications;
