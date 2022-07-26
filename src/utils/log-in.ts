import { API_BASE_URL } from '../api/index';
const logIn = async () => {
  const res = await fetch(`${API_BASE_URL}/auth?user=nebunohu`, {mode: 'cors'});
  // console.log(...res.headers);
  const iterator = res.headers.entries();
  console.log(iterator.next())
  console.log(iterator.next())
  res.headers.forEach(function(val, key) { console.log(key + ' -> ' + val); });
  const token = res.headers.get('content-length')
  console.log(token);
  const data = await res.json();

  return data;
};

export default logIn;
