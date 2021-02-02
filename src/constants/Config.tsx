import axios from 'axios';

export const baseUrl = '';

export const headers = {};

export const axiosAPI = axios.create({
  baseURL: baseUrl,
  headers: headers,
});
