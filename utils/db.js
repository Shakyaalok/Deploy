const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.Database_Schema, process.env.Database_Username, process.env.Database_Password, {
    host: process.env.Database_Host,
    dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:------------>', error);
    }
}

testConnection();

module.exports = sequelize;