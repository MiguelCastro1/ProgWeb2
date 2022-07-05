'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TiposUsuarios', [
      {
        id: 1,
        rotulo: 'cliente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        rotulo: 'colaborador',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TiposUsuarios', null, {});

  }
};
