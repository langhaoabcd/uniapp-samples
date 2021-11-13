import http from '../http';

const path = 'api/user';

/* 查询商品列表
 * @param {Object} params - 查询参数  
 */
// export const getGoodsList = (params) => {
// 	return http.get('/api/user/list', {
// 		params
// 	})
// }

export const login = (data) => {
	return http.post(`${path}/login`, data);
}
export const sysconfigs = (params) => {
	return http.get(`${path}/sysconfig`, {params})
}
export const checkKey = (key) => {
	return http.post(`${path}/checkKey/${key}`, {});
}
export const dicts = () => {
	return http.get(`${path}/dicts`, {})
}
