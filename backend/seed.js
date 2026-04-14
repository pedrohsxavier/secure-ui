const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {

    const passwordHash = await bcrypt.hash('123456', 10);

    const user = await prisma.user.create({
        data: {
            username: "admin",
            password: passwordHash
        }
    });

    console.log('User created:', user);
}

main()
  .catch((e) => {
      console.error(e);
  })
  .finally(async () => {
      await prisma.$disconnect();
  });