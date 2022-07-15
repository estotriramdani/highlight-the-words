import { DataTypes } from 'sequelize';
import db from '../configs/database';

const MockData = db.define(
  'mock_data',
  {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default MockData;

(async () => {
  await db.sync();
})();
