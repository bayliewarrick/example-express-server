'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
    return Promise.all([
      queryInterface.addColumn('Posts', 'category', {
        type: Sequelize.STRING,
      }, {transaction: t}),
      queryInterface.addColumn('Posts', 'isPublished', {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },{transaction: t})
    ])
    })
  },

  down: (queryInterface, Sequelize) => {
return queryInterface.sequelize.transaction((t) => {
  return Promise.all([
        queryInterface.removeColumn('Posts', 'category', {transaction: t}),
        queryInterface.removeColumn('Posts', 'isPublished', {transaction: t})
      ])
    })
  }
};
