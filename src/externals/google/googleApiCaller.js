import axios from 'axios';
import config from '../../config';

const getGoogleUserProfile = async (code) => {
  const accessToken = await getGoogleAccessToken(code);
  return await axios.get(
    `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken.data.access_token}`
  );
};

const getGoogleAccessToken = async (code) => {
  return await axios.post('https://oauth2.googleapis.com/token', {
    client_id: config.google.client_id,
    client_secret: config.google.client_secret,
    grant_type: config.google.grant_type,
    redirect_uri: config.google.redirect_uri,
    code: code,
  });
};

export default getGoogleUserProfile;
