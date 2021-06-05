import { IChats, IPagination } from '../../../interfaces';
import types from '../../types';

type Type = typeof types.GET_CHATS_START | typeof types.GET_CHATS_ERROR | typeof types.GET_CHATS_SUCCESS;

export default interface IAction {
    type: Type;
    payload: IPagination<IChats>;
}