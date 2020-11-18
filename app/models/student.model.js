module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      firstnamme: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      inschool: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Student;
  };