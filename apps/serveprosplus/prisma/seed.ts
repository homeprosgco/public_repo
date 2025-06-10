import { Prisma, PrismaClient, ServiceCategory, User } from '@prisma/client'
import { z } from 'zod';
import { createServiceProvider } from '~/routes/_static-site.account/service-provider/use-cases/create-service-provider.server';
import { userData } from '~/_lib/integrations/faker';
import { bookingData } from '~/_lib/integrations/faker/bookingData';
import { serviceProviderUserData } from '~/_lib/integrations/faker/serviceProviderUserData';
import randomArrayElements from '~/_lib/utils/random-array-elements';


const prisma = new PrismaClient();


async function main() {
  // const user = await prisma.user.create({
  //   data: { ...userData() }
  // });
  // console.log(user);
  // const users = await prisma.user.createMany({
  //   data: [...randomArrayElements(15, () => userData())]
  // });
  // console.log(users);

  const serviceProviders = randomArrayElements(15, async () => await createServiceProvider(serviceProviderUserData()))
  const complete = await Promise.all(serviceProviders);

  console.log(complete)

  // const serviceProvider = await createServiceProvider(serviceProviderUserData())
  // console.log(serviceProvider);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
