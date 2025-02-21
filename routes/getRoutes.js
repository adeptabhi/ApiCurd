import express from "express";
import ResponseMdl from '../models/responseMdl.js';
import studentCon from "../controllers/studentCon.js";
import log from '../utils/log.js'

const router = express.Router();

router.get("*", async (req, res) => {
    const route = req.path;
    const payload = req.body;
    var responseMdl = new ResponseMdl();
    var statusCode = 200;
    log.info('GetRoutes/Route', route);
    try {
        switch (route) {
            case "/student":
                responseMdl = await studentCon.getStudent(payload.id);
                break;
            case "/students":
                responseMdl = await studentCon.getStudents();
                break;
        }
    } catch (error) {
        responseMdl.status = false;
        responseMdl.msg = error;
        log.error('GetRoutes/Error', error);
    }
    res.status(statusCode).json(responseMdl.toJson());
});
export default router;
