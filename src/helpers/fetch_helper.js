let callback;

module.exports = {
  setCallback(cb) {
    callback = cb;
  },
  post(url, body) {
    callback && callback(body);
  }
};