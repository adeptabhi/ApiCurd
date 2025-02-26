import db from "../config/db.js";
import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
const tableName = 'Students'
const getStudents = async (userId) => {
    log.info('StudentsCon', 'getStudents');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`SELECT * FROM ${tableName} WHERE userId=?`, userId);
    if (!data || data.length === 0) {
        responseMdl.msg = 'No data found.';
        responseMdl.status = false;
    } else {
        responseMdl.data = data[0];
        responseMdl.msg = 'Data fetch successfully.';
    }
    return responseMdl;
}


const getStudent = async (payload) => {
    log.info('StudentsCon', 'getStudent');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`SELECT * FROM ${tableName} WHERE userId=? AND id=?`, [payload.userId, payload.id]);
    if (!data || data.length === 0) {
        responseMdl.msg = 'No data found.';
        responseMdl.status = false;
    } else
        if (data[0].length === 0) {
            responseMdl.msg = `Invalid student id or user id`;
            responseMdl.status = false;
        } else {
            responseMdl.data = data[0][0];
            responseMdl.msg = 'Data fetch successfully.';
        }
    return responseMdl;
}


const addStudents = async (payload) => {
    log.info('StudentsCon', 'addStudents');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`INSERT INTO ${tableName} (name, age,userId) VALUES (?,?,?)`, [payload.name, payload.age, payload.userId]);
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
    var data = await db.query(`UPDATE ${tableName} SET name = ?, age = ? WHERE userId=? AND id=?`, [payload.name, payload.age, payload.userId, payload.id]);
    if (data[0].affectedRows == 0) {
        responseMdl.msg = `Invalid student id: ${payload.id}`;
        responseMdl.status = false;
    } else {
        responseMdl.data = { id: payload.id };
        responseMdl.msg = 'Data updated successfully.';
    }
    return responseMdl;
}

const deleteStudents = async (payload) => {
    log.info('StudentsCon', 'deleteStudents');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`DELETE FROM ${tableName} WHERE userId=? AND id=?`, [payload.userId, payload.id]);
    if (data[0].affectedRows == 0) {
        responseMdl.msg = `Invalid student id: ${payload.id}`;
        responseMdl.status = false;
    } else {
        responseMdl.data = { id: payload.id };
        responseMdl.msg = 'Data deleted successfully.';
    }
    return responseMdl;
}
export default { getStudents, getStudent, addStudents, deleteStudents, updateStudent };