const { setMaxListeners } = require("koa");

module.exports = {
  apps : [{
    script: 'app.js',
    env_production: {
      NODE_ENV: "production"
    },
    exec_mode: 'cluster_mode',
    instances: 'max',
    autorestart: true,
    max_memory_restart: '1G',
    error_file: './logs/app-err.log',
    out_file: './logs/app-out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
  }],
};
