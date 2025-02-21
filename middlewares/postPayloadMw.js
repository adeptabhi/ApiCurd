import ResponseMdl from "../models/responseMdl.js";
import requiredPayloadMw from "./requiredPayloadMw.js";

const postPayloadMw = (payload, endPoint) => {
    var responseMdl = new ResponseMdl;
    switch (endPoint) {
        case '/student':
            responseMdl.msg = requiredPayloadMw(['name', 'age'], payload);
            break;
        case '/login':
            responseMdl.msg = requiredPayloadMw(['mobileNo'], payload);
            if (responseMdl.msg == 'success' && payload.mobileNo.length != 10) {
                responseMdl.msg = 'Invalid mobile No';
            }
            break;

        default:
            responseMdl.msg = 'Url Not Found';
            break;
    }
    return responseMdl;
}

export default postPayloadMw;