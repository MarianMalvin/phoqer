import { IState } from '../interfaces';

const initState: IState = {
  auth: {
    auth_token: null,
  },
  categories: null,
  offers: {
    popular: {
      data: null,
      loading: true,
    },
  },
  modal: {
    dom: null,
    size: 's',
    modal: false,
  },
};

export default initState;
