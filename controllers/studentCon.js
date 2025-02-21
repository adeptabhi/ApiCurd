import db from "../config/db.js";
import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
const tableName = 'Students'
const getStudents = async () => {
    log.info('StudentsCon', 'getStudents');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`SELECT * FROM ${tableName}`);
    if (!data || data.length === 0) {
        responseMdl.msg = 'No data found.';
        responseMdl.status = false;
    } else {
        responseMdl.data = data[0];
        responseMdl.msg = 'Data fetch successfully.';
    }
    return responseMdl;
}


const getStudent = async (id) => {
    log.info('StudentsCon', 'getStudents');
    const responseMdl = new ResponseMdl();
    var data = await db.query(id == null ? `SELECT * FROM ${tableName}` : `SELECT * FROM ${tableName} WHERE id=?`, id);
    if (!data || id == '' && data.length === 0) {
        responseMdl.msg = 'No data found.';
        responseMdl.status = false;
    } else
        if (data[0].length === 0) {
            responseMdl.msg = `Invalid student id: ${id}`;
            responseMdl.status = false;
        } else {
            responseMdl.data = id == null ? data[0] : data[0][0];
            responseMdl.msg = 'Data fetch successfully.';
        }
    return responseMdl;
}


const addStudents = async (payload) => {
    log.info('StudentsCon', 'addStudents');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`INSERT INTO ${tableName} (name, age) VALUES (?,?)`, [payload.name, payload.age]);
    if (data[0].insertId == 0) {
        responseMdl.msg = 'Error'
        responseMdl.status = false;
    } else {
        responseMdl.data = { id: data[0].insertId };
        responseMdl.msg = 'Data inserted successfully.';
    }
    return responseMdl;
}


const updateStudent = async (payload) => {
    log.info('StudentsCon', 'updateStudents');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`UPDATE ${tableName} SET name = ?, age = ? WHERE id=?`, [payload.name, payload.age, payload.id]);
    if (data[0].affectedRows == 0) {
        responseMdl.msg = `Invalid student id: ${payload.id}`;
        responseMdl.status = false;
    } else {
        responseMdl.data = { id: payload.id };
        responseMdl.msg = 'Data updated successfully.';
    }
    return responseMdl;
}

const deleteStudents = async (id) => {
    log.info('StudentsCon', 'deleteStudents');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`DELETE FROM ${tableName} WHERE id=?`, id);
    if (data[0].affectedRows == 0) {
        responseMdl.msg = `Invalid student id: ${id}`;
        responseMdl.status = false;
    } else {
        responseMdl.data = { id: id };
        responseMdl.msg = 'Data deleted successfully.';
    }
    return responseMdl;
}
export default { getStudents, getStudent, addStudents, deleteStudents, updateStudent };