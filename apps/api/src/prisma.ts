import { PrismaClient } from '../src/prisma-generated/client';``

export const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
