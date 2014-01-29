module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define('Candidate', {
    full_name: DataTypes.STRING,
    status: DataTypes.ENUM('FAIL', 'WAIT', 'HIRE')
  }, {
    associate: function(models) {
      Candidate.belongsTo(models.Role);
      Candidate.hasMany(models.Schedule);
    }
  });
 
  return Candidate;
}
