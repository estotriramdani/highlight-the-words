import axios, { AxiosRequestConfig } from 'axios';
import { ISearchResult } from '../pages/api/search';

export async function fetchAPI<T>(
  url: string,
  options: AxiosRequestConfig
): Promise<T> {
  try {
    const response = await axios(url, options);
    const responseData: T = response.data;
    return responseData;
  } catch (error) {
    throw error;
  }
}
