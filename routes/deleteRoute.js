import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
import studentCon from "../controllers/studentCon.js";

const deleteRoute = async (payload, endPoint) => {
    var responseMdl = new ResponseMdl();
    log.info('deleteRoute', 'EndPoint: ' + endPoint);
    try {
        switch (endPoint) {
            case '/student':
                responseMdl = await studentCon.deleteStudents(payload);
                break;
        }
    } catch (error) {
        responseMdl.status = false;
        responseMdl.msg = 'Internal Error';
        log.error('deleteRoute', 'Error:' + error);
    }
    return responseMdl;

}
export default deleteRoute;

