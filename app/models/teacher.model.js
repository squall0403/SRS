module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      inschool: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Teacher;
  };