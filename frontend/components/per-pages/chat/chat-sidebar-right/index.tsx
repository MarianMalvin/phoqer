import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { IChatOfferInfo, IState } from '../../../../interfaces';
import { Theme } from '../../../../utils/theming/theme';
import Banner from '../../../common/advertising/banner';
import { width } from '../chat.config';
import ChatDrawerSkeleton from './chat-drawer-skeleton';
import ChatOfferInfo from './chat-offer-info';

const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        width: width.desktopLg.sidebar,
        height: '100%',
    },
    banner: {
        height: 'calc(100vh - 10rem)',
        padding: theme.rem(18, 4),
    },
}));

const ChatSidebarRight = (): ReactElement => {
    const css = useStyles();
    const offerInfo = useSelector<IState, IChatOfferInfo>(state => state.chat.info);

    return (
        <div className={css.root}>
            {!offerInfo ? <Banner className={css.banner} /> : offerInfo?.loading ? <ChatDrawerSkeleton /> : <ChatOfferInfo />}
        </div>
    );
};

export default ChatSidebarRight;