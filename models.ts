export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    birthdate: Date;
    email: string;
    phoneNumber?: string;
    status: "unverified" | "verified";
    gender: boolean;
}

export interface FestivalUser {
    _id: string;
    user: User;
    festival: Festival;
    balance: number;
    role: Role;
    imageUrl?: string;
}

export interface Festival {
    _id: string;
    name: string;
    description?: string;
    location?: string;
}

export type Role = "visitor" | "employee" | "organisator";

export type PaymentStatus =
    | "insufficientBalance"
    | "insufficientAge"
    | "accepted";

export interface Payment {
    _id: string;
    amount: number;
    description?: string;
    festival: Festival;
    festivalUser: FestivalUser;
    status: PaymentStatus;
}

export interface QRCode {
    _id: string;
    user: FestivalUser;
}

export interface Response<T> {
    status: number;
    message: string;
    data: T | null;
    errors?: {
        [param: string]: {
            message: string;
            debug?: string;
        };
    };
    version: string;
}
