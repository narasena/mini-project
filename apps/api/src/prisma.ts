import { PrismaClient } from '../src/prisma-generated/client';``

export default new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
