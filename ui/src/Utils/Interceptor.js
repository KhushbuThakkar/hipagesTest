const axios = require("axios");

// https://github.com/sindresorhus/is-absolute-url/blob/master/index.js#L7
const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

const interceptor = () => {
  // eslint-disable-next-line func-names
  axios.interceptors.request.use(function(config) {
    // Concatenate base path if not an absolute URL
    if (!isAbsoluteURLRegex.test(config.url)) {
      // eslint-disable-next-line no-param-reassign
      config.url = `${process.env.REACT_APP_api_url}${config.url}`;
    }
    return config;
  });
};

export default interceptor;
