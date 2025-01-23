import axios from 'axios'

const BASE_URL = 'https://httpbin.org'

export const successRequest = () => {
  return axios.get(`${BASE_URL}/status/200`)
}

export const errorNotFoundRequest = () => {
  return axios.get(`${BASE_URL}/status/404`)
}