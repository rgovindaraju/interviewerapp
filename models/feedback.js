module.exports = function(sequelize, DataTypes) {
  var Feedback = sequelize.define('Feedback', {
  	answer: DataTypes.STRING,
    summary: DataTypes.STRING(500);
    rating: DataTypes.ENUM('BADDER', 'BAD', 'FAIR', 'GOOD', 'EXCELLENT'),
  }, {
    associate: function(models) {
      Feedback.belongsTo(models.Question);
      Feedback.hasMany(models.Schedule);
    }
  });
 
  return Feedback;
}
