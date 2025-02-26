/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mobileNo:
 *                 type: string
 *                 example: "0000000000"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/Success"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/Unauthorized"
 *       500:
 *         $ref: "#/components/responses/InternalServerError"
 * 
 *   get:
 *     tags:
 *       - Login
 *     parameters:
 *       - in: header
 *         name: authorizations
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/authorization"
 *       - in: header
 *         name: userid
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/userid"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/Success"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/Unauthorized"
 *       500:
 *         $ref: "#/components/responses/InternalServerError"
 * 
 * /logout:
 *   put:
 *     tags:
 *       - Login
 *     parameters:
 *       - in: header
 *         name: authorizations
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/authorization"
 *       - in: header
 *         name: userid
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/userid"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/Success"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/Unauthorized"
 *       500:
 *         $ref: "#/components/responses/InternalServerError"
 *
 * @swagger
 * /student:
 *   post:
 *     tags:
 *       - Student
 *     parameters:
 *       - in: header
 *         name: authorizations
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/authorization"
 *       - in: header
 *         name: userid
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/userid"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/payload/studentPost"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/Success"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/Unauthorized"
 *       500:
 *         $ref: "#/components/responses/InternalServerError"
 * 
 *   get:
 *     tags:
 *       - Student
 *     parameters:
 *       - in: header
 *         name: authorizations
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/authorization"
 *       - in: header
 *         name: userid
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/userid"
 *       - in: query
 *         name: id
 *         schema:
 *             $ref: "#/components/payload/studentGet"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/Success"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/Unauthorized"
 *       500:
 *         $ref: "#/components/responses/InternalServerError"
 * 
 *   put:
 *     tags:
 *       - Student
 *     parameters:
 *       - in: header
 *         name: authorizations
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/authorization"
 *       - in: header
 *         name: userid
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/userid"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/payload/studentPut"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/Success"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/Unauthorized"
 *       500:
 *         $ref: "#/components/responses/InternalServerError" 
 *   delete:
 *     tags:
 *       - Student
 *     parameters:
 *       - in: header
 *         name: authorizations
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/authorization"
 *       - in: header
 *         name: userid
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/userid"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/payload/studentDelete"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/Success"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/Unauthorized"
 *       500:
 *         $ref: "#/components/responses/InternalServerError" 
 *
 * /students:
 *   get:
 *     tags:
 *       - Student
 *     parameters:
 *       - in: header
 *         name: authorizations
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/authorization"
 *       - in: header
 *         name: userid
 *         required: true
 *         schema:
 *           $ref: "#/components/headers/userid"
 *     responses:
 *       200:
 *         $ref: "#/components/responses/Success"
 *       400:
 *         $ref: "#/components/responses/BadRequest"
 *       401:
 *         $ref: "#/components/responses/Unauthorized"
 *       500:
 *         $ref: "#/components/responses/InternalServerError"
 * 
*/


export default {};
