import { Sequelize } from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from '.';

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
});

export default db;
