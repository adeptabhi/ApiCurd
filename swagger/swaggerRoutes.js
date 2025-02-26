/**
 * @swagger
 * /login:
 *   post:
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

*/

export default {};