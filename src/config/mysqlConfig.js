let mysql = {
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: process.env.SQL_PORT,
  database: process.env.SQL_DATABASE,
  insecureAuth: false,
};

exports.mysql = mysql;
