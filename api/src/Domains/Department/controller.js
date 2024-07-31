const { v4 } = require("uuid");
const { DepartmentRequestBuilder } = require("../../Entities/departmentRequest");
const ValidationError = require("../../Exceptions/ValidationError");
const service = require("./service");



class DepartmentController {

    createRequest = async (request, response) => {
        try {
            const { departmentId } = request.query;

            await service.getDepartmentById(departmentId);
            await service.isUserAlreadyLinkedToDepartment(request.userId, departmentId);

            const departmentRequest = new DepartmentRequestBuilder()
                .setId(v4())
                .setUserId(String(request.userId))
                .setDepartmentId(departmentId)
                .build();

            console.log("requisição -> ", departmentRequest);

            const result = await service.createMemberRequest(departmentRequest);

            return response.status(201).json(result);
        } catch (error) {
            return error instanceof ValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
        }


    }

    listDepartmentRequests = async (request, response) => {
        try {
            const { departmentId } = request.query;

            await service.getDepartmentById(departmentId);
            await service.isUserDepartmentLeader(request.userId, departmentId);

            const result = await service.listDepartmentRequests(departmentId);

            return response.status(200).json(result);
        } catch (error) {
            return error instanceof ValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
        }
    }

    leaderAcceptSolicitation = async (request, response) => {
        try {
            const { memberId, departmentId } = request.body;

            await service.isUserDepartmentLeader(request.userId, departmentId);
            await service.isUserAlreadyLinkedToDepartment(memberId, departmentId);
            await service.requestExists(memberId, departmentId);

            await service.linkUserToDepartment(memberId, departmentId);
            await service.deleteRequest(memberId, departmentId);

            // o usuário deve ser notificado

            return response.status(202).json({message: "Member linked to department successfully."});
        } catch (error) {
            return error instanceof ValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
        }
    }

    leaderRejectSolicitation = async (request, response) => {
        try {
            const { memberId, departmentId } = request.body;

            await service.isUserDepartmentLeader(request.userId, departmentId);
            await service.isUserAlreadyLinkedToDepartment(memberId, departmentId);
            await service.requestExists(memberId, departmentId);

            await service.deleteRequest(memberId, departmentId);

            // o usuário deve ser notificado

            return response.status(200).json({message: "Member association to department rejected."});
        } catch (error) {
            return error instanceof ValidationError ?
                response.status(400).json({ error: error.message }) :
                response.status(500).json({ error });
        }
    }
}

module.exports = DepartmentController;