import { PrismaClient } from '@prisma/client';
import log from '../log';

const prisma = new PrismaClient();

log.info('Connected to database');

export default prisma;
