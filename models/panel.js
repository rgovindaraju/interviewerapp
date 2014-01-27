module.exports = function(sequelize, DataTypes) {
  var Panel = sequelize.define('Panel', {
  	login_name: DataTypes.STRING,
  	password: DataTypes.STRING,
    full_name: DataTypes.STRING,
  }, {
    associate: function(models) {
      Panel.hasMany(models.Schedule);
    }
  });
 
  return Panel;
}
