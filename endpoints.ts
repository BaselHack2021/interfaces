import { PaymentStatus, Response, User } from "./models";

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

export type UpdateUserRequestResponse = Response<User>;

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
