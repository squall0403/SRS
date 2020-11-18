module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
      forename: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      preferredname: {
        type: Sequelize.STRING
      },
      schoolid: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      address: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      yeargroup: {
        type: Sequelize.STRING
      },
      yeargroupnum: {
        type: Sequelize.INTEGER
      },
      academichouse: {
        type: Sequelize.STRING
      },
      form: {
        type: Sequelize.STRING
      },
      studentemail: {
        type: Sequelize.STRING
      },
      schoolstatus: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Student;
  };