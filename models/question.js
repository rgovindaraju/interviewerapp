module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    category: DataTypes.ENUM(
      'Data Structures',
      'Algorithm',
      'Web Architecture',
      'Class Design',
      'Database',
      'Communication',
      'Teamwork',
      'Overall'),
    name: DataTypes.STRING,
    full_question: DataTypes.STRING(500),
    model_answer: DataTypes.STRING(500),
  }, {
    associate: function(models) {
      Question.hasMany(models.Feedback);
    }
  });
 
  return Question;
}
