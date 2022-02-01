import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import types from '../redux/types';
import config from '../utils/config';

import useAuth from './auth.hook';

let socket: WebSocket | null;
let prevId: string | number;

const useChat = (id: string | number): WebSocket | null => {
    const { token } = useAuth();
    if (!token.access_token || !process.browser) return null;

    if (socket && prevId === id) return socket;
    prevId = id;

    if (socket) {
        socket.close(1000, 'Close chat');
        socket = null;
    }

    const connect = (): WebSocket => {
        return new WebSocket(`${config.socketUrl}/chat/${id}?token=${token.access_token}`);
    };

    socket = connect();
    socket.onclose = (ev): void => console.log(ev);
    socket.onerror = (): void => {
        socket?.close(1000, 'Close chat');
        socket = connect();
    };

    connect();

    return socket;
};

export const useChatListUpdate = (): void => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: types.GET_CHATS_START });
        dispatch({ type: types.RESET_CHAT_SIDEBAR });

        const id = setInterval(() => {
            dispatch({ type: types.REFRESH_CHATS_START });
        }, 10000);
        return () => clearInterval(id);
    }, [dispatch]);
};

export default useChat;
