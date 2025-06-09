import { UserProfileInput, UserProfile } from '@graphql-schema/*';
import { ServerContext } from '../_interface/server-context.interface';
export declare class UserProfileResolver {
    userProfileById(profileId: string, ctx: ServerContext): Promise<UserProfile>;
    createUserProfile(userProfileInput: UserProfileInput, ctx: ServerContext): Promise<UserProfile>;
    allUsers(ctx: ServerContext): Promise<UserProfile[]>;
}
