import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
import studentCon from "../controllers/studentCon.js";
import loginCon from "../controllers/loginCon.js";

const putRoute = async (payload, endPoint) => {
    var responseMdl = new ResponseMdl();
    log.info('putRoute', 'EndPoint: ' + endPoint);
    try {
        switch (endPoint) {
            case '/student':
                responseMdl = await studentCon.updateStudent(payload);
                break;
            case 'logout':
                responseMdl = await loginCon.updateLogin(payload.userId);
                break;
        }
    } catch (error) {
        responseMdl.status = false;
        responseMdl.msg = 'Internal Error';
        log.error('putRoute', 'Error:' + error);
    }
    return responseMdl;

}


export default putRoute;
