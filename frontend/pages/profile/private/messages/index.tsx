import { GetServerSidePropsContext } from 'next';
import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

import { serverRedirect } from '../../../../assets/helpers';
import { Theme } from '../../../../assets/theme';
import trans from '../../../../assets/trans';
import ProfileChatNav from '../../../../components/common/nav-tabs/profile/chat-nav';
import AuthRedirect from '../../../../components/context/auth/auth-redirect';
import Meta from '../../../../components/layout/meta';
import ChatWrp from '../../../../components/pages/profile/private/messages/chat-wrp';
import useMedia from '../../../../hooks/media.hook';
import { wrapper } from '../../../../redux/store';

const useStyles = createUseStyles((theme: Theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '100vh',
        background: theme.palette.white,
    },
    chat: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        background: theme.palette.gray[0],
        borderRadius: theme.radius,
    },
}));

const Messages = (): ReactElement => {
    const css = useStyles();
    const media = useMedia(768);

    return (
        <>
            <Meta title={'Мои сообщения'} h1={trans('user_profile_on_phoqer')} />

            <AuthRedirect />
            <main className={css.main}>
                <ProfileChatNav active="messages" />
                <ChatWrp showConversation={media} showSidebar={true}>
                    <div className={css.chat}>
                        <p>Select the chat in side panel</p>
                    </div>
                </ChatWrp>
            </main>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (ctx): Promise<void> => {
        if (serverRedirect((ctx as unknown) as GetServerSidePropsContext)) return;
    },
);

export default Messages;
