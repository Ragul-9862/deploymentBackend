module.exports = {
  apps: [
    {
      name: "backend-api",
      cwd: "/var/www/backend.apidev.cloud/deploymentBackend",
      script: "dist/server.js",
     
      env_production: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};
