import { CreateUserInput, Token } from '@graphql-schema/*';
import { FirebaseAuthService } from '../_service/firebase/admin/auth.service';
export declare class AuthResolverService {
    private readonly firbaseAuthSvc;
    constructor(firbaseAuthSvc: FirebaseAuthService);
    createUser(createUserInput: CreateUserInput): Promise<Token>;
}
