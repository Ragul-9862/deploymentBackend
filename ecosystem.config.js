module.exports = {
  apps: [
    {
      name: "backend-api",
      cwd: "/var/www/backend.apidev.cloud/deploymentBackend",
      script: "dist/server.js",
      env: {
        NODE_ENV: "development",
        PORT: 5000
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};
