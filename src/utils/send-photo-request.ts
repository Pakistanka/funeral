import { API_BASE_URL, token } from '../api';

const sendPhotoRequest = async (id: string, formData: FormData) => {
  const res = await fetch(`${API_BASE_URL}/companies/${id}/image`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      // 'content-type': 'multipart/form-data',
      'authorization': token,
    },
    body: formData,
  });
  const data = await res.json();

  return data;
};

export default sendPhotoRequest;
