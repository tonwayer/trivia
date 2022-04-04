import axios from 'axios'

import { Question } from '../types';

const axioInstance = axios.create({
  baseURL: 'http://localhost:9000',
})

interface LoadQuestionsResponse {
  results: Question[];
}

export const getQuizzes = () => axioInstance.get<LoadQuestionsResponse>('/')
