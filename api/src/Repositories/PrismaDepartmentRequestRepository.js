const { prisma } = require("../prismaClient")
const { DepartmentBuilder } = require("../Entities/department");


class PrismaDepartmentRequestRepository {
    async create(departmentRequest) {
        await prisma.departmentRequests.create({
            data: departmentRequest.toPrisma()
        });
        return departmentRequest;
    }

    async getAll() {
        return await prisma.departmentRequests.findMany();
    }
    
    async getById(id) {
        const row = await prisma.departmentRequests.findUnique({
            where: { id }
        });

        return new DepartmentRequestBuilder()
            .setId(row.id)
            .setUserId(row.userId)
            .setDepartmentId(row.departmentId)
            .build();
    }

    async getRequestByDepartmentId(departmentId) {
        return await prisma.departmentRequests.findMany({
            where: { departmentId }
        });
    }
}

module.exports = PrismaDepartmentRequestRepository;