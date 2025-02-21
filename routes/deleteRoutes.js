import express from "express";
import ResponseMdl from "../models/responseMdl.js";
import log from "../utils/log.js";
import studentCon from "../controllers/studentCon.js";

const router = express.Router();

router.delete("*", async (req, res) => {
    const payload = req.body;
    const route = req.path;
    var responseMdl = new ResponseMdl();
    var statusCode = 200;
    log.info('DeleteRoutes/Route', route);
    try {
        switch (route) {
            case '/student':
                responseMdl = await studentCon.deleteStudents(payload.id);
                break;
        }
    } catch (error) {
        responseMdl.status = false;
        responseMdl.msg = error;
        log.error('DeleteRoutes/Error', error);
    }
    res.status(statusCode).json(responseMdl.toJson());
});
export default router;
