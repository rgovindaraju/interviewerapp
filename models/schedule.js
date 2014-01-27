module.exports = function(sequelize, DataTypes) {
  var Schedule = sequelize.define('Schedule', {
  	interview_date: DataTypes.DATE,
  	type: DataTypes.ENUM('Phone', 'Face-to-Face'),
  	status: DataTypes.ENUM('Scheduled', 'Ongoing', 'Done')
  }, {
    associate: function(models) {
      Schedule.belongsTo(models.Panel);
      Schedule.belongsTo(models.Candidate);
    }
  });
 
  return Schedule;
}
