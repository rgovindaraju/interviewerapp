module.exports = function(sequelize, DataTypes) {
  var Feedback = sequelize.define('Feedback', {
  	answer: DataTypes.STRING,
    rating: DataTypes.ENUM('BADDER', 'BAD', 'FAIR', 'GOOD', 'EXCELLENT'),
  }, {
    associate: function(models) {
      Feedback.belongsTo(models.Question);
      Feedback.belongsTo(models.Panel);
      Feedback.belongsTo(models.Candidate);
    }
  });
 
  return Feedback;
}
