import { Injectable } from '@angular/core';
    import { gql, Mutation } from 'apollo-angular';
    import { PutAppUserResponse } from '../../interface/app-user-response.interface';

    @Injectable({ providedIn: 'root' })
    export class PutAppUserGQL extends Mutation<PutAppUserResponse> {
        document = gql`
            mutation PutAppUser($input: CreateAppUserInput!) {
            putAppUser(input: $input) {
                id chats name email phoneNumber address status profilePictureUrl lastLogin onlineStatus created updated tenant isDeleted
            }
            }
        `;
    }