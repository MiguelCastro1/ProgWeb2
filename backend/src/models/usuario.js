'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    tipoUsuarioId: DataTypes.INTEGER,
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          Args: [3,50],
          msg: 'O nome deve ter entre 3 e 50 caracteres'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          Args: true,
          msg: 'O email deve ser válido'
        }
      }
    },
    senha: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};