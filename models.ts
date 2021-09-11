export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    birthdate: Date;
    email: string;
    phoneNumber?: string;
    festivals: FestivalUser[];
    status: "unverified" | "verified";
    male: boolean;
}

export interface FestivalUser {
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
    user: User;
    festival: Festival;
}

export interface Response<T> {
    status: number;
    message: string;
    data: T;
    errors?: { code: number; message: string; debug?: string }[];
}
