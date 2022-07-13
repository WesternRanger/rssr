const { setMaxListeners } = require("koa");

module.exports = {
  apps : [{
    script: 'app.js',
    exec_mode: 'cluster_mode',
    instances: 'max',
    error_file: './logs/app-err.log',
    out_file: './logs/app-out.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
  }],
};
