import request from '../utils/request';

export async function getUserInfo(params) {
  return request(`http://api.laystall.top/ms/api/osc/user/${params}`);
}
