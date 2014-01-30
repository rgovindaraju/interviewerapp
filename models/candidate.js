module.exports = function(sequelize, DataTypes) {
  var Candidate = sequelize.define('Candidate', {
    full_name: DataTypes.STRING,
    status: DataTypes.ENUM('REJECT', 'WAIT', 'HIRE')
  }, {
    associate: function(models) {
      Candidate.hasMany(models.Role);
    }
  });
 
  return Candidate;
}
