module.exports = function (app){
    const tarefas = require('../controllers/tarefasControllers.js')
    app.route('/tarefas')
    .get(tarefas.ListAll)
    .post(tarefas.createOne)
}