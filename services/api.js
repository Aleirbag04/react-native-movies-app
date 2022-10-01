import axios from 'axios';
import qs from 'qs';
import { API_URL ,API_KEY} from './api_config';

export const getData = async (category,option) => {

    const url = `${API_URL}/${category}/${option}`;
    console.log(url);

    try{
    const params = {
        api_key: API_KEY,
        language: 'en-US',
        page: 1
        }

    const dataAxios = await axios.create({
        paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'})
    })
    console.log(params);

    const response = await dataAxios.get(url, {params});

    const content= response.data.results;

    return content;

    } catch (error) {
        throw error;
    }


}

export const getSearch = async (category,option, query) => {

    const url = `${API_URL}/${category}/${option}`;
    console.log(url);

    try{
    const params = {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
        query: query
        }

    const dataAxios = await axios.create({
        paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'})
    })
    console.log(params);

    const response = await dataAxios.get(url, {params});

    const content= response.data.results;

    return content;

    } catch (error) {
        throw error;
    }


}

export const getOne = async (category,id) => {

    const url = `${API_URL}/${category}/${id}`;
    console.log(url);

    try{
    const params = {
        api_key: API_KEY,
        language: 'en-US',
        }

    const dataAxios = await axios.create({
        paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'})
    })
    console.log(params);

    const response = await dataAxios.get(url, {params});

    const content= response.data.results;

    return content;

    } catch (error) {
        throw error;
    }


}

