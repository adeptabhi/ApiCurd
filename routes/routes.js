import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
import studentCon from "../controllers/studentCon.js";
import postRoute from "./postRoute.js";
import getRoute from "./getRoute.js";
import putRoute from "./putRoute.js";
import deleteRoute from "./deleteRoute.js";

const routes = async (req) => {
    var responseMdl = new ResponseMdl();
    const payload = req.body;
    const endPoint = req.path;
    switch (req.method) {
        case 'GET':
            responseMdl = await getRoute(payload, endPoint);
            break;
        case 'POST':
            responseMdl = await postRoute(payload, endPoint);
            break;
        case 'PUT':
            responseMdl = await putRoute(payload, endPoint);
            break;
        case 'DELETE':
            responseMdl = await deleteRoute(payload, endPoint);
            break;

    }
    return responseMdl;
}

export default routes;

