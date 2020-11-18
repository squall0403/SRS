module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define("subject", {
      subjectName: {
        type: Sequelize.STRING
      },
      subjectMaster: {
        type: Sequelize.STRING
      },
      subjectActive: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Subject;
  };