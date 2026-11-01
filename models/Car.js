import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Car = sequelize.define('Car', {
  brand:       { type: DataTypes.STRING,  allowNull: false },
  model:       { type: DataTypes.STRING,  allowNull: false },
  year:        { type: DataTypes.INTEGER, allowNull: false },
  price:       { type: DataTypes.FLOAT,   allowNull: false },
  isAvailable: { type: DataTypes.BOOLEAN, defaultValue: true },
}, {
  tableName: 'cars',
});

export default Car;
