import express from "express";
import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
import studentCon from "../controllers/studentCon.js";
import loginCon from "../controllers/loginCon.js";

const router = express.Router();
router.post("*", async (req, res) => {
    const payload = req.body;
    const route = req.path;
    var responseMdl = new ResponseMdl();
    var statusCode = 200;
    log.info('PostRoutes/Route', route);
    try {
        switch (route) {
            case "/student":
                responseMdl = await studentCon.addStudents(payload);
                break;
            case "/login":
                responseMdl = await loginCon.addLogin(payload);
                break;
        }
    } catch (error) {
        responseMdl.status = false;
        responseMdl.msg = error;
        log.error('PostRoutes/Error', error);
    }
    res.status(statusCode).json(responseMdl.toJson());
});
export default router;
