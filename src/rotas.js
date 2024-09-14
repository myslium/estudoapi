import turmaController from './controller/aluno/turmaController.js';



export default function AdicionarRotas(servidor) {
    servidor.use(turmaController)
}