const DepartmentDoesntExistsError = require("../../Exceptions/Department/DepartmentDoesntExistsError");
const DepartmentRequestDoesntExistsError = require("../../Exceptions/Department/DepartmentRequestDoesntExistsError");
const UserAlreadyInDepartmentError = require("../../Exceptions/Department/UserAlreadyInDepartmentError copy");
const UserIsNotDepartmentLeaderError = require("../../Exceptions/Department/UserIsNotDepartmentLeaderError");
const PrismaDepartmentRepository = require("../../Repositories/PrismaDepartmentRepository");
const PrismaDepartmentRequestRepository = require("../../Repositories/PrismaDepartmentRequestRepository");



class DepartmentService {
    constructor() {
        this.departmentRepository = new PrismaDepartmentRepository();
        this.departmentRequestRepository = new PrismaDepartmentRequestRepository();
    }

    async createMemberRequest(departmentRequest) {
        return await this.departmentRequestRepository.create(departmentRequest);
    }

    async linkUserToDepartment(userId, departmentId) {
        return await this.departmentRepository.linkUserToDepartment(userId, departmentId);
    }

    async getDepartmentById(id) {
        const department = await this.departmentRepository.getById(id);

        if (!department) throw new DepartmentDoesntExistsError();
        return department;
    }

    async departmentExists(id) {
        const department = await this.departmentRepository.getById(id);
        return Boolean(department);
    }

    async getUserDepartments(id) {
        return await this.departmentRepository.getUserDepartments(id);
    }

    async isUserAlreadyLinkedToDepartment(userId, departmentId) {
        const userDepartments = await this.getUserDepartments(userId);

        userDepartments.forEach(department => {
            if (department.id === departmentId) throw new UserAlreadyInDepartmentError();
        })
    }

    async isUserDepartmentLeader(userId, departmentId) {
        const department = await this.getDepartmentById(departmentId);

        if (department.getLeaderId() !== userId) throw new UserIsNotDepartmentLeaderError();
        return true;
    }

    async listDepartmentRequests(departmentId) {
        return await this.departmentRequestRepository.getRequestByDepartmentId(departmentId);
    }

    async deleteRequest(userId, departmentId) {
        return await this.departmentRequestRepository.deleteRequest(userId, departmentId);
    }

    async requestExists(memberId, departmentId) {
        const requests = this.departmentRequestRepository.findRequest(memberId, departmentId);
        if (!requests) throw new DepartmentRequestDoesntExistsError();
        return Boolean(requests);
    }
}

module.exports = new DepartmentService();