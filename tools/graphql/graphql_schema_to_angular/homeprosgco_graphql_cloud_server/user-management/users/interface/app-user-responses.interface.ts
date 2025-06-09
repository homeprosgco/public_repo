import { AppUser } from './app-user.interface';

export interface DeleteAppUserResponse {
    deleteAppUser: { id: string };
}

export interface PutAppUserResponse {
    putAppUser: AppUser;
}

export interface GetAppUserResponse {
    getAppUser: AppUser;
}

export interface QueryAppUsersResponse {
    queryAppUsers: { items: AppUser[]; nextToken?: string };
}

export interface UpdateAppUserResponse {
    updateAppUser: AppUser;
}

export interface OnPutAppUserResponse {
    onPutAppUser: AppUser;
}
