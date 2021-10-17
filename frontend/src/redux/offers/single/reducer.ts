import { HYDRATE } from 'next-redux-wrapper';

import { IOfferCard, IState } from '../../../interfaces';
import offersInit from '../init-state';
import types from '../types';

import IAction from './interfaces';

const single = (state: IOfferCard | null = offersInit.single, { type, payload }: IAction): IOfferCard | null => {
    switch (type) {
        case HYDRATE:
            return (payload as IState).offers.single;

        case types.GET_SINGLE_OFFER_SUCCESS:
            return payload as IOfferCard;

        case types.GET_SINGLE_OFFER_ERROR:
            return null;

        case types.CHANGE_OFFER_COVER_IMAGE_LOCAL:
            return {
                ...state,
                cover_image: payload as string,
                images: [payload, ...(state?.images?.filter(img => img !== payload) || [])],
            } as IOfferCard;

        case types.DELETE_SINGLE_OFFER_IMG:
            return { ...state, images: state?.images?.filter(url => url !== (payload as string)) } as IOfferCard;
        case types.ADD_SINGLE_OFFER_IMG:
            return { ...state, images: [...(state?.images || []), ...(payload as string[])] } as IOfferCard;

        case types.PATCH_FAVORITE_OFFERS_SUCCESS:
            return state?.id === payload ? { ...state, is_favorite: !state.is_favorite } : state;

        default:
            return state;
    }
};

export default single;
