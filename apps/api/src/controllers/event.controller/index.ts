import { prisma } from '@/prisma';
import { NextFunction, Request, Response } from 'express';


export async function findEventCategories(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
      const eventCategories = {
          eventFormats: await prisma.eventFormat.findMany(),
          eventTopics: await prisma.eventTopic.findMany(),
      };
     
    res.status(200).json({
      success: true,
      message: 'Event formats retrieved successfully',
      eventCategories,
    });
  } catch (error) {
    next(error);
  }
}
