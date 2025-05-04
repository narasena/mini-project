import { TicketIDCard, TicketType } from "@/prisma-generated/client"

export interface IEvent {
    id: number
    creatorId: string
    eventName: string
    eventFormatId: number
    eventTopicId: number
    eventTag: string | null
    isPrivateEvent: boolean
    organizerName: string
    organizerLogoImgUrl: string | null
    bannerImgUrl: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc: string | null
    ticketType: TicketType
    ticketName: string
    ticketQty: number
    ticketPrice: number
    ticketDesc: string | null
    ticketTermsAndCondition: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus: TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction: boolean
    ticketDataFormUnique: boolean
    isDraft: boolean
}