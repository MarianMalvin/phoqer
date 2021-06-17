import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

import { Theme } from '../../../../../../../assets/theme';
import { IChatsList, IMessagesList, IState } from '../../../../../../../interfaces';
import ChatsLoaders from '../../../../../../common/loaders/skeletons/chats';
import ChatLoading from '../../chat-loading';
import ChatSidebar from '../../chat-sidebar';

const useStyles = createUseStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 'calc(100vh - 6.5rem)',
        flexGrow: 2,
        padding: theme.rem(0, 2),
        fontSize: theme.rem(1.6),
        color: theme.palette.black[0],

        ...theme.media(1060).max({
            height: 'unset',
            padding: theme.rem(0, 0, 1),
        }),
    },
    sidebar: theme.media(1060).max({
        height: 'unset',
    }),
    aside: {
        minWidth: theme.rem(40),
        maxWidth: theme.rem(40),
        height: '99%',
        paddingRight: theme.rem(0.5),
        marginRight: theme.rem(0.5),
        overflow: 'auto',

        '&::before': {
            content: '""',
            position: 'fixed',
            bottom: 0,
            left: 0,
            zIndex: 5,
            height: theme.rem(5),
            width: '100%',
            background: `linear-gradient(180deg, rgba(255,255,255,0) 0%, ${theme.palette.white} 55%)`,
        },

        ...theme.media(1060).max({
            minWidth: 'unset',
            maxWidth: 'unset',
            height: 'unset',
            width: '100%',
            padding: theme.rem(0, 1.5),
            overflow: 'unset',
        }),
    },
    inner: {
        height: 'auto',
        padding: theme.rem(0.1),
        ...theme.media(1060).max({
            height: 'unset',
        }),
    },
}));

// HELPER HIDE/SHOW CHAT SIDEBAR
interface MessagesWrpShowSidebarProps {
    children: ReactElement | null;
    show: boolean;
}
const MessagesWrpShowSidebar = ({ show, children }: MessagesWrpShowSidebarProps): ReactElement | null => (show ? children : null);

// HELPER HIDE/SHOW CHAT CONVERSATION
interface MessagesWrpShowLoaderProps {
    children: ReactElement | null;
    loading: boolean;
}
const MessagesWrpShowLoader = ({ loading, children }: MessagesWrpShowLoaderProps): ReactElement | null =>
    loading ? <ChatLoading /> : children;

interface IProps {
    children: ReactElement | null;
    showSidebar?: boolean;
}

// MAIN COMPONENT
const MessagesWrp = ({ children, showSidebar = false }: IProps): ReactElement => {
    const css = useStyles();
    const chats = useSelector<IState, IChatsList>(state => state.chat.chats);
    const messages = useSelector<IState, IMessagesList>(state => state.chat.messages);

    return (
        <>
            <div className={clsx(css.root, showSidebar && css.sidebar)}>
                <MessagesWrpShowSidebar show={showSidebar}>
                    <aside className={css.aside}>
                        <div className={css.inner}>
                            {chats.loading ? <ChatsLoaders amount={5} /> : <ChatSidebar chats={chats.data.data} />}
                        </div>
                    </aside>
                </MessagesWrpShowSidebar>

                <MessagesWrpShowLoader loading={messages.loading}>{children}</MessagesWrpShowLoader>
            </div>
        </>
    );
};

export default MessagesWrp;