import sequelize from './database.js';
import Car from './models/Car.js';

async function main() {
  try {
    await sequelize.authenticate();

    await sequelize.sync({ force: true });

    await Car.bulkCreate([
      { brand: 'Toyota', model: 'Camry', year: 2022, price: 2500000, isAvailable: true },
      { brand: 'BMW',    model: 'X5',    year: 2023, price: 6500000, isAvailable: false },
      { brand: 'Lada',   model: 'Vesta', year: 2021, price: 1200000, isAvailable: true },
    ]);

    const cars = await Car.findAll();
    console.log('Все автомобили:');
    cars.forEach(c => console.log(c.toJSON()));
  } catch (err) {
    console.error('Ошибка:', err);
  } finally {
    await sequelize.close();
  }
}

main();
