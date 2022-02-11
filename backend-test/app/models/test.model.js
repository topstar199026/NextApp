module.exports = function (sequelize, DataTypes) {
  const Test = sequelize.define('Test', {
    test_name: {type: DataTypes.STRING(64)},
    test_value: {type: DataTypes.STRING(64)},
  }, {
    tableName: 'tests',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    timestamps: true,
    underscored: true,
    classMethods: {
    }
  });

  Test.associate = function (models) {
  };
  return Test;
};