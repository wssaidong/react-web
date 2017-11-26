import { getRandomInfo } from '../services/gain';

export default {
  namespace: 'gain',

  state: {
    status: undefined,
  },

  effects: {
    *getRandomInfo({ payload }, { call, put }) {
      const response = yield call(getRandomInfo, payload);
      yield put({
        type: 'randomInfo',
        payload: response,
      });
    },
  },

  reducers: {
    randomInfo(state, { payload }) {
      console.log(payload);
      return {
        ...state,
        info: payload,
      };
    },
  },
};
