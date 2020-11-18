import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function request(endpoint: string, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const data = await fetch(uri).then((res) => res.json());
  return data;
}

export default request;
