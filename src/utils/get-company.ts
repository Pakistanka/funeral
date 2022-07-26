import { API_BASE_URL, token } from '../api';

const getCompny = async (id: string) => {
  const res = await fetch(`${API_BASE_URL}/companies/${id}`, {
    mode: 'cors',
    headers: {
      'authorization': token,
    },
  });
  const data = await res.json();

  return data;
};

export default getCompny;
