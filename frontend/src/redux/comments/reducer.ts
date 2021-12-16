import { IComment, IStateComments } from '../../interfaces';

import commentsInit from './init-state';
import { IAction } from './interfaces';
import types from './types';

const comments = (state: IStateComments = commentsInit, { type, payload }: IAction): IStateComments => {
    switch (type) {
        case types.GET_COMMENTS_SUCCESS:
            return { loading: false, data: payload as IComment[] };

        case types.CREATE_COMMENT_START:
            return { ...state, loading: true };

        default:
            return state;
    }
};

export default comments;
