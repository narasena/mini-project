import { prisma } from '@/prisma';
import { IEvent } from '@/types/event.type';
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

export async function createEvent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {
          creatorId,
          eventName,
          eventFormatId,
          eventTopicId,
          eventTag,
          isPrivateEvent,
          organizerName,
          organizerLogoImgUrl ,
          bannerImgUrl,
          eventStartDate,
          eventEndDate,
          eventStartTime,
          eventEndTime,
          eventLocation,
          eventDesc,
          ticketType,
          ticketName,
          ticketQty,
          ticketPrice,
          ticketDesc,
          ticketTermsAndCondition,
          ticketStartDate,
          ticketEndDate,
          eventCPName,
          eventCPEmail,
          eventCPCountryPhoneId,
          eventCPPhone,
          idCardStatus,
          maxTicketPerTransaction,
          oneEmailOneTransaction,
          ticketDataFormUnique,
          isDraft,
    }: IEvent = req.body
    
    const newEvent = await prisma.event.create({
      data: {
        creatorId,
        eventName,
        eventFormatId,
        eventTopicId,
        eventTag,
        isPrivateEvent,
        organizerName,
        organizerLogoImgUrl,
        bannerImgUrl,
        eventStartDate,
        eventEndDate,
        eventStartTime,
        eventEndTime,
        eventLocation,
        eventDesc,
        ticketType,
        ticketName,
        ticketQty,
        ticketPrice,
        ticketDesc,
        ticketTermsAndCondition,
        ticketStartDate,
        ticketEndDate,
        eventCPName,
        eventCPEmail,
        eventCPCountryPhoneId,
        eventCPPhone,
        idCardStatus,
        maxTicketPerTransaction,
        oneEmailOneTransaction,
        ticketDataFormUnique,
        isDraft
      },
    });
    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: newEvent,
    })
  } catch (error) {
    next(error);
  }
  
}

export async function getEvents(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const events = await prisma.event.findMany()
    res.status(200).json({
      success: true,
      message: 'Events retrieved successfully',
      events,
    })
  } catch (error) {
    next(error)
  }
}

export async function getEventByCreatorId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {payload} = req.body
    const creator = await prisma.creatorProfile.findUnique({
      where: {
        memberId: payload.id
      }
    })
    if(!creator) {
      throw {
        isExpose: true,
        status: 400,
        message: 'Creator not found'
      }
    }
    const creatorEvents = await prisma.event.findMany({
      where: {
        creatorId: creator!.id
      }
    })
    res.status(200).json({
      success: true,
      message: 'Events retrieved successfully',
      creatorEvents,
    })
  } catch (error) {
    next(error)
    
  }
  
}

export async function getEventById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params
    const event = await prisma.event.findUnique({
      where: {
        id: Number(id)
      }
    })
    if(!event) {
      throw {
        isExpose: true,
        status: 400,
        message: 'Event not found'
      }
    }
    res.status(200).json({
      success: true,
      message: 'Event retrieved successfully',
      event,
    })
  } catch (error) {
    next(error)
  }
}