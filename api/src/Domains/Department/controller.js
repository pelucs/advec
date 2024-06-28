const { v4 } = require("uuid");
const { DepartmentRequestBuilder } = require("../../Entities/departmentRequest");
const ValidationError = require("../../Exceptions/ValidationError");
const service = require("./service");



class DepartmentController {

    create = async (request, response) => {
        try {
            const { departmentId } = request.query;

            await service.getDepartmentById(departmentId);
            await service.isUserAlreadyLinkedToDepartment(request.userId, departmentId);

            const departmentRequest = new DepartmentRequestBuilder()
                .setId(v4())
                .setUserId(request.userId)
                .setDepartmentId(departmentId)
                .build();

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
}

module.exports = DepartmentController;