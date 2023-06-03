import { create } from 'axios';

const createAxios = () => {
  const config = create({
    baseURL: 'https://example.com',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    withCredentials: true,
  });

  const axiosInstance = create(JSON.parse(JSON.stringify(config)));

  const get = ({ url, params }) => axiosInstance.request({
    method: 'GET',
    url,
    params,
  });

  const post = ({
    url, data, params, headers,
  }) => axiosInstance.request({
    method: 'POST',
    url,
    data,
    params,
    headers,
  });

  const put = ({
    url, data, params, headers,
  }) => axiosInstance.request({
    method: 'PUT',
    url,
    data,
    params,
    headers,
  });

  const patch = ({
    url, data, params, headers,
  }) => axiosInstance.request({
    method: 'PATCH',
    url,
    data,
    params,
    headers,
  });

  const del = ({ url, params, headers }) => axiosInstance.request({
    method: 'DELETE',
    url,
    params,
    headers,
  });

  return {
    instance: axiosInstance,
    get,
    post,
    put,
    patch,
    del,
  };
};

export default createAxios;
