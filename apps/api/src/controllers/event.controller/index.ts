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
