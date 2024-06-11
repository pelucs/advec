const { prisma } = require("../prismaClient")
const { UserBuilder } = require("../Entities/user");


class PrismaUserRepository {
    async set(user) {
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

        const user = new UserBuilder()
            .setId(row.id)
            .setName(row.name)
            .setEmail(row.email)
            .setPassword(row.password)
            .setType(row.type)
            .build();
            
        return user;
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