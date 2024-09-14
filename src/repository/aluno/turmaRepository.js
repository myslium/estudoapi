import connection from '../connection.js'


export async function inserirTurma(turmaNova) {

    const comando = `
    INSERT INTO tb_turma(nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
    VALUES (?, ?, ?, ?, ?, ?)
    
    `;
    let resposta = await connection.query(comando, [turmaNova.turma, turmaNova.curso, turmaNova.ano, turmaNova.capacidade, turmaNova.ativo, turmaNova.inclusao]);
    let info = resposta[0];

    return info.insertId;
}

export async function alterarTurma(id, turma) {
    
    const comando = `
    UPDATE tb_turma
    set nm_turma = ?,
	ds_curso = ?,
	nr_ano_letivo = ?,
	qtd_capacidade = ?,
	bt_ativo = ?,
	dt_inclusao = ?
    WHERE id_turma = ?
    `;

    let resposta = await connection.query(comando, [turma.turma, turma.curso, turma.ano, turma.capacidade, turma.ativo, turma.inclusao, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarTurma(id) {
    
    const comando = `
    DELETE from tb_turma
    WHERE id_turma = ?

    `;

    let resposta = await connection.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function consultarTurmas() {
    
    const comando = `
        SELECT 
            id_turma            id,
            nm_turma            turma,
            ds_curso            curso,
            nr_ano_letivo       ano,
            qtd_capacidade      capacidade,
            bt_ativo            ativo,
            dt_inclusao         data_inclusao
        FROM tb_turma
    `;

    let resposta = await connection.query(comando);
    let info = resposta[0];

    return info
}

export async function consultarPorAno(ano) {

    const comando = `
    SELECT
            id_turma            id,
            nm_turma            turma,
            ds_curso            curso,
            nr_ano_letivo       ano,
            qtd_capacidade      capacidade,
            bt_ativo            ativo,
            dt_inclusao         data_inclusao
        FROM tb_turma
        WHERE nr_ano_letivo = ?
    `;

    let resposta = await connection.query(ano);
    let info = resposta[0];

    return info
    
}