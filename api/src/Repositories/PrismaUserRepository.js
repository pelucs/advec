const { prisma } = require("../prismaClient")
const { UserBuilder } = require("../Entities/user");


class PrismaUserRepository {
    async set(user) {
        console.log(user.toPrisma());
        await prisma.user.create({
            data: user.toPrisma()
        });
        return user;
    }

    async delete(id) {
        await prisma.user.delete({
            where: { id }
        });
    }

    async getByEmail(email) {
        const row = await prisma.user.findUnique({
            where: { email }
        });

        if (!row) return null;

        return new UserBuilder()
            .id(row.id)
            .name(row.name)
            .email(row.email)
            .password(row.password)
            .type(row.type)
            .build()
    }
    
    async getAll() {
        return await prisma.user.findMany();
    }
    
    async getById(id) {
        const row = await prisma.user.findUnique({
            where: { id }
        });

        return new UserBuilder()
            .id(row.id)
            .name(row.name)
            .email(row.email)
            .password(row.password)
            .type(row.type)
            .build()
    }
}

module.exports = PrismaUserRepository;