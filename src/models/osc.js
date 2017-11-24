import { getUserInfo } from '../services/osc';

export default {
  namespace: 'osc',

  state: {
    status: undefined,
  },

  effects: {
    *getUserInfo({ payload }, { call, put }) {
      const response = yield call(getUserInfo, payload);
      yield put({
        type: 'userInfo',
        payload: response,
      });
    },
  },

  reducers: {
    userInfo(state, { payload }) {
      console.log(payload);
      return {
        ...state,
        user: payload,
      };
    },
  },
};
