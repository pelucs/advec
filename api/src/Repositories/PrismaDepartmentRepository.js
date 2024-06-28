const { prisma } = require("../prismaClient")
const { DepartmentBuilder } = require("../Entities/department");


class PrismaDepartmentRepository {
    async getAll() {
        return await prisma.department.findMany();
    }
    
    async getById(id) {
        const row = await prisma.department.findUnique({
            where: { id }
        });

        if (!row) return null;

        return new DepartmentBuilder()
            .setId(row.id)
            .setName(row.name)
            .setLeaderId(row.leaderId)
            .build();
    }

    async getUserDepartments(userId) {
        return await prisma.department.findMany({
            where: {
                users: {
                    some: {
                        userId
                    }
                }
            }
        })
    }

    async linkUserToDepartment(userId, departmentId) {
        return await prisma.userDepartment.create({
            data: {
                userId,
                departmentId
            }
        })
    }
}

module.exports = PrismaDepartmentRepository;