export interface IDiscountCoupon {
    id: string
    memberId: string
    name: string
    type: string
    percentage: number
    expiryDate: Date
    isUsed: boolean
    referralHistoryId: string
    ticketTransactionId: string
}