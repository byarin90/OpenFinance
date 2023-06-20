import axios, { AxiosError, AxiosResponse } from "axios";

interface BodyData {
  [key: string]: any;
}

export const getApi = async (url: string): Promise<AxiosResponse> => {

  try {
    const res = await axios.get(url, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return res;
  }catch (error) {
    throw error as AxiosError;
  }
}

export const postApi = async (url: string, bodyData: BodyData | null | undefined = {}): Promise<AxiosResponse> => {
 
  try {
    const res = await axios.post(url, bodyData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res;
  } catch (error) {
    throw error as AxiosError;
  }
}

export const putApi = async (url: string, bodyData: undefined | BodyData | null | undefined = {}): Promise<AxiosResponse> => {

  try {
    const res = await axios.put(url, bodyData, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return res;
  } catch (error) {
    throw error as AxiosError;
  }
}

export const deleteApi = async (url: string): Promise<AxiosResponse> => {
  try {
    const res = await axios.delete(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return res;
  } catch (error) {
    throw error as AxiosError;
  }
}