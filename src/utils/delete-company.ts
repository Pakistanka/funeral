import { API_BASE_URL, token } from '../api';

const deleteCompny = async (id: string) => {
  await fetch(`${API_BASE_URL}/companies/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'authorization': token,
    },
  });
};

export default deleteCompny;
