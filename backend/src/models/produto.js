'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Compra, {through: 'CompraProduto'});
    }
  }
  Produto.init({
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3,50],
          msg: 'O nome do produto deve ter entre 3 e 50 caracteres'
        }
      }
    },
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
    },
    file: {
      type: DataTypes.STRING,
    },
    path_file: {
      type: DataTypes.STRING,
    },
    estoque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};