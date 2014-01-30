module.exports = function(sequelize, DataTypes){
	var Requisition = sequelize.define('Requisition', {
		code: DataTypes.STRING,
		status: DataTypes.ENUM('OPEN','CLOSED'),
		summary: DataTypes.STRING(1000)
	},
	{
		associate: function(models){
			Requisition.hasMany(models.Role);
			Requisition.belongsTo(models.Candidate);
		}
	});
	return Requisition;
}