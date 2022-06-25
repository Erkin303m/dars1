module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0c791a0e28128683aa901c343c668216'),
  },
});
