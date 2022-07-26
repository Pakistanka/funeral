import { API_BASE_URL, token } from '../api';

const deletePhotoRequest = async (id: string, imageName: string) => {
  await fetch(`${API_BASE_URL}/companies/${id}/image/${imageName}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'authorization': token,
    },
  });

  return ;
};

export default deletePhotoRequest;
