import loginCon from "../controllers/loginCon.js";
import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
import requiredPayloadMw from "./requiredPayloadMw.js";

const authorizationMw = async (headers) => {
    var responseMdl = new ResponseMdl();
    responseMdl.msg = requiredPayloadMw(['authorization', 'userid'], headers);
    if (headers.authorization != 'adeptAbhi') {


        if (responseMdl.msg == 'success') {
            responseMdl = await loginCon.getLogin(headers.userid);
            log.info('authorizationMw', responseMdl.data);
            if (responseMdl.status) {
                if (headers.authorization == responseMdl.data.authorization) {
                    responseMdl.status = true;
                } else {
                    responseMdl.status = false;
                    responseMdl.msg = 'unauthorization';
                }
                responseMdl.data = [];
            }
        } else {
            responseMdl.msg = responseMdl.msg + ' in headers';
            responseMdl.status = false;
        }
    }
    return responseMdl;
}

export default authorizationMw;

