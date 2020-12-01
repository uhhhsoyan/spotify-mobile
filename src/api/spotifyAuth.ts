import axios from 'axios';
import qs from 'qs';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_TEST_TOKEN } from '@env';

export const getAuth = async () => {
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: SPOTIFY_CLIENT_ID,
      password: SPOTIFY_CLIENT_SECRET,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers,
    );
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

export const spotify = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: { Authorization: 'Bearer ' + SPOTIFY_TEST_TOKEN },
});
