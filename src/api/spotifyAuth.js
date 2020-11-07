import axios from 'axios';
import qs from 'qs';

export const getAuth = async () => {
  const clientId = '5d193d9374e5444c8c77c753ae758074';
  const clientSecret = 'a3b9e75194154463883d85cacf1e36d8';
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};

const TOKEN = 'BQBLPRF4FkIn0-KwkPKAAtyS_z3FQ6njO9CE-nUugJac_uYkjjpARrTi-4ykInb7lbyOBEa-jWApVqt1WZs'

export const spotify = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {'Authorization': 'Bearer '+TOKEN}
})
