import ResponseMdl from '../models/responseMdl.js';
import studentCon from "../controllers/studentCon.js";
import log from '../utils/log.js'
import loginCon from '../controllers/loginCon.js';

const getRoute = async (payload, endPoint) => {
    var responseMdl = new ResponseMdl();
    log.info('getRoute', 'EndPoint: ' + endPoint);
    try {
        switch (endPoint) {
            case "/student":
                responseMdl = await studentCon.getStudent(payload);
                break;
            case "/students":
                responseMdl = await studentCon.getStudents(payload.userId);
                break;
            case "/login":
                responseMdl = await loginCon.getLogin(payload.userId);
                break;
        }
    } catch (error) {
        responseMdl.status = false;
        responseMdl.msg = 'Internal Error';
        log.error('getRoute', 'Error:' + error);
    }
    return responseMdl;
};
export default getRoute;

