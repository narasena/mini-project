import './config';
import { PrismaClient } from '../src/prisma-generated/client';

export const prisma = new PrismaClient({ log: [ 'info', 'warn', 'error'] });
