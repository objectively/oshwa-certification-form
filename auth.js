// const basicAuth = require('basic-auth');
// /* istanbul ignore next */
// const auth = function(req, res, next) {
//   function unauthorized(res) {
//     res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
//     return res.sendStatus(401);
//   }

//   var user = basicAuth(req);

//   if (!user || !user.name || !user.pass) {
//     return unauthorized(res);
//   }

//   if (user.name === process.env.AUTH_USERNAME && user.pass === process.env.AUTH_PASSWORD) {
//     return next();
//   } else {
//     return unauthorized(res);
//   }
// };

// module.exports = auth;
