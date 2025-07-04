import base from './baseDbzApi.js'

const endpoint = 'characters'

const findOne = async (id) => await base.get(`${endpoint}/${id}`);

const api = { findOne }

export default api;