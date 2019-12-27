import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
});

export const API_KEY = '6AguAVrvzR153CfpvEEdatYlTGOSNRdV';

export default instance;
