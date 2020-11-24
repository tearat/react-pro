import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function request<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  const data = await fetch(uri).then((res) => res.json());
  return data;
}

export default request;
