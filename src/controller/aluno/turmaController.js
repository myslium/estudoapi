import * as db from '../../repository/aluno/turmaRepository.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/turma/', async (req, resp) => {

    try {
            let turmaNova = req.body;
            let id = await db.inserirTurma(turmaNova);
            
            resp.send({
                novoId: id
            })
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

endpoints.put('/turma/:id', async (req, resp) => {
    
    try {
            let turma = req.body;
            let id = req.params.id;
            await db.alterarTurma(id, turma);

            resp.send()

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/turma/deletar/:id', async (req, resp) => {

    try {
         let id = req.params.id;
         await db.deletarTurma(id);
         
         resp.send()
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
})

endpoints.get('/turma/consultar', async (req, resp) => {
    
    try {
            let turmas = await db.consultarTurmas()

            resp.send({
                turmas: turmas
            })

    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/turma/consultar/ano', async (req, resp) => {
    
    try {
            let ano = req.query.ano;
            let turmas = await db.consultarPorAno(ano);

            resp.send({
                turmas: turmas
            })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints;