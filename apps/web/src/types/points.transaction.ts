export interface IPointsTransaction {
    id: string;
    memberId: string
    amount: number;
    expiryDate: Date;
    ticketTransactionId: string;
    referralHistoryId: string;
    createdAt: Date;
}