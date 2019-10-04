import axios from 'axios';

const url = 'http://localhost:5000/api/players';

export const getPlayerData = async () => {
  const result = await axios
    .get(url)
    .then(({ data }) => data)
    .catch(err => console.error('error', err));

  return result;
};
