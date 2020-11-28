import axios from 'axios';
import config from '@src/config';
import { ExternalApiException } from '@src/exception/CustomException';

export const getGoogleUserProfile = async (code, redirectUri) => {
  try {
    const accessToken = await _getGoogleAccessToken(code, redirectUri);
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

const _getGoogleAccessToken = async (code, redirectUri) => {
  return await axios.post('https://oauth2.googleapis.com/token', {
    client_id: config.google.client_id,
    client_secret: config.google.client_secret,
    grant_type: config.google.grant_type,
    redirect_uri: redirectUri,
    code: code,
  });
};
