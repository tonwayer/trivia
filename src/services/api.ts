import axios from 'axios'

import { Question } from '../types';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL
    || `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`,
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const msg = error.response?.data?.msg || 'Request failed!'
    alert(msg)

    return Promise.reject(error)
  }
)

interface LoadQuestionsResponse {
  results: Question[];
}

export const getQuestions = () => axiosInstance.get<LoadQuestionsResponse>('/')
