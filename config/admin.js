module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07abe4a684c7cb634a6c134522480b06'),
  },
});
