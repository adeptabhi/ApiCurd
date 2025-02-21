import ResponseMdl from "../models/responseMdl.js";
import requiredPayloadMw from "./requiredPayloadMw.js";

const putPayloadMw = (payload, endPoint) => {
    var responseMdl = new ResponseMdl();
    switch (endPoint) {
        case '/student':
            responseMdl.msg = requiredPayloadMw(['id', 'name', 'age'], payload);
            break;
        case '/logout':
            responseMdl.msg = requiredPayloadMw([], payload);
            break;
        default:
            responseMdl.msg = 'Url Not Found';
            break;
    }
    return responseMdl;
}

export default putPayloadMw;