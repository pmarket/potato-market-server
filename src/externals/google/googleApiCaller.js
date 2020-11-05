import axios from 'axios';
import config from '../../config';
import { ExternalApiException } from '../../exception/customException';

const getGoogleUserProfile = async (code) => {
  try {
    const accessToken = await getGoogleAccessToken(code);
    return await axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken.data.access_token}`
    );
  } catch (error) {
    throw new ExternalApiException(
      '구글과 연동 중 에러가 발생하였습니다',
      error
    );
  }
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
