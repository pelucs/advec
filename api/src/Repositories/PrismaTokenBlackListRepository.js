const { prisma } = require("../prismaClient");

class PrismaTokenBlackListRepository {

    async set(token) {
        await prisma.tokenBlackList.create({
            data: token
        });
        return token;
    }

    async delete(token) {
        await prisma.tokenBlackList.delete({
            where: token
        })
    }

    async getAll() {
        return prisma.tokenBlackList.findMany();
    }
    
    async IsTokenInBlackList(token) {
        const blackListedToken = await prisma
        .tokenBlackList.findUnique({
            where: token
        });

        return blackListedToken !== null;
    }
}

module.exports = PrismaTokenBlackListRepository;