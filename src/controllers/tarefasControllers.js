const tarefa = require('../models/tarefa')

const Tarefa = require('../models').Tarefa

exports.ListAll = (req, res) => {
    Tarefa.findAll().then(tarefas => {
        res.send(tarefas)
    })
}

exports.createOne = (req, res) => {
    console.log(Tarefa)
    const { descricao, datacria, status} = req.body
    Tarefa.create({descricao, datacria, status}).then(tarefa => {
        res.send(tarefa)
    })
}