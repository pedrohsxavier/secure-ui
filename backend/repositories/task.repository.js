const prisma = require('../prisma');

async function findByUser(userId) {
    return prisma.task.findMany({
        where: { userId }
    });
}

async function create(data) {
    return prisma.task.create({ data });
}

async function update(id, data) {
    return prisma.task.update({
        where: { id },
        data
    });
}

async function remove(id) {
    return prisma.task.delete({
        where: { id }
    });
}

module.exports = {
    findByUser,
    create,
    update,
    remove
};