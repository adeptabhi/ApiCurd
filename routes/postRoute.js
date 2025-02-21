import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
import studentCon from "../controllers/studentCon.js";
import loginCon from "../controllers/loginCon.js";

const postRoute = async (payload, endPoint) => {
    var responseMdl = new ResponseMdl();
    log.info('postRoute', 'EndPoint: ' + endPoint);
    try {
        switch (endPoint) {
            case "/student":
                responseMdl = await studentCon.addStudents(payload);
                break;
            case "/login":
                responseMdl = await loginCon.addLogin(payload);
                break;
        }
    } catch (error) {
        responseMdl.status = false;
        responseMdl.msg = 'Internal Error';
        log.error('postRoute', 'Error:' + error);
    }
    return responseMdl;
};
export default postRoute;
