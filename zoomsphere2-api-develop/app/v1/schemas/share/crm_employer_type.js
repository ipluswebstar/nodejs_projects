/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crm_employer_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    master_account_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    name: {
      type: 'CHAR(40)',
      allowNull: false
    }
  }, {
    tableName: 'crm_employer_type',
    freezeTableName: true
  });
};
