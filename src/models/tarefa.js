const {Model} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Tarefa extends Model {
        static associate(models) {
        
        }
    }
    Tarefa.init({
        descricao: DataTypes.STRING,
        datacria: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Tarefa',
    });

    return Tarefa;
    
};