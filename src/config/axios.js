import axios from 'axios';

export const API_KEY = '6AguAVrvzR153CfpvEEdatYlTGOSNRdV';

export default axios.create({
  baseURL: 'https://api.nytimes.com/svc/',
});

