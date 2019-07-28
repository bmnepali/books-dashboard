import axios from 'axios';
import Config from '../../app.config';

const instance = axios.create({
  baseURL: Config.basePath,
});

/**
 * Catch the AunAuthorized Request
 */
instance.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    const errorMsg = handleError(error);

    return Promise.reject(errorMsg);
  },
);

const handleError = error => {
  let message = null;
  if (typeof error.response !== 'undefined') {
    switch (error.response.status) {
      case 400:
        message = error.message;
        break;

      case 401:
        message = 'Un-Authorized Request';
        break;

      case 404:
        message = 'API Route is Missing or Undefined or Incorrect';
        break;

      case 405:
        message = 'API Route Method Not Allowed';
        break;
      case 422:
        message = 'Form Validation Messages';
        break;

      case 500:
        message = 'Server Error';
        break;

      default:
        message = error.hasOwnProperty('message') ? error.message : '';
        break;
    }
  }

  return message;
};

export default instance;
