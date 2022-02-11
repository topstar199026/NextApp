module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      // queryInterface.addColumn(
      //   'tests',
      //   'test_name',
      //   Sequelize.DataTypes.STRING(64)
      // ),
      // queryInterface.addColumn(
      //   'tests',
      //   'test_value',
      //   Sequelize.DataTypes.STRING(64)
      // ),
    ]).catch(e => console.log(e));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tests');
  }
};