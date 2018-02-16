module.exports = [
  {
    pattern: '(.*)',
    fixtures: function (match, params, headers, context) {
      return window.__fixtures__['jsonapi'];
    },
    get: function (match, data) {
      return {
        body: data
      };
    },
    post: function (match, data) {
      return {
        body: data
      };
    },
    delete: function (match, data) {
      return {
        body: data
      };
    },
    put: function (match, data) {
      return {
        body: data
      };
    },
  },
];
