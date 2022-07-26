import { API_BASE_URL, token } from '../api';

const getContact = async (id: string) => {
  const res = await fetch(`${API_BASE_URL}/contacts/${id}`, {
    mode: 'cors',
    headers: {
      'authorization': token,
    },
  });
  const data = await res.json();

  return data;
};

export default getContact;
