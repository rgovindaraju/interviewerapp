module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    category: DataTypes.ENUM(
      'Data Structures',
      'Algorithm',
      'Web Architecture',
      'OOAD',
      'Database',
      'Communication',
      'Teamwork',
      'Refactoring',
      'Design Pattern',
      'Other'
      'Overall'),
    short_question: DataTypes.STRING,
    full_question: DataTypes.STRING(500),
    model_answer: DataTypes.STRING(500),
  });
  return Question;
}