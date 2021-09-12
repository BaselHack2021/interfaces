import { Festival, PaymentStatus, QRCode, Response, User } from "./models";

export type GetAllUsersResponse = Response<User[]>;

export type RegisterUserRequest = {
    firstName: string;
    lastName: string;
    gender: boolean;
    birthdate: string;
    email: string;
    phoneNumber?: string;
};
export type RegisterUserResponse = Response<User>;

export type UpdateUserRequest = {
    firstName?: string;
    lastName?: string;
    gender?: boolean;
    birthdate?: string;
    email?: string;
    phoneNumber?: string;
    status?: boolean;
};

export type UpdateUserResponse = Response<User>;

export type GetUserByIdRequest = {
    id: string;
};
export type GetUserByIdResponse = Response<User>;

export type CreatePaymentRequest = {
    price: number;
    description?: string;
    userId: string;
    festivalId: string;
    minimumAge?: number;
};
export type CreatePaymentResponse = Response<{
    success: boolean;
    message: string;
    status: PaymentStatus;
}>;

export type GetAllFestivalsResponse = Response<Festival[]>;

export type GetFestivalByIdRequest = {
    id: string;
};
export type GetFestivalByIdResponse = Response<Festival>;

export type UpdateFestivalRequest = {
    name: string;
    description?: string;
    location?: string;
};

export type UpdateFestivalResponse = Response<Festival>;

export type CreateFestivalRequest = {
    name: string;
    description?: string;
    location?: string;
};
export type CreateFestivalResponse = Response<Festival>;

export type GetAllQRCodesResponse = Response<QRCode[]>;

export type GetQRCodeByIdRequest = {
    id: string;
};
export type GetQRCodeByIdResponse = Response<QRCode>;

export type LinkQRCodeRequest = {
    qrcode: string;
    festivalUserId: string;
};
export type LinkQRCodeResponse = Response<null>;
