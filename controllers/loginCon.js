import db from "../config/db.js";
import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
import { v4 as uuidv4 } from 'uuid';

const tableName = 'Login';

const getLogin = async (id) => {
    log.info('LoginCon', 'getLogin');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`SELECT * FROM ${tableName} WHERE id=?`, [id]);
    if (!data || data[0].length === 0) {
        responseMdl.msg = `Invalid User Id: ${id}`;
        responseMdl.status = false;
    } else {
        responseMdl.data = data[0][0];
        responseMdl.msg = 'success';
    }
    return responseMdl;
}


const addLogin = async (payload) => {
    log.info('LoginCon', 'addLogin');
    const authorization = uuidv4();
    const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Format as 'YYYY-MM-DD HH:mm:ss'
    const responseMdl = new ResponseMdl();
    const query = `
        INSERT INTO ${tableName} (mobileNo, authorization, date) 
        VALUES (?, ?, ?) 
        ON DUPLICATE KEY UPDATE 
        authorization = VALUES(authorization), 
        date = VALUES(date)`;
    const data = await db.query(query, [payload.mobileNo, authorization, date]);
    if (data[0].insertId == 0) {
        responseMdl.msg = 'Error'
        responseMdl.status = false;
    } else {
        responseMdl.data = (await getLogin(data[0].insertId)).data;
        responseMdl.data['isNewUser'] = (data[0].affectedRows) == 1;
        responseMdl.msg = 'Login successfully.';
    }
    return responseMdl;
}

const updateLogin = async (id) => {
    log.info('LoginCon', 'updateLogin');
    const responseMdl = new ResponseMdl();
    await db.query(`UPDATE ${tableName} SET authorization = ? WHERE id = ?`, ['', id]);
    responseMdl.msg = 'Logout Successfully';
    return responseMdl;
}

const deleteLogin = async (mobileNo) => {
    log.info('LoginCon', 'deleteLogin');
    const responseMdl = new ResponseMdl();
    var data = await db.query(`DELETE FROM ${tableName} WHERE id =? `, mobileNo);
    if (data[0].affectedRows == 0) {
        responseMdl.msg = `Invalid login id: ${mobileNo} `;
        responseMdl.status = false;
    } else {
        responseMdl.data = { id: mobileNo };
        responseMdl.msg = 'Data deleted successfully.';
    }
    return responseMdl;
}
export default { getLogin, addLogin, deleteLogin, updateLogin };