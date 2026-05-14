import { prisma } from "../src/util/prisma.util";

async function main() {
  const user = await prisma.user.findFirst();

  console.log(user);
}

main();
